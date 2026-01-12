// ==UserScript==
// @name         Bypass Key System [Premium]
// @homepageURL  https://discord.gg/gFNAH7WNZj
// @namespace    https://tampermonkey.net/
// @version      3.0.5
// @description  Premium Userscript Helping you Passing The Adlink
// @author       Bacon But Pro
// @match        *://linkvertise.com/*/*
// @match        *://linkvertise.com/access?hash=*
// @match        *://loot-link.com/s?*
// @match        *://loot-links.com/s?*
// @match        *://lootlink.org/s?*
// @match        *://lootlinks.co/s?*
// @match        *://lootdest.info/s?*
// @match        *://lootdest.org/s?*
// @match        *://lootdest.com/s?*
// @match        *://links-loot.com/s?*
// @match        *://linksloot.net/s?*
// @match        *://spdmteam.com/*
// @match        *://rekonise.com/*
// @match        *://rekonise.org/*
// @match        *://linkunlocker.com/*
// @match        *://mboost.me/*
// @match        *://go.linkify.ru/*
// @match        *://blox-script.com/get-key*
// @match        *://paster.so/*
// @match        *://sub2unlock.io/*
// @match        *://sub4unlock.pro/*
// @match        *://sub4unlock.com/*
// @match        *://sub2unlock.com/*
// @match        *://sub2unlock.top/*
// @match        *://sub2unlock.me/*
// @match        *://*.sub2get.com/*
// @match        *://dusarisalary.com/*
// @match        *://bloggingdaze.com/*
// @match        *://ldnesfspublic.org/*
// @match        *://adfoc.us/*
// @match        *://socialwolvez.com/*
// @match        *://boost.ink/*
// @match        *://social-unlock.com/*
// @match        *://mobile.codex.lol/*
// @match        *://auth.platoboost.com/*
// @match        *://auth.platoboost.click/*
// @match        *://auth.platoboost.net/*
// @match        *://auth.platorelay.com/*
// @match        *://auth.platoboost.app/*
// @match        *://auth.platoboost.me/*
// @match        *://keyrblx.com/*
// @match        *://bstlar.com/*
// @match        *://pandadevelopment.net/getkey?*
// @match        *://link-unlock.com/*
// @match        *://link2unlock.com/*
// @match        *://archub.dev/key-system/getkey?hwid=*
// @match        *://deltaios-executor.com/ads.html?URL=*
// @match        *://*.tapvietcode.com/*
// @match        *://getkey.farrghii.com/*
// @match        *://quartyz.com/*
// @match        *://bstshrt.com/*
// @match        *://hehehub-acsu123.pythonanywhere.com/api/getkey?hwid=*
// @match        *://key.thanhub.com/*
// @match        *://lockr.so/1dMPdKCyf*
// @match        *://nirbytes.com/sub2unlock/*
// @match        *://scriptpastebins.com/*
// @match        *://robloxscripts.gg/*
// @match        *://linkzy.space/u/*
// @match        *://neoxsoftworks.eu/key.html*
// @match        *://ntt-hub.xyz/key/get-key*
// @match        *://yeulink.com/*
// @match        *://link4m.com/*
// @match        *://www.google.com/recaptcha/api2/*
// @match        *://www.gstatic.com/recaptcha/releases/*
// @match        *://*.hcaptcha.com/*
// @require      https://github.com/BaconButPro/ron12373/raw/Premium/Bypass-Userscript/style.js
// @require      https://cdn.rawgit.com/ricmoo/aes-js/e27b99df/index.js
// @require      https://github.com/BaconButPro/ron12373/raw/Premium/Bypass-Userscript/Main.js
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// @grant        GM_info
// @grant        unsafeWindow
// @run-at       document-end
// @connect      linkvertise.com
// @connect      api.codex.lol
// @connect      keyrblx.com
// @connect      pandadevelopment.net
// @connect      loot-link.com
// @connect      loot-links.com
// @connect      lootlink.org
// @connect      lootlinks.co
// @connect      lootdest.info
// @connect      lootdest.org
// @connect      lootdest.com
// @connect      links-loot.com
// @connect      linksloot.net
// @connect      auth.platorelay.com
// @connect      auth.platoboost.app
// @connect      auth.platoboost.net
// @connect      auth.platoboost.me
// @connect      *
// @icon         https://cdn141.picsart.com/351217840073211.png
// ==/UserScript==

function key() {
    return ''; // Your Access Key
}

function config() {
    return {
        auto_copy: 'true', // Auto Copy: 'true' or 'false'
        lootlabs_v2: true, // lootlabs v2 Bypass
        buttonUrl: [''], // Enter Url Want to show Button
        linkvertise_delay: 0, // Delay Before redirect
        Open_Captcha: false // Auto Open Captcha
    };
}
