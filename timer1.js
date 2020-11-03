/// Alarm clock function
const alarms = process.argv.slice(2);


for (alarm of alarms){
  if (alarm > 0 ){
    setTimeout(() => {
      process.stdout.write('\x07'); 
    }, 1000*alarm);
  }
}
