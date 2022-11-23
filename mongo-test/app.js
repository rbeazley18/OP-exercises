const { MongoClient } = require("mongodb");
const uri = require("./atlas_uri");

console.log(uri);

const client = new MongoClient(uri)
const dbname = "bank"

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log(`Connected to ${dbname} database`);
    } catch (err) {
        console.error(`Error connecting to the database: ${err}`);
    }
};

const main = async () => {
    try {
        await connectToDatabase();
        const dbs = await client.db().admin().listDatabases()
        console.table(dbs.databases)
    } catch (err) {
        console.error(`Error connecting to the database: ${err}`);
    } finally {
        await client.close();
    }
};

main();