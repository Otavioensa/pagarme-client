'use strict'

const keys = {
  api_key: process.env.API_KEY,
  encryption_key: process.env.ENCRYPTION_KEY
}

const cardInfo = {
  card_number: process.env.CARD_NUMBER,
  card_holder_name: process.env.CARD_HOLDER_NAME,
  card_expiration_date: process.env.CARD_EXPIRATION_DATE,
  card_cvv: process.env.CARD_CVV,
}

module.exports = {
  keys: keys,
  cardInfo: cardInfo
}
