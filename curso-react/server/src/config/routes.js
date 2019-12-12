const express = require('express')

module.exports = function (server) {
    const router = express.Router()
    server.use('/api', router)

    const cursos = require('../api/cursos')
    const contatos = require('../api/contatos')

    cursos.register(router, '/cursos')
    contatos.register(router, '/contatos')

}

