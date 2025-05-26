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

const create = async (req, res) => {
    const result = await Autor.insert(req.body)
    const autor = await Autor.selectById(result.insertId);
    res.json(autor)
}

module.exports = { getAll, getById, create }