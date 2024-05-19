let intervalId = setInterval(() => {
    clearInterval(intervalId);
    window.location.replace("../index.html")
}, 1000)