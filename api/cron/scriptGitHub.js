const axios = require('axios');
const Registered = require('../models/registeredschema');

var scriptGitHub = (function(){
   saveGitHubData= "";
   return function (github, slack)
   {
  axios({
   method: 'get',
   url: `https://api.github.com/user/repos`,
   headers: {
       "Authorization": `token ${github}`
   },
   }).then((resp)=> {
       if (saveGitHubData == "")
       {
          saveGitHubData = resp;
       }
       else{
        if (saveGitHubData.data.length < resp.data.length)
         {
            let conv = "area";
            let mess = "|test cron github, un repo a ete cree|";
            console.log("yes");
            axios.post(`http://localhost:8080/action/slack/send`, {
               token: slack,
               name: conv,
               message: mess
             })
               .then(function(response) {
                 console.log(response);
               })
               .catch(function(error) {
                 console.log(error);
               });
         }
         else if (saveGitHubData.data.length > resp.data.length)
         {
            let conv = "area";
            let mess = "|test cron github, un repo a ete supprimer|";
            console.log("no");
            axios.post(`http://localhost:8080/action/slack/send`, {
               token: slack,
               name: conv,
               message: mess
             })
               .then(function(response) {
                 console.log(response);
               })
               .catch(function(error) {
                 console.log(error);
               });
         }
     
      }  
      saveGitHubData = resp;
   });
   
   }
}) ();

exports.scriptGitHub = scriptGitHub;