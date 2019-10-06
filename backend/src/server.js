const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-0gotz.mongodb.net/aircnc?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

mongoose.connection.on('connected', function () {
 	console.log('===== Conexão estabelecida com sucesso =====');
});
mongoose.connection.on('error', function (err) {
 	console.log('===== Ocorreu um erro: ' + err);
});
mongoose.connection.on('disconnected', function () {
 	console.log('===== Conexão finalizada =====');
}); 

app.use(express.json())
app.use(routes)

app.listen(2525)