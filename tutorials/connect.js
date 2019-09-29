const MongoClient = require("MongoDB").MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "tutorials";

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect(err => {
    if (err) {
        console.log("err", err);
        return;
    }
    const db = client.db(dbName);
    console.log("db", db);
    console.log("数据库连接成功");
    client.close();
});
