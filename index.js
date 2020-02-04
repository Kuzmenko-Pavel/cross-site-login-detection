let webSites = {
    "Square": "https://squareup.com/login?return_to=%2Ffavicon.ico",
    "Twitter": "https://twitter.com/login?redirect_after_login=%2f..%2ffavicon.ico",
    "Facebook": "https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",
    "Gmail": "https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail",
    "Youtube": "https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube",
    "Google Plus": "https://plus.google.com/up/accounts/upgrade/?continue=https://plus.google.com/favicon.ico",
    "Skype": "https://login.skype.com/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico",
    "Spotify": "https://www.spotify.com/en/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico",
    "Reddit": "https://www.reddit.com/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico",
    "Tumblr": "https://www.tumblr.com/login?redirect_to=%2Ffavicon.ico",
    "Expedia": "https://www.expedia.de/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico",
    "Dropbox": "https://www.dropbox.com/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Fabout%2Fdropbox_logo_glyph_2015.svg",
    "Amazon.com": "https://www.amazon.com/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico",
    "Pinterest": "https://www.pinterest.com/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico",
    "Foursquare": "https://de.foursquare.com/login?continue=%2Ffavicon.ico",
    "Battle.net": "https://eu.battle.net/login/de/index?ref=http://eu.battle.net/favicon.ico",
    "Steam": "https://store.steampowered.com/login/?redir=favicon.ico",
    "Academia.edu": "https://www.academia.edu/login?cp=/favicon.ico&cs=www",
    "Blogger": "https://accounts.google.com/ServiceLogin?service=blogger&hl=de&passive=1209600&continue=https://www.blogger.com/favicon.ico",
    "Github": "https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Ffavicon.ico%3Fid%3D1",
    "Medium": "https://medium.com/m/signin?redirect=https%3A%2F%2Fmedium.com%2Ffavicon.ico&loginType=default",
    "Hackernews": "https://news.ycombinator.com/login?goto=y18.gif%23",
    "Carbonmade": "https://carbonmade.com/signin?returnTo=favicon.ico",
    "EdX": "https://courses.edx.org/login?next=/favicon.ico",
    "Slack": "https://slack.com/checkcookie?redir=https%3A%2F%2Fslack.com%2Ffavicon.ico%23",
    "Khan Academy": "https://www.khanacademy.org/login?continue=https%3A//www.khanacademy.org/favicon.ico",
    "Paypal": "https://www.paypal.com/signin?returnUri=https://t.paypal.com/ts?v=1.0.0",
    "500px": "https://500px.com/login?r=%2Ffavicon.ico",
    "Airbnb": "https://www.airbnb.com/login?redirect_params[action]=favicon.ico&redirect_params[controller]=home",
    "Disqus": "https://disqus.com/profile/login/?next=https%3A%2F%2Fdisqus.com%2Ffavicon.ico",
    "Meetup": "https://secure.meetup.com/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2Fimg%2Fajax_loader_trans.gif",
    "BitBucket": "https://bitbucket.org/account/signin/?next=/favicon.ico",
    "Indeed": "https://secure.indeed.com/account/login?continue=%2ffavicon.ico",
    "VK": "https://vk.com/login?u=2&to=ZmF2aWNvbi5pY28-"
};

function findLoginStatus(name, url) {
    let img = document.createElement('img');
    img.src = url;
    img.onload = function() {
        displayResult(name, url, 'loggedIn');
    };
    img.onerror = function() {
        displayResult(name, url, 'notLoggedIn');
    };
}

function displayResult(name, url, id) {
    let favicon = faviconUri(name, url);
    let el = `<a href="${url}" rel="noreferrer"><img src="${favicon}">${name}</a>`;
    document.getElementById(id).innerHTML += el;
}

function faviconUri(name, url) {
    let re;
    let iconUrls = {
        'Dropbox': 'https://www.dropbox.com/static/images/favicon.ico',
        'Youtube': 'https://www.dropbox.com/static/images/favicon.ico',
        'Gmail': 'https://mail.google.com/favicon.ico',
        'Meetup':'https://www.meetup.com/mu_static/en-US/a68780390bd4c53c3a45256d4f52178c.ico',
        'Battle.net': 'https://eu.blizzard.com/static/_images/favicon.ico',
        'Paypal':'https://www.paypalobjects.com/favicon.ico',
    };
    let favicon = iconUrls[name];
    if (!favicon) {
        re = /^(https:\/\/[^\/]+)\/.*/i;
        favicon = url.replace(re, "$1/favicon.ico");
    }
    return favicon;
}

function checkwebSites() {
    let name;
    for (name in webSites)
        findLoginStatus(name, webSites[name]);
}

window.onload = function () {
    checkwebSites();
};
