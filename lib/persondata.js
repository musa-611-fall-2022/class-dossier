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

export {
  loadPersonData,
  getPersonData,
  people,
};