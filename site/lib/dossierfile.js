import { getPersonData, loadPersonHTML } from './persondata.js';

const osSources = {
  'Windows': 'images/windows.png',
  'MacOS': 'images/macos.png',
  'Linux': 'images/linux.png',
  'Android': 'images/android.png',
  'iOS': 'images/ios.png',
  'ChromeOS': 'images/chrome.png',
};

const osAltLabels = {
  'Windows': 'Windows',
  'MacOS': 'MacOS',
  'Linux': 'Linux',
  'Android': 'Android',
  'iOS': 'iOS',
  'ChromeOS': 'ChromeOS',
};

const browserSources = {
  'Chrome': 'images/chrome.png',
  'Firefox': 'images/firefox.png',
  'Edge': 'images/edge.png',
  'Exlorer': 'images/exlorer.png',
  'Opera': 'images/opera.png',
  'Safari': 'images/safari.png',
};

const browserAltLabels = {
  'Chrome': 'Google Chrome',
  'Firefox': 'Mozilla Firefox',
  'Edge': 'Microsoft Edge',
  'Exlorer': 'Microsoft Exlorer',
  'Opera': 'Opera',
  'Safari': 'Apple Safari',
};

function getDossierFileMap(fileElement) {
  if (fileElement.map === undefined) {
    const mapEl = fileElement.querySelector('.dossier-file-map');
    fileElement.map = L.map(mapEl);
  }
  return fileElement.map;
}

async function fillPersonDataIntoDossierFile(personName, fileElement) {
  // Ensure that we have the JSON data loaded.
  let personData = await getPersonData(personName);

  // Fill in the preferred name
  const nameEl = fileElement.querySelector('.dossier-file-name');
  nameEl.innerHTML = personData['preferred_name'] || 'Unknown';

  // Fill in the preferred pronouns
  const pronounsEl = fileElement.querySelector('.dossier-file-pronouns');
  pronounsEl.innerHTML = personData['pronouns'] || '';

  // Fill in the person's picture
  const pictureEl = fileElement.querySelector('.dossier-file-picture');
  const bgPictureEl = fileElement.querySelector('.dossier-file-background-picture');
  if (!personData['picture_url']) {
    const pictureNumber = 1;//Math.floor(Math.random() * 3) + 1;
    personData['picture_url'] = `images/_blurryperson${pictureNumber}.jpg`;
  }
  pictureEl.setAttribute('src', personData['picture_url']);
  pictureEl.setAttribute('alt', `Picture of ${personData['preferred_name']}`);
  bgPictureEl.setAttribute('src', personData['picture_url']);
  bgPictureEl.setAttribute('alt', `Picture of ${personData['preferred_name']}`);

  // Fill in the GitHub username and URL
  const githubEl = fileElement.querySelector('.dossier-file-github');
  githubEl.innerHTML = `@${personData['github_username']}`;
  githubEl.setAttribute('href', `https://www.github.com/${personData['github_username']}`);

  // Fill in the portfolio URL
  const portfolioEl = fileElement.querySelector('.dossier-file-portfolio');
  portfolioEl.setAttribute('href', personData['portfolio_url']);

  // Fill in the hometown label
  const hometownEl = fileElement.querySelector('.dossier-file-hometown');
  hometownEl.innerHTML = personData['hometown'];

  // Update the hometown map
  const centerPoint = personData['hometown_center'] || {coordinates: [0, 0]};
  const zoom = personData['hometown_zoom'];
  const hometownMap = getDossierFileMap(fileElement);
  hometownMap.setView([centerPoint.coordinates[1], centerPoint.coordinates[0]], zoom);

  // Fill in the operating system icons
  const osEl = fileElement.querySelector('.os-icon');
  osEl.src = osSources[personData['os']];
  osEl.alt = osAltLabels[personData['os']];
  osEl.title = osAltLabels[personData['os']];

  // Fill in the browser icons
  const browserEl = fileElement.querySelector('.browser-icon');
  browserEl.src = browserSources[personData['browser']];
  browserEl.alt = browserAltLabels[personData['browser']];
  browserEl.title = browserAltLabels[personData['browser']];

  // Load and fill in the extra paragraph content
  let personHTML = await loadPersonHTML(personName);

  const htmlContainerEl = fileElement.querySelector('.dossier-file-freeform-info');
  htmlContainerEl.innerHTML = personHTML;
}

function closeDossierFile(fileElement) {
  fileElement.classList.remove('open');
}

async function showDossierFile(personName, fileElement) {
  try {
    fileElement.classList.add('open', 'loading');
    await fillPersonDataIntoDossierFile(personName, fileElement);
    fileElement.classList.remove('loading');
  } catch (err) {
    console.error(err);
    closeDossierFile(fileElement);
  }
}

export {
  closeDossierFile,
  showDossierFile,
};