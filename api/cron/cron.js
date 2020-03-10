var cron =  require('node-cron');
var scriptGitHub = require('./scriptGitHub');

let tokenGithub  = "";
let task = [];


var setTaskGithub =( function()
{
 this.task.push([new cron.schedule('*/4 * * * * *', () => {
   scriptGitHub.scriptGitHub(this.tokenGithub);
 }, {
   scheduled: true
 }), this.tokenGithub]);
});
  

 exports.setTaskGithub = setTaskGithub;
 exports.task = task;
 exports.tokenGithub = tokenGithub;