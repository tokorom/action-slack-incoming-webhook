const core = require('@actions/core')

async function run() {
  try { 
    const INCOMING_WEBHOOK_URL = process.env['INCOMING_WEBHOOK_URL']

    if (!INCOMING_WEBHOOK_URL) {
      throw new Error('Missing INCOMING_WEBHOOK_URL environment var')
    }

    const createMessage = require('./lib/createMessage')
    const message = createMessage()

    const sendMessage = require('./lib/sendMessage')
    const json = await sendMessage(message, INCOMING_WEBHOOK_URL)

    core.setOutput('response', json)
  } 
  catch (error) {
    core.setFailed(error.message)
  }
}

module.exports = run
