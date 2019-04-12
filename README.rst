Cross-Origin Login Detection
=============================

Numerous major web platforms have a security vulnerability that discloses the existence of an account. The vulnerability allows any random web site to establish that users have accounts at various other web sites. Because most people have accounts at multiple web sites and because there are lots of platforms with non-random userbase demographics, the vulnerability could be used to infer personal details about users. Moreover, it could be exploited en mass to build databases such as those being used by the many companies that track people online.

Demonstration
-------------
Clone this repo

::

    git clone https://github.com/abstract-theory/socialmedia-leak.git

Open up ``index.html`` in your browser. This page will scan 34 web sites and list them as either logged in or not logged in.

Basic Principles
------------------

Web sites that maintain user accounts often have a login URL that allows redirection after login. The redirection, though, behaves differently depending on whether or not a user is already logged in.  For example, if a Facebook user is not logged in and they attempt to visit a non-public Facebook page, they will be redirected to the login URL shown below.

::

    https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Fnon-public-page

At this URL, the user will be prompted for login credentials. However, if a logged in user visits this URL, they will be redirected to the URL given by ``next`` parameter.

This type of login URL allows redirected cross-site requests. When a request succeeds, it means the user is logged in. When it fails, then they are not logged in.


Additional Technical Details
----------------------------
Modern browsers block many types of cross-site requests. This is known as the Same Origin Policy (SOP). Browsers, however, do not apply SOP to all requests. For example, images, CSS, JavaScript, and fonts are not blocked. The same goes for media enclosed in ``<video>`` and ``<audio>`` tags. Server responses with certain CORS headers are also not subject to SOP. Many sites also use rudimentary validation of the redirect URL. That is, they ensure that the URL is not an open redirect. None the less, validation is often rudimentary.

Often, this attack can be carried out by crafting a URL that redirects users to the target web site's favicon image. This image is found on almost all web sites and it usually has the file name "favicon.ico." Using the Facebook login URL from above, the crafted URL would look like the following:

::

    https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico

This URL is then placed in an ``<img>`` tag on the attacker's web page. Attempting to load the image results in one of two JavaScript events: ``onload``, if the user is logged in, and ``onerror`` if they are not logged in.
