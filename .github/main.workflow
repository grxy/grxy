workflow "Issues Workflow (Playground)" {
  on = "issues"
  resolves = ["GitHub Action for Slack"]
}

action "GitHub Action for Slack" {
  uses = "Ilshidur/action-slack@d8660fe30331a4a28b1019c7fe429dc9b6c1276e"
  secrets = ["SLACK_WEBHOOK"]
}
