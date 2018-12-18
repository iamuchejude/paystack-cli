const axios = require('axios');
require('dotenv').config();

const SERVICE = (data = {}) => {
  const url = 'https://api.paystack.co/charge';
  const { email, amount, cvv, number, expiry_year, expiry_month } = data;

  axios.post(url, { 
    email,
    amount,
    card: { cvv, number, expiry_year, expiry_month},
   }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.SECRET_KEY}`
    }
  })
    .then(result => {
      console.log(`\nPayment successful`);
      return console.log(`Reference ID is ${result.data.data.reference}\n`);
    })
    .catch(error => console.log(`\n${error.response.data.message}`));
};

module.exports = SERVICE;
