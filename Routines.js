console.log('We are going to do some JS for routines')

function calculateBedTime() {
    console.log('We are going to tell you when to go to bed')
    var wakeUpHourElement = document.getElementById('wakeUpHour');
    var sleepForElement = document.getElementById('sleepFor');

    var wakeUpHour = wakeUpHourElement.value;
    var sleepFor = sleepForElement.value;

    var bedTime = wakeUpHour - sleepFor;
    if (bedTime < 0) {
        bedTime = bedTime + 24;
    }

    var bedTimeElement = document. getElementById('bedTime');
    bedTimeElement.innerHTML = "Bedtime is: " + bedTime + ":00";
    bedTimeElement.classList += "result";
}