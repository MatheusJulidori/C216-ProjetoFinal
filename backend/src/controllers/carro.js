import db from '../database/index.js';

async function getCarros(req,res){
    try {
        const [rows] = await db.query('SELECT * FROM carro');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function getCarroById(req,res){
    try {
        const [rows] = await db.query('SELECT * FROM carro WHERE id = ?',[req.params.id]);
        if(rows && rows.length > 0){
            res.status(200).json(rows[0]);
        }else{
            res.status(404).json({message: 'Carro não encontrado'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function createCarro(req,res){
    const {modelo, marca, ano, preco, cor} = req.body;
    try {
        const [result] = await db.query('INSERT INTO carro (modelo, marca, ano, prec, cor) VALUES (?,?,?,?, ?)',
        [modelo, marca, ano, preco, cor]);
        res.status(201).json({id: result.insertId, ...req.body});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function updateCarro(req,res){
    const {modelo, marca, ano, preco, cor} = req.body;
    const {id} = req.params;
    try {
        const [result] = await db.query('UPDATE carro SET modelo = ?, marca = ?, ano = ?, preco = ?, cor = ? WHERE id = ?',
        [modelo, marca, ano, preco, cor, id]);
        if(result.affectedRows > 0){
            res.status(200).json({id, ...req.body});
        }else{
            res.status(404).json({message: 'Carro não encontrado'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function deleteCarro(req,res){
    const {id} = req.params;
    try {
        const [result] = await db.query('DELETE FROM carro WHERE id = ?',[id]);
        if(result.affectedRows > 0){
            res.status(200).json({message: 'Carro deletado com sucesso'});
        }else{
            res.status(404).json({message: 'Carro não encontrado'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export {getCarros, getCarroById, createCarro, updateCarro, deleteCarro};
