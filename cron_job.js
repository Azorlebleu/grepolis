var cron = require('node-cron');
const {exec} = require('child_process');

let date = new Date();
let each = 11;
console.log("Started CRON Job at " + date.getHours() + 'h:' + date.getMinutes() );
console.log("It will farm camps every " + each + " minutes.\n\n")

//Lance la fonction toutes les 'each' minutes
cron.schedule('*/' + each + ' * * * *', () => {
    let date = new Date();
    console.log('\nStarting farming  at ' + date.getHours() + 'h:' + date.getMinutes() + '...')
    exec('npm run report', (error, stdout, stderr) =>
    {
        //Si il y a eu une erreur dans le farming :
        if (error){
            console.log('There was an error with this farm. \nTry running the command : npm run report to have more details about what might have happened.')
        }

        //Si il n'y a pas eu d'erreur dans le farming :
        else {
            let endDate = new Date(); 
            let sec = (endDate.getTime() - date.getTime())/1000; //Calcule le temps pris pour farmer
            console.log('\t\tSuccesfully farmed in ' + sec + 's !')
        }
    });
});