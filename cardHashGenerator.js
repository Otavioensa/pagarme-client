
import pagarme from 'pagarme'
import { keys, cardInfo } from './config'

const connectParams = {
  encryption_key: keys.encryption_key,
}

exports.generate = () => pagarme.client.connect(connectParams)
  .then(client => client.security.encrypt(cardInfo))
