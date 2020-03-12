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
        route: "/reaction/user"
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
            console.log(reaction);
        })
    });
}