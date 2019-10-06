/* Nota
	const mongoose = require('mongose')
	mongose.Schema()
	mongose.model()
*/

const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
	email: String,
}, {
	timestamps: true,
})

module.exports = model('User', UserSchema)