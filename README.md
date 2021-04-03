
<p align="center">
  <a href="https://github.com/actions/javascript-action/actions"><img alt="javscript-action status" src="https://github.com/actions/javascript-action/workflows/units-test/badge.svg"></a>
</p>

# GitHub Action for Slack Incoming Webhook

## Feature

- Send a message using Incoming Webhooks on Slack App
    - Don't use legacy incoming Webhooks on custom integrations
- You can use the names of the fields in the Message payloads provided by Slack
    - https://api.slack.com/reference/messaging/payload

## Simple Usage

```yaml
- name: Slack Notification
  uses: tokorom/action-slack-incoming-webhook@main
  env:
    INCOMING_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
  with:
    text: Hello, Slack!
```

Here's what the Slack message would look like:

![simple-sample](docs/images/sample-simple.png)

## Advanced Usages

- You can flexibly specify `attachments` and `blocks`
    - https://api.slack.com/reference/messaging/attachments
    - https://api.slack.com/reference/block-kit/blocks

```yaml
- name: Set COMMIT_MESSAGE
    run: echo "COMMIT_MESSAGE=${{ github.event.head_commit.message }}" | tr '\n' ' ' >> $GITHUB_ENV
- name: Slack Notification on SUCCESS
  if: success()
  uses: tokorom/action-slack-incoming-webhook@main
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
              "value": "${{ env.COMMIT_MESSAGE }}"
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

![sample-advanced](docs/images/sample-advanced.png)

## Change the icon

You can change the icon for a Slack message in the Slack App settings.

Slack's new Incoming Webhooks do not allow API payloads to override the icon.

- Open [Your Apps](https://api.slack.com/apps) page
- Select your app for Incoming Webhooks
- Select `Basic Information` > `Display Information`
- Set any icon you like!

![screenshot](docs/images/ss-1589353124.png)

