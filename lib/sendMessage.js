const core = require('@actions/core')
const fetch = require('node-fetch')

async function sendMessage(message, to) {
  try { 
    const response = await fetch(to, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(message)
    })

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    return await response.json()
  } 
  catch (error) {
    throw error
  }
}

module.exports = sendMessage
