const Post = require('../models/posts.model')

const checkPostId = async (req, res, next) => {
    const { postId } = req.params

    if (!postId) return res.status(400).json({ message: 'El id del post no tiene valor' });
    if (isNaN(postId)) return res.status(400).json({ message: 'El id del post no es un número' });

    const post = await Post.selectById(postId)
    if(!post) return res.status(404).json({message: 'No existe ningún post con el id introducido'});
    next()

}

module.exports = { checkPostId }