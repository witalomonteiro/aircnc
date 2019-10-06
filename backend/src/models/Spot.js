const { Schema, model, Types } = require('mongoose')

const SpotSchema = new Schema({
	thumbnail: String,
	company: String,
	price: Number,
	techs: [String],
	user: {
		type: Types.ObjectId,
		ref: 'User',
	}
}, {
	timestamps: true,
})

module.exports = model('Spot', SpotSchema)