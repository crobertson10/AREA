const axios = require('axios');
const Registered = require('../models/registeredschema');

var scriptGitHub = (function(){
   saveGitHubData= "";
   return function (token)
   {
  axios({
   method: 'get',
   url: `https://api.github.com/user/repos`,
   headers: {
       "Authorization": `token ${token}`
   },
   }).then((resp)=> {
       GitHubData =  resp;
       if (saveGitHubData == "")
       {
          saveGitHubData = GitHubData;
       }
       else{
         if (saveGitHubData.data.length == GitHubData.data.length)
         {
            console.log(false);
            return false;
         }
         else if (saveGitHubData.data.length < GitHubData.data.length)
         {
            console.log("new repo " + (GitHubData.data.length - saveGitHubData.data.length ).toString());
         }
         else if (saveGitHubData.data.length > GitHubData.data.length)
         {
            console.log("delete repo " + ( saveGitHubData.data.length - GitHubData.data.length).toString());
         }
     
      }  
      saveGitHubData = GitHubData;
   });
  
   }
}) ();

exports.scriptGitHub = scriptGitHub;