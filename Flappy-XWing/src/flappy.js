window.onload = function() {
    let btn = document.getElementById('jump');
    let count = 0;

    btn.onclick = function() {
        count++;
        console.log("Count = " + count);
    }

}