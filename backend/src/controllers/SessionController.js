/* Nota
	index, show, store, update, destroy
	
	let { idade } = req.query
	let { id } = req.params
	let { nome, email } = req.body
	let { user_id } = req.headers
*/

const User = require('../models/User')

module.exports = {
	async store(req, res) {
		const { email } = req.body

		let userExists = await User.findOne({ email })
		if (userExists) return res.json({ message: 'Usuário Existe!', userExists })
		
		const user = await User.create({ email })
		
		return res.json({ message: 'Usuário Criado!', user })
	}
}