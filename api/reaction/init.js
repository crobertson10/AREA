const Reaction = require("../models/reactionSchema");

let data = [
    {
        actionService: "Slack",
        actionName: "Message: Create",
        service: "Github",
        name: "Create repo",
        route: "/reaction/github/create"
    },
    {
        actionService: "Slack",
        actionName: "Message: Create",
        service: "Trello",
        name: "Create board",
        route: "/reaction/trello/board/create"
    },
    {
        actionService: "Slack",
        actionName: "Message: Create",
        service: "Slack",
        name: "Create channel",
        route: "/reaction/slack/create"
    },
    {
        actionService: "Slack",
        actionName: "Message: Invit",
        service: "Github",
        name: "Invit member",
        route: "/reaction/github/invit"
    },
    {
        actionService: "Slack",
        actionName: "Message: Invit",
        service: "Trello",
        name: "Invit member",
        route: "/reaction/trello/user/add"
    },
    {
        actionService: "Github",
        actionName: "Repo Created",
        service: "Github",
        name: "Tranfert repo",
        route: "/reaction/github/tranfer"
    },
    {
        actionService: "Github",
        actionName: "Repo Created",
        service: "Github",
        name: "Delete repo",
        route: "/reaction/github/delete"
    },
    {
        actionService: "Github",
        actionName: "Repo Created",
        service: "Slack",
        name: "Send message",
        route: "/reaction/slack/send"
    },
    {
        actionService: "Github",
        actionName: "Repo Created",
        service: "Trello",
        name: "Create board",
        route: "/reaction/trello/board/create"
    },
    {
        actionService: "Github",
        actionName: "Repo Created",
        service: "Trello",
        name: "Delete board",
        route: "/reaction/trello/board/delete"
    }
]

module.exports = function () {
    data.forEach(element => {
        Reaction.findOne(element, (err, reaction) => {
            if (err) {
                console.log(err);
            }
            else if (!reaction) {
                reaction = new Reaction(element);
                try {
                    reaction.save()
                } catch (error) {
                    console.log(error);
                }
            }
        })
    });
}