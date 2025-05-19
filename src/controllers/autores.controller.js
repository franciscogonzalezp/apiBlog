const Autor = require('../models/autores.model');

const getAll = async (req, res) => {
    const autores = await Autor.selectAll()
    res.json(autores)
}

const getById = async (req, res) => {
    const { autorId } = req.params;
    const autor = await Autor.selectById(autorId)
    res.json(autor)
}

const create = (req, res) => {
    const result = Autor.insert(req.body)
    res.send(`Creando nuevo autor ${result}`)
}

module.exports = { getAll, getById, create }