// ==UserScript==
// @name         LSS Forum: SozialMedia Verstecken
// @namespace    leitstellenspiel.de
// @version      1.0
// @description  Blendet bestimmte Forenelemente aus
// @author       MissSobol
// @match        https://forum.leitstellenspiel.de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Flags zum Steuern des Ausblendens
    const hideSocialMedia = true; // Elemente TikTok, Facebook, Insta
    const hideToGame = true; // Element ToGame

    // Funktion zum Verstecken der Elemente
    function hideElements() {
        const identifiersToHide = [];

        if (hideSocialMedia) {
            identifiersToHide.push("com.woltlab.wcf.generic20", "com.woltlab.wcf.generic21", "com.woltlab.wcf.generic22");
        }

        if (hideToGame) {
            identifiersToHide.push("com.woltlab.wcf.generic19");
        }

        // Iteriere durch alle zu versteckenden Identifiers und verstecke die entsprechenden Elemente
        identifiersToHide.forEach(identifier => {
            const elements = document.querySelectorAll(`li[data-identifier='${identifier}']`);
            elements.forEach(element => {
                element.style.display = 'none';
            });
        });
    }

    // Verstecke Elemente sofort beim Start des Skripts
    hideElements();

    // Zusätzlicher Schutz für dynamische Inhalte
    new MutationObserver(hideElements).observe(document.body, { childList: true, subtree: true });

})();
