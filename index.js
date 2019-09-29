console.log("hello MongoDB");

const MongoDB = require("mongodb");
const MongoClient = MongoDB.MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "xuesheng";

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const insertDocument = (db, cb) => {
    const collection = db.collection("studentsInfo");
    collection.insertMany(
        [
            {
                name: "roy",
                age: 27,
                sex: "male",
                home: "xi'an",
                hobbies: ["NBA", "running", "history"]
            },
            {
                name: "youling",
                age: 25,
                sex: "male",
                home: "xi'an",
                hobbies: ["reading", "sports"]
            },
            {
                name: "zhen",
                age: 27,
                sex: "female",
                home: "xian yang",
                hobbies: ["tv", "music", "food"]
            }
        ],
        (err, result) => {
            if (err) {
                console.log("err", err);
                return;
            }
            cb(result);
        }
    );
};

const indexCollection = (db, cb) => {
    db.collection("studentsInfo").createIndex(
        {
            name: 1
        },
        null,
        (err, result) => {
            if (err) {
                console.log("err", err);
                return;
            }
            cb(result);
        }
    );
};

client.connect(err => {
    if (err) return new Error("Connected failed to server!");
    console.log("Connected successfully to server!");
    const db = client.db(dbName);
    console.log("db: ", db);
    insertDocument(db, result => {
        indexCollection(db, () => {
            console.log("result", result);
            // const indexes = db.getIndexes();
            // console.log("indexes", indexes);
            client.close();
        });
    });
});
