const core = require('@actions/core')
const fetch = require('node-fetch')

async function sendMessage(message, to) {
  try { 
    const res = await fetch(to, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(message)
    })

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`)
    }

    return await res.statusText
  } 
  catch (error) {
    throw error
  }
}

module.exports = sendMessage
