const MongoClient = require("MongoDB").MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "tutorials";

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const createCollated = (db, cb) => {
    // const collection = db.collection('contacts');
    db.createCollection(
        "contacts",
        {
            collation: { locale: "fr_CA" }
        },
        (err, result) => {
            if (err) {
                console.log("err", err);
                return;
            }
            console.log("Collection created.");
            console.log("result", result);
            cb(result);
        }
    );
};

const createCollatedIndex = (db, cb) => {
    const collection = db.collection("contacts");
    collection.createIndex(
        { name: 1 },
        { unique: 1 },
        { collation: { locale: "en_US" } },
        (err, result) => {
            if (err) {
                console.log("err", err);
                return;
            }
            console.log("result", result);
            cb(result);
        }
    );
};

client.connect(err => {
    if (err) {
        console.log("err", err);
        return;
    }
    console.log("数据库连接成功");
    const db = client.db(dbName);
    // createCollated(db, () => {
    //     client.close();
    // });
    createCollatedIndex(db, () => {
        client.close();
    });
});
