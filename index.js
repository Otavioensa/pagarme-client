'use strict'

const request = require('request-promise');
const cardHashGenerator = require('./cardHashGenerator')
const payload = require('./payload')

const requestWrapper = (getPayload, params) => {
  return cardHashGenerator.generate()
    .then((card_hash) =>  request(getPayload(card_hash, params)))
}

const creditCardWithOneInstallment = () => requestWrapper(payload.creditCardWithOneInstallment)

const creditCardWithMultipleInstallments = () => requestWrapper(payload.creditCardWithMultipleInstallments)

const creditCardWithSyncPostback = () => requestWrapper(payload.creditCardWithSyncPostback)

const oneClickBuy = () => requestWrapper(payload.oneClickBuy)

const authorizeAndCaptureSmallerAmount = () => requestWrapper(payload.authorizeCreditCardTransaction)
  .then((response) => requestWrapper(payload.captureSmallerAmount, { transactionId: response.id }))

const captureAndRefundPartially = () => requestWrapper(payload.creditCardWithOneInstallment)
  .then((response) => requestWrapper(payload.refundPartially, { transactionId: response.id }))

return Promise.all([
  creditCardWithOneInstallment(),
  creditCardWithMultipleInstallments(),
  creditCardWithSyncPostback(),
  oneClickBuy(),
  authorizeAndCaptureSmallerAmount(),
  captureAndRefundPartially()
])
.then(() => console.log('done'))
.catch((err) => console.log('ops, we got an error here : ', err))
