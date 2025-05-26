const db = require('../config/db')

const selectAll = async () => {
    const [result] = await db.query('select * from posts');
    return result
}

const selectById = async (postId) => {
    const [result] = await db.query('select * from posts p where p.id = ?', [postId]);
    if(!result || result.length === 0) return null;
    return result[0];
}

const selectByAutor = async (autorId) => {
    const [result] =  await db.query('select * from posts p where id_autor = ?', [autorId]);
    if(!result || result.length === 0) return null;
    return result
}

const insert = async ({titulo, descripcion, categoria, autorId}) => {
    const [result] = await db.query(`insert into posts (titulo, descripcion, fecha_creacion, categoria, id_autor) values (?, ?, ?, ?, ?)`,[titulo, descripcion,new Date(), categoria, autorId]);
    return result;
}

module.exports = {selectAll, selectById, selectByAutor, insert};