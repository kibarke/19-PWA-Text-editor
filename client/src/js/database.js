import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');

  // creates connection to database and the version
  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate','readonly');

  const sheet = tx.objectSheet('jate');

  const request = sheet.get(content);

    // Get confirmation of the request.
    const result = await request;
    console.log('result.value', result);
    return result;  
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

  // Create a connection
  const jateDb = await openDB('jate', 1);

  // Create a new transaction
  const tx = jateDb.transaction('jate', 'readonly');

  const sheet = tx.objectSheet('jate');

  // Use the .getAll() method to get all data
  const request = sheet.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
}

initdb();