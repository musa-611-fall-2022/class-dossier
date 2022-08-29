// Object mapping person names to data loaded from JSON files.
let people = {};

async function loadPersonHTML(personName) {
  const response = await fetch(`data/${personName}.html`);
  if (response.status >= 400) {
    throw Error(`No HTML for ${personName} found.`);
  }

  const personHTML = await response.text();
  return personHTML;
}

async function loadPersonData(personName) {
  const response = await fetch(`data/${personName}.json`);
  if (response.status >= 400) {
    throw Error(`No person data for ${personName} found.`);
  }

  try {
    const personData = await response.json();
    return personData;
  } catch (err) {
    throw Error(`Was not able to parse JSON from data file for ${personName}.`);
  }
}

async function getPersonData(personName) {
  if (people[personName] === undefined) {
    people[personName] = await loadPersonData(personName);
  }
  return people[personName];
}

export {
  loadPersonHTML,
  loadPersonData,
  getPersonData,
  people,
};