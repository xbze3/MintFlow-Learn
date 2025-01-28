db = db.getSiblingDB("mintflow-db");
db.createCollection("cards");
db.createCollection("decks");

const cardsData = JSON.parse(
    cat("/docker-entrypoint-initdb.d/mintflow-db.cards.json")
);
const decksData = JSON.parse(
    cat("/docker-entrypoint-initdb.d/mintflow-db.decks.json")
);

db.myCollection1.insertMany(collection1Data);
db.myCollection2.insertMany(collection2Data);

db.decks.insertMany();
db.cards.insertMany();
