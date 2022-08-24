import { getPersonData } from '/lib/persondata.js';

async function fillPersonDataIntoDossierCard(personName, cardElement) {
  let personData;
  try {
    personData = await getPersonData(personName);
  } catch (err) {
    console.error(err);
    personData = {};
    cardElement.classList.add('unknown-person');
  }

  const linkEl = cardElement.querySelector('.dossier-card-link');
  linkEl.setAttribute('href', `#${personName}`);

  const nameEl = cardElement.querySelector('.dossier-card-name');
  if (!personData['preferred_name']) {
    personData['preferred_name'] = 'Unknown';
    cardElement.classList.add('unknown-name');
  }
  nameEl.innerHTML = personData['preferred_name'];

  const pictureEl = cardElement.querySelector('.dossier-card-picture');
  const bgPictureEl = cardElement.querySelector('.dossier-card-background-picture');
  if (!personData['picture_url']) {
    const pictureNumber = Math.floor(Math.random() * 3) + 1;
    personData['picture_url'] = `images/_blurryperson${pictureNumber}.jpg`;
    cardElement.classList.add('unknown-picture');
  }
  pictureEl.setAttribute('src', personData['picture_url']);
  pictureEl.setAttribute('alt', `Picture of ${personData['preferred_name']}`);
  bgPictureEl.setAttribute('src', personData['picture_url']);
  bgPictureEl.setAttribute('alt', `Picture of ${personData['preferred_name']}`);
}

async function initDossierCard(personName, cardTemplate, parentElement) {
  const cardElement = cardTemplate.cloneNode(true);
  parentElement.appendChild(cardElement);

  cardElement.classList.add('loading');
  await fillPersonDataIntoDossierCard(personName, cardElement);
  cardElement.classList.remove('loading');
}

export {
  fillPersonDataIntoDossierCard,
  initDossierCard,
};