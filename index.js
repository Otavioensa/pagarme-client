'use strict'

const request = require('request-promise');
const cardHashGenerator = require('./cardHashGenerator')
const payload = require('./payload')
const card_id = require('./config').keys.card_id

const requestWrapper = (getPayload) => {
  return cardHashGenerator.generate()
    .then((card_hash) =>  request(getPayload(card_hash, card_id)))
    .then((result) => console.log(result))
}

const creditCardOneInstallment = () => requestWrapper(payload.creditCardOneInstallment)

const creditCardMultipleInstallments = () => requestWrapper(payload.creditCardMultipleInstallments)

const creditCardSyncPostback = () => requestWrapper(payload.creditCardSyncPostback)

const oneClickBuy = () => requestWrapper(payload.oneClickBuy)

const authorizeCreditCardTransaction = () => requestWrapper(payload.authorizeCreditCardTransaction)

return Promise.all([
  creditCardOneInstallment(),
  creditCardMultipleInstallments(),
  creditCardSyncPostback(),
  oneClickBuy(),
  authorizeCreditCardTransaction()
])
.then(() => console.log('done'))
.catch((err) => console.log('ops, we got an error here : ', err))
