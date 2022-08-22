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

// Object mapping person names to data loaded from JSON files.
let people = {};

async function loadPersonData(personName) {
  const response = await fetch(`data/${personName}.json`);
  if (response.status >= 400) {
    throw Error(`No person data for ${personName} found.`);
  }

  const personData = await response.json();
  return personData;
}

async function getPersonData(personName) {
  if (people[personName] === undefined) {
    people[personName] = await loadPersonData(personName);
  }
  return people[personName];
}

async function fillPersonDataIntoDossierCard(personName, cardElement) {
  const personData = await getPersonData(personName);

  const linkEl = cardElement.querySelector('.dossier-card-link');
  linkEl.setAttribute('href', `#${personName}`);

  const nameEl = cardElement.querySelector('.dossier-card-name');
  nameEl.innerHTML = personData['preferred_name'];

  const pictureEl = cardElement.querySelector('.dossier-card-picture');
  pictureEl.setAttribute('src', personData['picture_url']);
  pictureEl.setAttribute('alt', `Picture of ${personData['preferred_name']}`);
}

async function initDossierCard(personName, cardTemplate, parentElement) {
  const cardElement = cardTemplate.cloneNode(true);
  parentElement.appendChild(cardElement);

  cardElement.classList.add('loading');
  await fillPersonDataIntoDossierCard(personName, cardElement)
  cardElement.classList.remove('loading');
}

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