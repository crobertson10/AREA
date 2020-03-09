const axios = require('axios');
const Registered = require('../models/registeredschema');

var scriptGitHub = (function(){
   saveGitHubData= "";
   token = "";
   name = "";
   return function (id)
   {
     
 
   console.log(id); 
   if (token == "")
   {
      Registered.findById(id, function(err, account) 
      {
         if (err)
         {
            console.log("token error");
            return false;
         }
         token = account.accessToken;
         name =account.name;
      });
  }
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
       console.log(GitHubData);
   });
  
   }
}) ();

exports.scriptGitHub = scriptGitHub;