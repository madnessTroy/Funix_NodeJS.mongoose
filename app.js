// ExpressJs
const express = require('express');
// Mongoose
const mongoose = require('mongoose');
// Core
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	User.findById('61e50654afa1c15a1e780554')
		.then((user) => {
			req.user = new User(user.name, user.email, user.cart, user._id);
			next();
		})
		.catch((err) => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// Mongoose connect
const url =
	'mongodb+srv://admin:admin@funixlab-nodejs.n4ini.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose
	.connect(url)
	.then(() => {
		app.listen(3000);
	})
	.catch((err) => console.log(err));
