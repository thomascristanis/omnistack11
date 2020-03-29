const crypto = require('crypto');
const connection = require('../database/connection');
// Exporta um objeto com os métodos abaixo
module.exports = {
    async index(request, response){
        
        const ongs = await connection('ongs').select('*');
        console.log(ongs);
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        // Gera um ID com 4 bytes de um hexadecimal
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({id});
    }
};