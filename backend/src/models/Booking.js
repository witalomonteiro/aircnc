const { Schema, model, Types } = require('mongoose')

const BookingSchema = new Schema({
	date: String,
	approved: Boolean,
	user: {
		type: Types.ObjectId,
		ref: 'User',
	},
	spot: {
		type: Types.ObjectId,
		ref: 'Spot',
	}
}, {
	timestamps: true,
})

module.exports = model('Booking', BookingSchema)