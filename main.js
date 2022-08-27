/* globals document, window */

import { initDossierCard } from '/lib/dossiercards.js';
import { showDossierFile, closeDossierFile } from '/lib/dossierfile.js';

// Ordered lists of instructor and student names.
const instructorNames = [
  'mjumbepoe',
  'jingyili',
];
const studentNames = [
  'makaylaharper',
  'osmanbarron',
  'mistake',
  'tameraaustin',
];

const cardTemplate = document.querySelector('#dossier-card-template').content.querySelector('.dossier-card');
const instructorCardList = document.querySelector('#dossier-cards-instructors');
const studentCardList = document.querySelector('#dossier-cards-students');

function initAllDossierCards() {
  for (const personName of instructorNames) {
    initDossierCard(personName, cardTemplate, instructorCardList);
  }

  for (const personName of studentNames) {
    initDossierCard(personName, cardTemplate, studentCardList);
  }
}

const dossierFileContainer = document.querySelector('#dossier-file-container');

function showDossierFileBasedOnHash() {
  const personName = window.location.hash;
  if (!personName) {
    closeDossierFile(dossierFileContainer);
  } else {
    console.log('showing file for ' + personName);
    showDossierFile(personName.slice(1), dossierFileContainer);
  }
}

function handleKeyDownEvent(evt) {
  if (evt.key == 'Escape') {
    window.location.hash = '';
  }
}

initAllDossierCards();
window.addEventListener('hashchange', showDossierFileBasedOnHash);
showDossierFileBasedOnHash();

window.addEventListener('keydown', handleKeyDownEvent);
dossierFileContainer.addEventListener('click', (evt) => {
  if (evt.target == dossierFileContainer) {
    window.location.hash = '';
  }
});