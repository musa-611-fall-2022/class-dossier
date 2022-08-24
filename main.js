/* globals document */

import { initDossierCard } from '/lib/dossiercards.js';

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

function initAllDossierCards() {
  const cardTemplate = document.querySelector('#dossier-card-template').content.querySelector('.dossier-card');
  const instructorCardList = document.querySelector('#dossier-cards-instructors');
  const studentCardList = document.querySelector('#dossier-cards-students');

  for (const personName of instructorNames) {
    initDossierCard(personName, cardTemplate, instructorCardList);
  }

  for (const personName of studentNames) {
    initDossierCard(personName, cardTemplate, studentCardList);
  }
}

initAllDossierCards();