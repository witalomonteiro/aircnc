const Booking = require('../models/Booking')

module.exports = {
	async store(req, res) {
		let { user_id } = req.headers
		let { spot_id } = req. params
		let { date } = req.body

		let booking = await Booking.create({
			user: user_id,
			spot: spot_id,
			date,
		})

		await booking.populate('spot').populate('user').execPopulate()

		return res.json(booking)
	}
}