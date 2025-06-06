const Post = require('../models/posts.model');
const Autor = require('../models/autores.model');

const getAll = async (req, res) => {
    const posts = await Post.selectAll();
    for(let post of posts){
        const autor = await Autor.selectById(post.id_autor)
        post.autor = autor
    }
    res.json(posts)
}

const getById = async (req, res) => {
    const { postId } = req.params;
    const post = await Post.selectById(postId)
    
    res.json(post)
}

const getByAutor = async (req, res) => {
    const {autorId} = req.params;
    const posts = await Post.selectByAutor(autorId)
    if(!posts) res.status(404).json({message: 'No existen posts con ese autor'});
    for(let post of posts){
        const autor = await Autor.selectById(post.id_autor)
        post.autor = autor
    }
    res.json(posts)
}

const create = async (req, res) => {
    const {titulo, descripcion, categoria, autorId} = req.body;
    const result = await Post.insert({titulo, descripcion, categoria, autorId})
    const post = await Post.selectById(result.insertId);
    res.json(post);
}

const edit = async (req, res) => {
    const { postId } = req.params;

    const result = await Post.updateById(postId, req.body);
    const post = await Post.selectById(postId);

    res.json(post);
}

const remove = async (req, res) => {
    const { postId } = req.params;
    await Post.deleteById(postId);
    res.json({message: 'Post eliminado correctamente'});
}

module.exports = { getAll, getById, getByAutor, create, edit, remove }