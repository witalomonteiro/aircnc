const Spot = require('../models/Spot')
const User = require('../models/User')

module.exports = {
	async index(req, res) {
		let { tech } = req.query

		let spots = await Spot.find({ techs: tech })

		return res.json(spots)
	},

	async store(req, res) {
		let { filename } = req.file
		let { company, techs, price } = req.body
		let { user_id } = req.headers

		const user = await User.findById(user_id)
		if(!user) return res.status(400).json({ error: 'Usuário não existe!' })

		const spot = await Spot.create({
			user: user_id,
			thumbnail: filename,
			company,
			techs: techs.split(',').map(tech => tech.trim()),
			price
		})

		return res.json({ message: 'Lugar Criado!', spot })
	}
}