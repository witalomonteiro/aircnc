const Spot = require('../models/Spot')

module.exports = {
	async show(req, res) {
		let { user_id } = req.headers

		let spots = await Spot.find({ user: user_id })

		return res.json(spots)
	}
}