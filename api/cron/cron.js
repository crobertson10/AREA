var cron =  require('node-cron');
var scriptGitHub = require('./scriptGitHub');

let tokenGithub  = "";
let chan = "";
let tokenSlack = "";
let task = [];


var setTaskGithub =( function()
{
 this.task.push([new cron.schedule('*/2 * * * * *', () => {
   scriptGitHub.scriptGitHub(this.tokenGithub, this.tokenSlack, this.chan);
 }, {
   scheduled: true
 }), this.tokenGithub, this.tokenSlack]);
});
  

 exports.setTaskGithub = setTaskGithub;
 exports.task = task;
 exports.tokenGithub = tokenGithub;
 exports.chan = chan;
 exports.tokenSlack = tokenSlack;