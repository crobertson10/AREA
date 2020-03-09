var cron =  require('node-cron');
var scriptGitHub = require('./scriptGitHub');

var id = "";

var task = new cron.schedule('*/4 * * * * *', () => {
   scriptGitHub.scriptGitHub(this.id);
 }, {
   scheduled: false
 });
  

 exports.task = task;
 exports.id = id;