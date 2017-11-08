
import { config } from 'dotenv'

config()

const keys = {
  api_key: process.env.API_KEY,
  encryption_key: process.env.ENCRYPTION_KEY,
  card_id: process.env.CARD_ID,
}

const cardInfo = {
  card_number: process.env.CARD_NUMBER,
  card_holder_name: process.env.CARD_HOLDER_NAME,
  card_expiration_date: process.env.CARD_EXPIRATION_DATE,
  card_cvv: process.env.CARD_CVV,
}

const recipientInfo = {
  firstRecipient: process.env.FIRST_RECIPIENT,
  secondRecipient: process.env.SECOND_RECIPIENT,
}

const planInfo = {
  planId: process.env.PLAN_ID,
}

export { keys, cardInfo, recipientInfo, planInfo }
