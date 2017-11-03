'use strict'

const api_key = require('./config').keys.api_key
const card_id = require('./config').keys.card_id

exports.creditCardOneInstallment = (card_hash) => {
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

exports.creditCardMultipleInstallments = (card_hash) => {
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

exports.creditCardSyncPostback = (card_hash) => {
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
    uri: `https://api.pagar.me/1/transactions/${params.id}/capture`,
    body: {
      amount: '1000',
      api_key: api_key
    },
    json: true
  }
}
