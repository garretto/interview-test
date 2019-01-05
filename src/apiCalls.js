export function getAddressInfo(address) {
  return fetch(`http://jobcoin.gemini.com/tightly/api/addresses/${address}`)
}

export function getTransactions() {
  return fetch('http://jobcoin.gemini.com/tightly/api/transactions')
}

export function postTransaction(fromAddress, toAddress, amount) {
  let form = new FormData()
  form.append('fromAddress', fromAddress)
  form.append('toAddress', toAddress)
  form.append('amount', amount)

  return fetch('http://jobcoin.gemini.com/tightly/api/transactions', {
    method: 'POST',
    body: form
  })
}
