Ilias Autologin
===============

This Web extension makes using the Ilias-Platform easier by making the login procedure easier.
You can use it with Chrome and now also Firefox and Firefox for Android!

Installation
------------

### Firefox Add-ons

You can just install the extension from the [firefox Add-On registry](https://addons.mozilla.org/en-US/firefox/addon/ilias-autologin/)

### Chrome-Webstore

The easiest way to install the extension, is to download it from the Chrome webstore
[Ilias Autologin](https://chrome.google.com/webstore/detail/ilias-autologin/japchgihpfchnicmnhbkeloakalkndlp)

### crx-File

download the crx file and open it with Google Chrome / Chromium. You will be prompted to accept the permissions; accept them and install the extension.


### From source (for development)

#### in Firefox
1. Download the Repository: either do:
`git clone https://github.com/csicar/Ilias-Autologin Ilias-Autologin`
or click on the **download**-Button
2. Open Firefoxes [debugging page](about:debugging)
3. Click on enable add-on debugging
4. Click on `Load temporary Add-on`
5. select the `loginSelect.js` file

#### in Chrome
1. Download the Repository: either do:
`git clone https://github.com/csicar/Ilias-Autologin Ilias-Autologin`
or click on the **download**-Button
2. Open Chrome / Chromium and go to the [extension page](chrome://extensions)
3. Click on enable developer mode
4. Click on load unpackaged extension
5. choose the downloaded folder

Usage
-----

If your ILIAS-Login is managed by Chrome / Chromium do the following steps to login:
- Click on login on the ILIAS-Page
- once you are asked for your credentials just click anywhere on the page

> Note: the 2nd step is necessary, for security features by google chrome; a better solution can be discussed in the issues
