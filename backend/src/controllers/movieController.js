const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const movies = await connection('movies').select('*');
    
        return response.json(movies);
    },

    async create (request, response) {
        const { name, author, classification, duration } = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('movies').insert({
            id, 
            name, 
            author, 
            classification,
            duration,
        })
    
        return response.json({ id });
    }
};