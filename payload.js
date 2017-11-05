'use strict'

const api_key = require('./config').keys.api_key
const card_id = require('./config').keys.card_id

exports.creditCardWithOneInstallment = (card_hash) => {
  return {
    method: 'POST',
    uri: 'https://api.pagar.me/1/transactions',
    body: {
      api_key: api_key,
      amount: 2100,
      card_hash: card_hash,
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
            number: '00000000000'
          }
        ],
        phone_numbers: ['+5511999998888', '+5511888889999'],
        birthday: '1965-01-01'
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
          zipcode: '06714360'
        }
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
          zipcode: '06714360'
        }
      },
      items: [
        {
          id: 'r123',
          title: 'Red pill',
          unit_price: 10000,
          quantity: 1,
          tangible: true
        },
        {
          id: 'b123',
          title: 'Blue pill',
          unit_price: 10000,
          quantity: 1,
          tangible: true
        }
      ]
    },
    json: true
  }
}

exports.creditCardWithMultipleInstallments = (card_hash) => {
  return {
    method: 'POST',
    uri: 'https://api.pagar.me/1/transactions',
    body: {
      api_key: api_key,
      amount: 2100,
      card_hash: card_hash,
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
            number: '00000000000'
          }
        ],
        phone_numbers: ['+5511999998888', '+5511888889999'],
        birthday: '1965-01-01'
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
          zipcode: '06714360'
        }
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
          zipcode: '06714360'
        }
      },
      items: [
        {
          id: 'r123',
          title: 'Red pill',
          unit_price: 10000,
          quantity: 1,
          tangible: true
        },
        {
          id: 'b123',
          title: 'Blue pill',
          unit_price: 10000,
          quantity: 1,
          tangible: true
        }
      ]
    },
    json: true
  }
}

exports.creditCardWithSyncPostback = (card_hash) => {
  return {
    method: 'POST',
    uri: 'https://api.pagar.me/1/transactions',
    body: {
      api_key: api_key,
      amount: 2100,
      card_hash: card_hash,
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
            number: '00000000000'
          }
        ],
        phone_numbers: ['+5511999998888', '+5511888889999'],
        birthday: '1965-01-01'
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
          zipcode: '06714360'
        }
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
          zipcode: '06714360'
        }
      },
      items: [
        {
          id: 'r123',
          title: 'Red pill',
          unit_price: 10000,
          quantity: 1,
          tangible: true
        },
        {
          id: 'b123',
          title: 'Blue pill',
          unit_price: 10000,
          quantity: 1,
          tangible: true
        }
      ]
    },
    json: true
  }
}

exports.oneClickBuy = () => {
  return {
    method: 'POST',
    uri: 'https://api.pagar.me/1/transactions',
    body: {
      api_key: api_key,
      amount: 2100,
      card_id: card_id,
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
            number: '00000000000'
          }
        ],
        phone_numbers: ['+5511999998888', '+5511888889999'],
        birthday: '1965-01-01'
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
          zipcode: '06714360'
        }
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
          zipcode: '06714360'
        }
      },
      items: [
        {
          id: 'r123',
          title: 'Red pill',
          unit_price: 10000,
          quantity: 1,
          tangible: true
        },
        {
          id: 'b123',
          title: 'Blue pill',
          unit_price: 10000,
          quantity: 1,
          tangible: true
        }
      ]
    },
    json: true
  }
}

exports.authorizeCreditCardTransaction = (card_hash) => {
  return {
    method: 'POST',
    uri: 'https://api.pagar.me/1/transactions',
    body: {
      api_key: api_key,
      amount: 2100,
      card_hash: card_hash,
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
            number: '00000000000'
          }
        ],
        phone_numbers: ['+5511999998888', '+5511888889999'],
        birthday: '1965-01-01'
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
          zipcode: '06714360'
        }
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
          zipcode: '06714360'
        }
      },
      items: [
        {
          id: 'r123',
          title: 'Red pill',
          unit_price: 10000,
          quantity: 1,
          tangible: true
        },
        {
          id: 'b123',
          title: 'Blue pill',
          unit_price: 10000,
          quantity: 1,
          tangible: true
        }
      ]
    },
    json: true
  }
}

exports.captureSmallerAmount = (card_hash, params) => {
  return {
    method: 'POST',
    uri: `https://api.pagar.me/1/transactions/${params.transactionId}/capture`,
    body: {
      amount: '1000',
      api_key: api_key
    },
    json: true
  }
}

exports.refundPartially = (card_hash, params) => {
  return {
    method: 'POST',
    uri: `https://api.pagar.me/1/transactions/${params.transactionId}/refund`,
    body: {
      api_key: api_key,
      amount: '100',
      bank_account: {
        bank_code: '033',
        agencia: '0203',
        agencia_dv: '8',
        conta: '517607',
        conta_dv: '5',
        document_number: '67725689745',
        legal_name: 'John Doe'
      }
    },
    json: true
  }
}

exports.generateTicket = () => {
  return {
    method: 'POST',
    uri: 'https://api.pagar.me/1/transactions',
    body: {
      api_key: api_key,
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
            number: '00000000000'
          }
        ],
        phone_numbers: ['+5511999998888', '+5511888889999'],
        birthday: '1965-01-01'
      }
    },
    json: true
  }
}

exports.payTicket = (card_hash, params) => {
  return {
    method: 'PUT',
    uri: `https://api.pagar.me/1/transactions/${params.transactionId}`,
    body: {
      api_key: api_key,
      status: 'paid'
    },
    json: true
  }
}
