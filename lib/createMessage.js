const core = require('@actions/core')

function createMessage() {
  const fields = [
    'text',
    'blocks',
    'attachments',
    'thread_ts',
    'mrkdwn',
  ]

  const message = fields.reduce((json, field) => {
    let value = core.getInput(field)
    if (value) {
      try {
        json[field] = JSON.parse(value)
      } catch (error) {
        json[field] = value
      }
    } 
    return json
  }, {})

  return message
}

module.exports = createMessage
