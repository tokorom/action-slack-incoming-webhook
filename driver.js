const run = require('./run')

function setupInputs(inputs) {
  for (const input in inputs) {
    let key = 'INPUT_' + input.toUpperCase()
    process.env[key] = JSON.stringify(inputs[input])
  }
}

process.env.INCOMING_WEBHOOK_URL = 'YOUR WEBHOOK URL'

setupInputs({
  text: "Hello"
})

run()

