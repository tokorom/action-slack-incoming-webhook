const core = require('@actions/core')
const createMessage = require('./lib/createMessage')

async function run() {
  try { 
    const INCOMING_WEBHOOK_URL = process.env['INCOMING_WEBHOOK_URL']

    if (!INCOMING_WEBHOOK_URL) {
      throw new Error('Missing INCOMING_WEBHOOK_URL environment var')
    }

    const message = createMessage()
  } 
  catch (error) {
    core.setFailed(error.message)
  }
}

module.exports = run
