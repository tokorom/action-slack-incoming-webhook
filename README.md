
<p align="center">
  <a href="https://github.com/actions/javascript-action/actions"><img alt="javscript-action status" src="https://github.com/actions/javascript-action/workflows/units-test/badge.svg"></a>
</p>

# Slack Incoming Webhook for GitHub Actions

## Feature

- Use Incoming Webhooks on Slack App
    - Don't use legacy incoming Webhooks on custom integrations
- You can use the names of the fields in the Message payloads provided by Slack
    - https://api.slack.com/reference/messaging/payload

## Simple Usage

```yaml
- name: Slack Notification
  uses: tokorom/action-slack-incoming-webhook@master
  env:
    INCOMING_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
  with:
    text: Hello, Slack!
```

Here's what the Slack message would look like:

<img src="docs/images/slack-message-example-simple.png" width="540">

## Advanced Usages

```yaml
- name: Slack Notification on SUCCESS
  if: success()
  uses: tokorom/action-slack-incoming-webhook@master
  env:
    INCOMING_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
  with:
    text: Successfully automated deployment.
    attachments: |
      [
        {
          "color": "good",
          "author_name": "${{ github.actor }}",
          "author_icon": "${{ github.event.sender.avatar_url }}",
          "fields": [
            {
              "title": "Commit Message",
              "value": "${{ github.event.head_commit.message }}"
            },
            {
              "title": "GitHub Actions URL",
              "value": "${{ github.event.repository.url }}/actions/runs/${{ github.run_id }}"
            },
            {
              "title": "Compare URL",
              "value": "${{ github.event.compare }}"
            }
          ]
        }
      ]
```

Here's what the Slack message would look like:

<img src="docs/images/slack-message-example-advanced.png" width="540">

