'use strict'

exports.creditCardOneInstallment = (card_hash, api_key) => {
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

exports.creditCardMultipleInstallments = (card_hash, api_key) => {
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

exports.creditCardSyncPostback = (card_hash, api_key) => {
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
