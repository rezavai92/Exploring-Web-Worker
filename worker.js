onmessage = (ev) => {
    console.log("Thread has started working...")
    const { message, payload } = ev.data;
    

    if (message == "CALCULATE_SUM") {
        
        const { start,end } = payload;

        postMessage(sumRange(start,end));
    }
    console.log("Thread stopped working")
}

function sumRange(start, end) {
    let sum = 0;
    while (start <= end) {
        sum += start;
        start++;
    }

    return sum;
}

