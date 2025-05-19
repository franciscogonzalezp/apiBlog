const db = require('../config/db');

const selectAll = async () => {
    const [result] = await db.query('select * from autores');

    return result
}

const selectById = async (autorId) => {
    const [result] = await db.query('Select * from autores a where a.id = ?', autorId);
    if(!result || result.length === 0){
        return null
    }
    return result[0];
}

const insert = async ({nombre, email, imagen}) => {
    const [result] = await db.query('Insert into autores (nombre, email, imagen) values (?, ?, ?)',[nombre, email, imagen])
    return result;
}

module.exports = { selectAll, selectById, insert };