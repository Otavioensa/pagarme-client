'use strict'

const request = require('request-promise');
const cardHashGenerator = require('./cardHashGenerator')
const payload = require('./payload')
const api_key = require('./config').keys.api_key

const requestWrapper = (getPayload) => {
  return cardHashGenerator.generate()
    .then((card_hash) =>  request(getPayload(card_hash, api_key)))
    .then((result) => console.log(result))
}

const creditCardOneInstallment = () => requestWrapper(payload.creditCardOneInstallment)

const creditCardMultipleInstallments = () => requestWrapper(payload.creditCardMultipleInstallments)

const creditCardSyncPostback = () => requestWrapper(payload.creditCardSyncPostback)

return Promise.all([
  creditCardOneInstallment(),
  creditCardMultipleInstallments(),
  creditCardSyncPostback()
])
.then(() => console.log('done'))
