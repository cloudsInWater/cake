const { resolve } = require('path');
const { readdirSync, statSync, existsSync } = require('fs');

const entry = {
  app: './web/app',
};

const entryFolderPath = './web/app/entry';
const entryFolderExists = existsSync(entryFolderPath) &&
    statSync(entryFolderPath).isDirectory();

if (entryFolderExists) {
  readdirSync('./web/app/entry')
    .filter(name => statSync(resolve(entryFolderPath, name)).isDirectory())
    .forEach(name => {
      entry[name] = resolve(entryFolderPath, name);
    });
}

module.exports = entry;
