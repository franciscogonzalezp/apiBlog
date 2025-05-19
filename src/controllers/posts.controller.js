const getAll = (req, res) => {
    res.send('Listado con todos los post')
}

const getById = (req, res) => {
    const { postId } = req.params;
    res.send(`Post con id ${postId}`)
}

const getByAutor = (req, res) => {
    const {autorId} = req.params;
    res.send(`Listado de post del autor ${autorId}`)
}

const create = (req, res) => {
    res.send('Creando un nuevo post...')
}

module.exports = { getAll, getById, getByAutor, create }