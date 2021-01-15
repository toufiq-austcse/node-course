const config = {
       ENDPOINT: '/api',
       getDB: () => {
              const low = require('lowdb');
              const FileSync = require('lowdb/adapters/FileSync');
              const adapter = new FileSync('db.json');
              const db = low(adapter);

              db.defaults({ products: [] }).write();
              return db;
       },
       getMongoDB: async () => {
              const MongoClient = require('mongodb').MongoClient;

              try {
                     let conn = await MongoClient.connect('mongodb://localhost:27017');
                     let db = conn.db('myproject');
                     return db;
              } catch (error) {
                     console.log(`Error In DB Connection `, error);
              }


       }

}

module.exports = config;