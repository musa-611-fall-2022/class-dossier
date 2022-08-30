/* globals describe it expect process */
import { stat, readFile } from 'node:fs/promises';

expect.extend({
  toHaveLength(received, n) {
    const pass = received.length === n;
    return { pass, message: () => `expected "${received}" ${pass ? 'not ' : ''}to have length ${n}` };
  },
  toHaveLengthAtLeast(received, n) {
    const pass = received.length >= n;
    return { pass, message: () => `expected "${received}" ${pass ? 'not ' : ''}to have length of at least ${n}` };
  },
  toContainKey(received, key) {
    const pass = key in received;
    return { pass, message: () => `expected the key "${key}" ${pass ? 'not ' : ''}to be among the keys ${JSON.stringify(Object.keys(received).sort())}` };
  },
  async toHaveSizeUnder(received, bytes) {
    const stats = await stat(received);
    const pass = stats.size < bytes;
    return { pass, message: () => `expected size (in bytes) of "${received}" to ${pass ? 'not ' : ''}be under ${bytes}.`};
  },
});

describe('The changed files', () => {
  it ('should include exactly one HTML file in the data folder', () => {
    const modifiedFiles = JSON.parse(process.env.MODIFIED_FILES);
    const modifiedHTMLFiles = modifiedFiles.filter(f => /data\/.*\.html/.test(f));
    expect(modifiedHTMLFiles).toHaveLength(1);
  });

  it ('should include exactly one JSON file in the data folder', () => {
    const modifiedFiles = JSON.parse(process.env.MODIFIED_FILES);
    const modifiedJSONFiles = modifiedFiles.filter(f => /data\/.*\.json/.test(f));
    expect(modifiedJSONFiles).toHaveLength(1);
  });
});

describe('The added files', () => {
  it ('should include at least one picture in the images folder', () => {
    const addedFiles = JSON.parse(process.env.ADDED_FILES);
    const addedImageFiles = addedFiles.filter(f => /images\/.*/.test(f));
    expect(addedImageFiles).toHaveLengthAtLeast(1);
  });

  it ('should not include files in any other folder besides images', () => {
    const addedFiles = JSON.parse(process.env.ADDED_FILES);
    const addedImageFiles = addedFiles.filter(f => !/images\/.*/.test(f));
    expect(addedImageFiles).toHaveLength(0);
  });
});

describe('The removed files', () => {
  it ('should be empty', () => {
    const removedFiles = JSON.parse(process.env.REMOVED_FILES);
    expect(removedFiles).toHaveLength(0);
  });
});

describe('The modified JSON file', () => {
  const expectedAttributes = [
    'preferred_name',
    'pronouns',
    'picture_url',
    'github_username',
    'portfolio_url',
    'hometown',
    'hometown_center',
    'hometown_zoom',
    'os',
    'browser',
  ];

  for (const attr of expectedAttributes) {
    it (`should contain the attribute ${attr}`, async () => {
      const modifiedFiles = JSON.parse(process.env.MODIFIED_FILES);
      const modifiedJSONFiles = modifiedFiles.filter(f => /data\/.*\.json/.test(f));
      if (modifiedFiles) {
        const f = modifiedJSONFiles[0];
        const data = JSON.parse(await readFile(f));
        expect(data).toContainKey(attr);
      }
    });
  }

  it (`should contain a GeoJSON point in the hometown_center attribute`, async () => {
    const modifiedFiles = JSON.parse(process.env.MODIFIED_FILES);
    const modifiedJSONFiles = modifiedFiles.filter(f => /data\/.*\.json/.test(f));
    if (modifiedFiles) {
      const f = modifiedJSONFiles[0];
      const data = JSON.parse(await readFile(f));
      const hometownCenter = data['hometown_center'];
      expect(hometownCenter).toBeDefined();

      expect(hometownCenter).toContainKey('type');
      expect(hometownCenter.type).toBe('Point');
      expect(hometownCenter).toContainKey('coordinates');
      expect(hometownCenter.coordinates).toHaveLength(2);
    }
  });
});

describe('The added image(s)', () => {
  it ('should not be more than 1MB each', async () => {
    const addedFiles = JSON.parse(process.env.ADDED_FILES);
    const addedImageFiles = addedFiles.filter(f => !/images\/.*/.test(f));
    for (const f of addedImageFiles) {
      await expect(f).toHaveSizeUnder(1024 * 1024);
    }
  });
});