'use strict'

import pagarme from 'pagarme'
import config from './config'

exports.generate = () => {

  return pagarme.client.connect({ encryption_key: config.keys.encryption_key })
    .then(client =>  client.security.encrypt(config.cardInfo))
}
