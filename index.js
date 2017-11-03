'use strict'

const request = require('request-promise');
const cardHashGenerator = require('./cardHashGenerator')
const payload = require('./payload')

const requestWrapper = (getPayload, params) => {
  return cardHashGenerator.generate()
    .then((card_hash) =>  request(getPayload(card_hash, params)))
}

const creditCardOneInstallment = () => requestWrapper(payload.creditCardOneInstallment)

const creditCardMultipleInstallments = () => requestWrapper(payload.creditCardMultipleInstallments)

const creditCardSyncPostback = () => requestWrapper(payload.creditCardSyncPostback)

const oneClickBuy = () => requestWrapper(payload.oneClickBuy)

const authorizeAndCaptureSmallerAmount = () => requestWrapper(payload.authorizeCreditCardTransaction)
  .then((response) => requestWrapper(payload.captureSmallerAmount, { id: response.id }))

return Promise.all([
  creditCardOneInstallment(),
  creditCardMultipleInstallments(),
  creditCardSyncPostback(),
  oneClickBuy(),
  authorizeAndCaptureSmallerAmount()
])
.then(() => console.log('done'))
.catch((err) => console.log('ops, we got an error here : ', err))
