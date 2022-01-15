const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const url =
	"mongodb+srv://admin:admin@funixlab-nodejs.n4ini.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const mongoConnect = (callback) => {
	MongoClient.connect(url)
		.then((client) => {
			console.log(client);
			callback(client);
		})
		.catch((err) => console.log(err));
};

module.exports = mongoConnect;
