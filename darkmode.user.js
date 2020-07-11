// ==UserScript==
// @name         Messenger dark mode
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Make messenger great again etc.
// @author       Simon
// @updateURL    https://raw.githubusercontent.com/simon-nystrom/messenger-dark/master/darkmode.js
// @downloadURL    https://raw.githubusercontent.com/simon-nystrom/messenger-dark/master/darkmode.js
// @match        https://www.messenger.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';


    GM_addStyle(`
        input::placeholder,
        ._1ht6,
        .timestamp,
        ._1ht3 ._1htf,
        h2 ._3oh-,
        ._5swm *,
        ._2v6o,
        ._1mf._1mj
        {
        color: #fff !important;
        }
    `);

    GM_addStyle('._1wfr, ._4gd0 { background: #313131 !important; }');
    GM_addStyle('._4sp8 { background: rgb(70,70,72) !important; }');
    GM_addStyle('._4rv3, ._5irm._7mkm { background: rgb(70,70,72) !important; }');
    GM_addStyle('._2xhi { background: #313131 !important; }');
    GM_addStyle('._3oh- { color: black !important; }');
    GM_addStyle('._1p1v { color: white !important; }');


})();