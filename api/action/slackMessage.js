import Axios from "axios";
const Registered = require("../models/registeredschema");


let getLastMessage = function (id, channel) {
};

let getConvId = function (token, name) {
    axios({
        method: 'post',
        url: `https://slack.com/api/conversations.list`,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then((resp)=> {
        let bool = false;
        let channels = resp.data.channels;
        channels.forEach(element => {
            if (element.name === name) {
                bool = true;
                console.log(element);
                
            }
        });
        if (bool === false) {
            return null;
        }    
    }).catch((err) => {
        console.log(err);
        res.status(400).send("Error 1")
    })
}