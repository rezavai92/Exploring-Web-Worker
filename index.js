


const bigOpBtn= document.getElementById('initBigSumBtn');
const changeBgBtn = document.getElementById('changeBgBtn');


// Dom Event Listeners
bigOpBtn.addEventListener("click", (ev) => {
   
    const worker = new Worker('worker.js');

    worker.onmessage = (ev) => {
        document.getElementById('sumArea').innerText = ev.data;
    }

    initiateBugSumWithWebWorker(worker,getBigSumWorkerCommand());   
    
})

changeBgBtn.addEventListener("click", () => {
    let bgColor = document.body.style.backgroundColor;

    if (bgColor == 'red') {
        document.body.style.backgroundColor = "yellow"
    }
    else {
        document.body.style.backgroundColor = "red"
    }
    
})



// Util Functions
function getBigSumWorkerCommand() {
    const sumRange = {
        start: 0,
        end : 10000000000
    }

    return new WebWorkerCommand("CALCULATE_SUM", sumRange);
}

function initiateBugSumWithWebWorker(worker,sumWorkerCommand) {
    worker.postMessage(sumWorkerCommand);
}



// classes

class WebWorkerCommand{
    
    constructor(message, payload) {
        this.message = message;
        this.payload = payload;
    }
}
