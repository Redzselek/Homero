setInterval(() => {
    let x = parseInt(document.getElementById("higyanyszal").value)
    if (x>-45) x--;
    document.getElementById("higyanyszal").value = x

}, 100);