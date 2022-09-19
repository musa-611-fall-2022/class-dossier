/* globals document, window */

import { initDossierCard } from './lib/dossiercards.js';
import { showDossierFile, closeDossierFile, getDossierFileMap } from './lib/dossierfile.js';
import { people } from './lib/persondata.js';

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

function clearHash() {
  const event = new window.HashChangeEvent('hashchange',
    {
      oldURL: window.location.toString(),
      newURL: window.location.toString().split('#')[0],
    });
  window.history.pushState('', document.title, window.location.pathname);
  window.dispatchEvent(event);
}

function hideDossierFileOnEscKey(evt) {
  if (evt.key == 'Escape') {
    clearHash();
  }
}

function hideDossierFileOnClickOutside(evt) {
  if (evt.target == dossierFileContainer) {
    clearHash();
  }
}

initAllDossierCards();
window.addEventListener('hashchange', showDossierFileBasedOnHash);
showDossierFileBasedOnHash();

window.addEventListener('keydown', hideDossierFileOnEscKey);
dossierFileContainer.addEventListener('click', hideDossierFileOnClickOutside);

window.map = getDossierFileMap(dossierFileContainer);
window.people = people;
