db = db.getSiblingDB("mintflow-db");
db.createCollection("cards");
db.createCollection("decks");

const cardsData = JSON.parse(
    cat("/docker-entrypoint-initdb.d/mintflow-db.cards.json")
);
const decksData = JSON.parse(
    cat("/docker-entrypoint-initdb.d/mintflow-db.cards.json")
);

db.cards.insertMany(cardsData);
db.decks.insertMany(decksData);
