var cron = require('node-cron');
const {exec} = require('child_process');

let date = new Date();

console.log("Started CRON Job at " + date.getHours() + 'h:' + date.getMinutes() );
console.log('Farming at ' + date.getHours() + 'h:' + date.getMinutes())
exec('npm run report');

cron.schedule('*/6 * * * *', () => {
    let date = new Date();
    console.log('Farming at ' + date.getHours() + 'h:' + date.getMinutes())
    exec('npm run report');
});