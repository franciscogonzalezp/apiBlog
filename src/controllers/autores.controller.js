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

const edit = async (req, res) => {
    const { autorId } = req.params;

    const result = await Autor.updateById(autorId, req.body);
    const autor = await Autor.selectById(autorId);

    res.json(autor);
}

const remove = async (req, res) => {
    const { autorId } = req.params;
    await Autor.deleteById(autorId);
    res.json({message: 'Autor eliminado correctamente'});
}

module.exports = { getAll, getById, create, edit, remove }