// ==UserScript==
// @name        Bypass Key System
// @homepageURL https://discord.gg/gFNAH7WNZj
// @namespace   https://greasyfork.org/en/scripts/493960-arceus-bypass
// @version     2.5
// @description Bypass Arceus, Hydrogen, Delta, Trigon, Vegax, Codex, Linkvertise, panda, etc,...
// @author      Bacon But Pro
// @match       https://linkvertise.com/376138/arceus-x-neo-key-system-1?o=sharing*
// @match       https://linkvertise.com/*/*
// @match       https://socialwolvez.com/*
// @match       https://rekonise.com/*
// @match       https://mboost.me/a/*
// @match       https://loot-link.com/s?*
// @match       https://loot-links.com/s?*
// @match       https://lootlink.org/s?*
// @match       https://lootlinks.co/s?*
// @match       https://gateway.platoboost.com/a/*
// @match       *://*.keyrblx.com/*
// @match       https://lootdest.info/s?*
// @match       https://lootdest.org/s?*
// @match       https://mobile.codex.lol/*
// @match       https://pandadevelopment.net/getkey?*
// @match       https://lootdest.com/s?*
// @match       https://links-loot.com/s?*
// @match       https://linksloot.net/s?*
// @match       https://spdmteam.com/key-system*
// @match       https://*/recaptcha/*
// @match       https://*.hcaptcha.com/*hcaptcha-challenge*
// @match       https://*.hcaptcha.com/*checkbox*
// @match       https://*.hcaptcha.com/*captcha*
// @match       https://bot-hosting.net/panel/*
// @match       *://trigonevo.com/getkey/?hwid=*
// @match       https://work.ink/*/*
// @match       https://workink.net/*/*
// @match       https://paster.so/*
// @match       https://bstlar.com/*
// @match       https://sub2unlock.com/*
// @match       https://*.sub2get.com/*
// @match       https://boost.ink/*
// @require     https://greasyfork.org/scripts/464929-module-jquery-xiaoying/code/module_jquery_XiaoYing.js
// @require     https://greasyfork.org/scripts/464780-global-module/code/global_module.js
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js
// @require     https://github.com/BaconButPro/ron12373/raw/Premium/Bypass-Userscript/AutoGetCoin.js
// @require     https://github.com/BaconButPro/ron12373/raw/Premium/Bypass-Userscript/React.js
// @require     https://github.com/BaconButPro/ron12373/raw/Premium/Bypass-Userscript/Main.js

// @run-at      document-end
// @grant       GM_xmlhttpRequest
// @grant       GM_notification
// @grant       GM_openInTab

// @license     Bacon
// @connect     linkvertise.com
// @connect     short-jambo.com
// @connect     api.codex.lol
// @connect     cdn.jsdelivr.net
// @connect     fluxteam.net
// @connect     spdmteam.com
// @connect     api-gateway.platoboost.com
// @connect     api.valyse.best
// @connect     api.keyrblx.com
// @connect     pandadevelopment.net
// @connect     hohohubv-ac90f67762c4.herokuapp.com
// @connect     tsuo-script.xyz
// @icon        https://cdn141.picsart.com/351217840073211.png
// @downloadURL https://github.com/BaconButPro/ron12373/raw/Premium/Install-Userscript/Bypass.user.js
// @updateURL https://github.com/BaconButPro/ron12373/raw/Premium/Install-Userscript/Bypass.user.js
// ==/UserScript==
