const fs = require('fs');
const path = require('path');

const dbFile = path.join(__dirname, 'database.json');

function loadDB() {
  if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify({}));
  }
  return JSON.parse(fs.readFileSync(dbFile));
}

function saveDB(data) {
  fs.writeFileSync(dbFile, JSON.stringify(data, null, 2));
}

function getValue(key) {
  const db = loadDB();
  return db[key];
}

function setValue(key, value) {
  const db = loadDB();
  db[key] = value;
  saveDB(db);
}

function deleteKey(key) {
  const db = loadDB();
  delete db[key];
  saveDB(db);
}

module.exports = {
  getValue,
  setValue,
  deleteKey,
  loadDB,
  saveDB
};