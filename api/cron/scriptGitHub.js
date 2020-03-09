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
   //GitHubData =  
   }
}) ();

exports.scriptGitHub = scriptGitHub;