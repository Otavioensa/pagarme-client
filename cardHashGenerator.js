'use strict'

require('dotenv').config()
const pagarme = require('pagarme')
const config = require('./config')

exports.generate = () => {

  return pagarme.client.connect({ encryption_key: config.keys.encryption_key })
    .then(client =>  client.security.encrypt(config.cardInfo))
}
