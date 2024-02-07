const fetch = require('node-fetch')

//const IMGUR_CLIENT_ID = process.env.IMGUR_CLIENT_ID
const IMGUR_CLIENT_ID = '6d0ebcefb081eb1'

exports.handler = async function(event) {
  let content = null
  content = Buffer.from(event.body, 'base64')
  const response = await fetch(`https://api.imgur.com/3/image`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: 'Client-ID ' + IMGUR_CLIENT_ID,
    },
    body: content,
  })
  return JSON.stringify(response.data.link) /*
  if (!response.ok) {
    // NOT res.status >= 200 && res.status < 300
    return {
      statusCode: response.status,
      body: response.statusText,
      yo: response,
    }
  }
  const data = await response.json()

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  }*/
}
