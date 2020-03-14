const Cron = require("cron").CronJob;
const Registered = require("./models/registeredschema");
const Message = require("./models/messageSchema");
const Action = require("./models/actionSchema");
const Reaction = require("./models/reactionSchema");
const Zap = require("./models/zapSchema");
const Axios = require("axios");

let my_cron = new Cron("0 */1 * * * *", async function () {
    console.log("#########################################################################################################");
    console.log("#                                               CRON START                                              #");
    console.log("#########################################################################################################");
    
    await Zap.find({}, async (err, zaps) => {        
        if (err) {
            console.log(err);
            console.log("#########################################################################################################");
            console.log("#                                               CRON END                                                #");
            console.log("#########################################################################################################");
            return;
        } else {
            console.log(zaps);
            zaps.forEach(async (zap) => {
                console.log(zap);
                
                
                let action = await Action.findOne({service: zap.serviceA, name: zap.nameA})
                if (!action) {return;}

                let reaction = await Reaction.findOne({actionService: zap.serviceA, actionName: zap.nameA, service: zap.serviceR, name: zap.nameR})
                if (!reaction) {return;}

                let tokenA;
                let tokenR;

                await Registered.findOne({userId: zap.userId, name: zap.serviceA}, (err, docs) => {
                    if (err) { return ;}
                    if (docs) {
                        tokenA = docs.token;
                    }
                })

                await Registered.findOne({userId: zap.userId, name: zap.serviceR}, (err, docs) => {
                    if (err) { return ;}
                    if (docs) {
                        tokenR = docs.token;
                    }
                })
                console.log(action);
                console.log(reaction);
                console.log(tokenA + " " + tokenR);
                console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
                await Axios({
                    method: "post",
                    url: `http://localhost:8080${action.check}`,
                    data: {
                        userId: zap.userId,
                        zapId: zap._id,
                        token: tokenA
                    }
                }).then(async resp => {
                    console.log(resp.data);
                
                    if (resp.status === 200) {
                        let datar = {
                            token: tokenR,
                            userId: zap.userId,
                            zapId: zap.zapId,
                            data1: resp.data.data1,
                            data2: resp.data.data2,
                            message: resp.data.message,
                            channel: zap.data2,
                        }
                        await Axios({
                            method: "post",
                            url: `http://localhost:8080${reaction.route}`,
                            data: datar
                        }).then(resp => {   
                            console.log(resp.data);
                            return;
                        }).catch(err => {
                            console.log(err);
                            return;
                        })
                    }
                }).catch(error => {
                    console.log("error cron line 76");
                    return;
                })
            });
            console.log("#########################################################################################################");
            console.log("#                                               CRON END                                                #");
            console.log("#########################################################################################################");
        }
    })
})

module.exports = my_cron;