
import { keys, planInfo } from './config'

const { api_key } = keys
const { card_id } = keys
const { planId } = planInfo

exports.creditCardWithOneInstallment = cardHash => ({
  method: 'POST',
  uri: 'https://api.pagar.me/1/transactions',
  body: {
    api_key,
    amount: 2100,
    card_hash: cardHash,
    payment_method: 'credit_card',
    customer: {
      external_id: '#3311',
      name: 'John Doe',
      type: 'individual',
      country: 'br',
      email: 'John@doe.com',
      documents: [
        {
          type: 'cpf',
          number: '00000000000',
        },
      ],
      phone_numbers: ['+5511999998888', '+5511888889999'],
      birthday: '1965-01-01',
    },
    billing: {
      name: 'Trinity Moss',
      address: {
        country: 'br',
        state: 'sp',
        city: 'Cotia',
        neighborhood: 'Rio Cotia',
        street: 'Rua Matrix',
        street_number: '9999',
        zipcode: '06714360',
      },
    },
    shipping: {
      name: 'Neo Reeves',
      fee: 1000,
      delivery_date: '2000-12-21',
      expedited: true,
      address: {
        country: 'br',
        state: 'sp',
        city: 'Cotia',
        neighborhood: 'Rio Cotia',
        street: 'Rua Matrix',
        street_number: '9999',
        zipcode: '06714360',
      },
    },
    items: [
      {
        id: 'r123',
        title: 'Red pill',
        unit_price: 10000,
        quantity: 1,
        tangible: true,
      },
      {
        id: 'b123',
        title: 'Blue pill',
        unit_price: 10000,
        quantity: 1,
        tangible: true,
      },
    ],
  },
  json: true,
})

exports.creditCardWithMultipleInstallments = cardHash => ({
  method: 'POST',
  uri: 'https://api.pagar.me/1/transactions',
  body: {
    api_key,
    amount: 2100,
    card_hash: cardHash,
    payment_method: 'credit_card',
    installments: 3,
    customer: {
      external_id: '#3311',
      name: 'John Doe',
      type: 'individual',
      country: 'br',
      email: 'John@doe.com',
      documents: [
        {
          type: 'cpf',
          number: '00000000000',
        },
      ],
      phone_numbers: ['+5511999998888', '+5511888889999'],
      birthday: '1965-01-01',
    },
    billing: {
      name: 'Trinity Moss',
      address: {
        country: 'br',
        state: 'sp',
        city: 'Cotia',
        neighborhood: 'Rio Cotia',
        street: 'Rua Matrix',
        street_number: '9999',
        zipcode: '06714360',
      },
    },
    shipping: {
      name: 'Neo Reeves',
      fee: 1000,
      delivery_date: '2000-12-21',
      expedited: true,
      address: {
        country: 'br',
        state: 'sp',
        city: 'Cotia',
        neighborhood: 'Rio Cotia',
        street: 'Rua Matrix',
        street_number: '9999',
        zipcode: '06714360',
      },
    },
    items: [
      {
        id: 'r123',
        title: 'Red pill',
        unit_price: 10000,
        quantity: 1,
        tangible: true,
      },
      {
        id: 'b123',
        title: 'Blue pill',
        unit_price: 10000,
        quantity: 1,
        tangible: true,
      },
    ],
  },
  json: true,
})

exports.creditCardWithSyncPostback = cardHash => ({
  method: 'POST',
  uri: 'https://api.pagar.me/1/transactions',
  body: {
    api_key,
    amount: 2100,
    card_hash: cardHash,
    payment_method: 'credit_card',
    installments: 1,
    postback_url: 'http://159.203.163.84:8081/user/token',
    async: false,
    customer: {
      external_id: '#3311',
      name: 'John Doe',
      type: 'individual',
      country: 'br',
      email: 'John@doe.com',
      documents: [
        {
          type: 'cpf',
          number: '00000000000',
        },
      ],
      phone_numbers: ['+5511999998888', '+5511888889999'],
      birthday: '1965-01-01',
    },
    billing: {
      name: 'Trinity Moss',
      address: {
        country: 'br',
        state: 'sp',
        city: 'Cotia',
        neighborhood: 'Rio Cotia',
        street: 'Rua Matrix',
        street_number: '9999',
        zipcode: '06714360',
      },
    },
    shipping: {
      name: 'Neo Reeves',
      fee: 1000,
      delivery_date: '2000-12-21',
      expedited: true,
      address: {
        country: 'br',
        state: 'sp',
        city: 'Cotia',
        neighborhood: 'Rio Cotia',
        street: 'Rua Matrix',
        street_number: '9999',
        zipcode: '06714360',
      },
    },
    items: [
      {
        id: 'r123',
        title: 'Red pill',
        unit_price: 10000,
        quantity: 1,
        tangible: true,
      },
      {
        id: 'b123',
        title: 'Blue pill',
        unit_price: 10000,
        quantity: 1,
        tangible: true,
      },
    ],
  },
  json: true,
})

exports.oneClickBuy = () => ({
  method: 'POST',
  uri: 'https://api.pagar.me/1/transactions',
  body: {
    api_key,
    amount: 2100,
    card_id,
    payment_method: 'credit_card',
    customer: {
      external_id: '#3311',
      name: 'John Doe',
      type: 'individual',
      country: 'br',
      email: 'John@doe.com',
      documents: [
        {
          type: 'cpf',
          number: '00000000000',
        },
      ],
      phone_numbers: ['+5511999998888', '+5511888889999'],
      birthday: '1965-01-01',
    },
    billing: {
      name: 'Trinity Moss',
      address: {
        country: 'br',
        state: 'sp',
        city: 'Cotia',
        neighborhood: 'Rio Cotia',
        street: 'Rua Matrix',
        street_number: '9999',
        zipcode: '06714360',
      },
    },
    shipping: {
      name: 'Neo Reeves',
      fee: 1000,
      delivery_date: '2000-12-21',
      expedited: true,
      address: {
        country: 'br',
        state: 'sp',
        city: 'Cotia',
        neighborhood: 'Rio Cotia',
        street: 'Rua Matrix',
        street_number: '9999',
        zipcode: '06714360',
      },
    },
    items: [
      {
        id: 'r123',
        title: 'Red pill',
        unit_price: 10000,
        quantity: 1,
        tangible: true,
      },
      {
        id: 'b123',
        title: 'Blue pill',
        unit_price: 10000,
        quantity: 1,
        tangible: true,
      },
    ],
  },
  json: true,
})

exports.authorizeCreditCardTransaction = cardHash => ({
  method: 'POST',
  uri: 'https://api.pagar.me/1/transactions',
  body: {
    api_key,
    amount: 2100,
    card_hash: cardHash,
    payment_method: 'credit_card',
    capture: false,
    customer: {
      external_id: '#3311',
      name: 'John Doe',
      type: 'individual',
      country: 'br',
      email: 'John@doe.com',
      documents: [
        {
          type: 'cpf',
          number: '00000000000',
        },
      ],
      phone_numbers: ['+5511999998888', '+5511888889999'],
      birthday: '1965-01-01',
    },
    billing: {
      name: 'Trinity Moss',
      address: {
        country: 'br',
        state: 'sp',
        city: 'Cotia',
        neighborhood: 'Rio Cotia',
        street: 'Rua Matrix',
        street_number: '9999',
        zipcode: '06714360',
      },
    },
    shipping: {
      name: 'Neo Reeves',
      fee: 1000,
      delivery_date: '2000-12-21',
      expedited: true,
      address: {
        country: 'br',
        state: 'sp',
        city: 'Cotia',
        neighborhood: 'Rio Cotia',
        street: 'Rua Matrix',
        street_number: '9999',
        zipcode: '06714360',
      },
    },
    items: [
      {
        id: 'r123',
        title: 'Red pill',
        unit_price: 10000,
        quantity: 1,
        tangible: true,
      },
      {
        id: 'b123',
        title: 'Blue pill',
        unit_price: 10000,
        quantity: 1,
        tangible: true,
      },
    ],
  },
  json: true,
})

exports.captureSmallerAmount = (cardHash, params) => ({
  method: 'POST',
  uri: `https://api.pagar.me/1/transactions/${params.transactionId}/capture`,
  body: {
    amount: '1000',
    api_key,
  },
  json: true,
})

exports.refundPartially = (cardHash, params) => ({
  method: 'POST',
  uri: `https://api.pagar.me/1/transactions/${params.transactionId}/refund`,
  body: {
    api_key,
    amount: '100',
    bank_account: {
      bank_code: '033',
      agencia: '0203',
      agencia_dv: '8',
      conta: '517607',
      conta_dv: '5',
      document_number: '67725689745',
      legal_name: 'John Doe',
    },
  },
  json: true,
})

exports.generateTicket = () => ({
  method: 'POST',
  uri: 'https://api.pagar.me/1/transactions',
  body: {
    api_key,
    amount: 2100,
    payment_method: 'boleto',
    customer: {
      external_id: '#3311',
      name: 'John Doe',
      type: 'individual',
      country: 'br',
      email: 'John@doe.com',
      documents: [
        {
          type: 'cpf',
          number: '00000000000',
        },
      ],
      phone_numbers: ['+5511999998888', '+5511888889999'],
      birthday: '1965-01-01',
    },
  },
  json: true,
})

exports.payTicket = (cardHash, params) => ({
  method: 'PUT',
  uri: `https://api.pagar.me/1/transactions/${params.transactionId}`,
  body: {
    api_key,
    status: 'paid',
  },
  json: true,
})

exports.splitCreditCardPayment = (cardHash, params) => ({
  method: 'POST',
  uri: 'https://api.pagar.me/1/transactions',
  body: {
    api_key,
    amount: 2100,
    card_hash: cardHash,
    payment_method: 'credit_card',
    split_rules: [
      {
        object: 'split_rule',
        id: 'sr_cj6dsh3eg0mlm6m6dh6r036bk',
        liable: true,
        amount: null,
        percentage: 30,
        recipient_id: params.firstRecipient,
        charge_remainder: false,
        charge_processing_fee: true,
        date_created: '2017-08-15T16:14:58.936Z',
        date_updated: '2017-08-15T16:14:58.936Z',
      },
      {
        object: 'split_rule',
        id: 'sr_cj6dsh3ef0mll6m6dxk40wxw8',
        liable: true,
        amount: null,
        percentage: 70,
        recipient_id: params.secondRecipient,
        charge_remainder: true,
        charge_processing_fee: true,
        date_created: '2017-08-15T16:14:58.936Z',
        date_updated: '2017-08-15T16:14:58.936Z',
      },
    ],
    customer: {
      external_id: '#3311',
      name: 'John Doe',
      type: 'individual',
      country: 'br',
      email: 'John@doe.com',
      documents: [
        {
          type: 'cpf',
          number: '00000000000',
        },
      ],
      phone_numbers: ['+5511999998888', '+5511888889999'],
      birthday: '1965-01-01',
    },
    billing: {
      name: 'Trinity Moss',
      address: {
        country: 'br',
        state: 'sp',
        city: 'Cotia',
        neighborhood: 'Rio Cotia',
        street: 'Rua Matrix',
        street_number: '9999',
        zipcode: '06714360',
      },
    },
    shipping: {
      name: 'Neo Reeves',
      fee: 1000,
      delivery_date: '2000-12-21',
      expedited: true,
      address: {
        country: 'br',
        state: 'sp',
        city: 'Cotia',
        neighborhood: 'Rio Cotia',
        street: 'Rua Matrix',
        street_number: '9999',
        zipcode: '06714360',
      },
    },
    items: [
      {
        id: 'r123',
        title: 'Red pill',
        unit_price: 10000,
        quantity: 1,
        tangible: true,
      },
      {
        id: 'b123',
        title: 'Blue pill',
        unit_price: 10000,
        quantity: 1,
        tangible: true,
      },
    ],
  },
  json: true,
})

exports.refundWithSplitRules = (cardHash, params) => ({
  method: 'POST',
  uri: `https://api.pagar.me/1/transactions/${params.transactionId}/refund`,
  body: {
    api_key,
    amount: '2100',
    bank_account: {
      bank_code: '033',
      agencia: '0203',
      agencia_dv: '8',
      conta: '517607',
      conta_dv: '5',
      document_number: '67725689745',
      legal_name: 'John Doe',
    },
    split_rules: [
      {
        id: params.split_rules[0].id,
        percentage: 70,
        recipient_id: params.recipientInfo.firstRecipient,
        charge_processing_fee: true,
      },
      {
        id: params.split_rules[1].id,
        percentage: 30,
        recipient_id: params.recipientInfo.secondRecipient,
        charge_processing_fee: true,
      },
    ],
  },
  json: true,
})

exports.subscribeToPlan = cardHash => ({
  method: 'POST',
  uri: 'https://api.pagar.me/1/subscriptions',
  body: {
    api_key,
    plan_id: planId,
    card_hash: cardHash,
    customer: {
      email: 'fulano@gmail.com',
    },
  },
  json: true,
})
