'use strict'

const request = require('request-promise');
const cardHashGenerator = require('./cardHashGenerator')
const payload = require('./payload')
const recipientInfo = require('./config').recipientInfo

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

const generateTicketAndPay = () => requestWrapper(payload.generateTicket)
  .then((response) => requestWrapper(payload.payTicket, { transactionId: response.id }))

const splitCreditCardPayment = () => requestWrapper(payload.splitCreditCardPayment, recipientInfo)

const splitAndRefundCreditCardPayment = () => requestWrapper(payload.splitCreditCardPayment, recipientInfo)
  .then((response) => requestWrapper(payload.refundWithSplitRules, { transactionId: response.id, recipientInfo: recipientInfo, split_rules: response.split_rules }))

return Promise.all([
  creditCardWithOneInstallment(),
  creditCardWithMultipleInstallments(),
  creditCardWithSyncPostback(),
  oneClickBuy(),
  authorizeAndCaptureSmallerAmount(),
  captureAndRefundPartially(),
  generateTicketAndPay(),
  splitCreditCardPayment(),
  splitAndRefundCreditCardPayment()
])
.then(() => console.log('done'))
.catch((err) => console.log('ops, we got an error here : ', err))
