const run = require('./run')

function setupInputs(inputs) {
  for (const input in inputs) {
    let key = 'INPUT_' + input.toUpperCase()
    process.env[key] = JSON.stringify(inputs[input])
  }
}

process.env.INCOMING_WEBHOOK_URL = 'https://hooks.slack.com/services/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'

setupInputs({
  text: "Hello"
})

run()

