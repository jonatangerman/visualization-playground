const admin = require("firebase-admin");
admin.initializeApp({
  projectId: "jonathan-data-visualization",
});

const db = admin.firestore();
db.settings({
  host: "localhost:8080",
  ssl: false,
});

export default db;
