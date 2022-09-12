/* globals document, window */

import { initDossierCard } from './lib/dossiercards.js';
import { showDossierFile, closeDossierFile, getDossierFileMap } from './lib/dossierfile.js';

// Ordered lists of instructor and student names.
const instructorNames = [
  'mjumbepoe',
  'jingyili',
];
const studentNames = [
  'simranarora',
  'myronjoelcabaticbanez',
  'yuewendai',
  'micahepstein',
  'sofiafasullo',
  'henrycfeinstein',
  'morgancharlesowaingriffiths',
  'yihonghu',
  'charliechristopherhuemmler',
  'yuhaojia',
  'minwookkang',
  'benkeel',
  'jieli',
  'yingxueou',
  'stutisingh',
  'jonathonsun',
  'tomsun',
  'yifeisun',
  'zilewu',
  'zhonghuayang',
  'shengaoyi',
  'troyzh',
  'hanzhizhang',
  'xueningzhang',
  'yingtongzhong',
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
    showDossierFile(personName.slice(1), dossierFileContainer);
  }
}

function hideDossierFileOnEscKey(evt) {
  if (evt.key == 'Escape') {
    window.location.hash = '';
  }
}

function hideDossierFileOnClickOutside(evt) {
  if (evt.target == dossierFileContainer) {
    window.location.hash = '';
  }
}

initAllDossierCards();
window.addEventListener('hashchange', showDossierFileBasedOnHash);
showDossierFileBasedOnHash();

window.addEventListener('keydown', hideDossierFileOnEscKey);
dossierFileContainer.addEventListener('click', hideDossierFileOnClickOutside);

window.map = getDossierFileMap(dossierFileContainer);