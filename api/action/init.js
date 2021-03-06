const Action = require("../models/actionSchema");

let data = [
    {
        service: "Slack",
        name: "Message: Create",
        start: "/action/slack/init/message",
        check: "/action/slack/check/message/create"
    },
    {
        service: "Slack",
        name: "Message: Invit",
        start: "/action/slack/init/message",
        check: "/action/slack/check/message/invit"
    },
    {
        service: "Github",
        name: "Repo Created",
        start: "/action/github/repo/init",
        check: "/action/github/repo/created"
    }
]

module.exports = function () {
    data.forEach(element => {
        Action.findOne(element, (err, action) => {
            if (err) {
                console.log(err);
            }
            else if (!action) {
                action = new Action(element);
                try {
                    action.save()
                } catch (error) {
                    console.log(error);
                }
            }
        })
    });
}