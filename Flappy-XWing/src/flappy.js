window.onload = function() 
{
    
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");

    //Left to right wing
    context.moveTo(50, 100);
    context.lineTo(400,200);
    context.stroke();


    //Right to left wing 
    context.moveTo(400, 50);
    context.lineTo(50,100);
    context.stroke();

    // alert("Please don't sue me, Disney...");
    let btn = document.getElementById('jump');
    let count = 0;

    btn.onclick = function() 
    {
        count++;
        console.log("Count = " + count);
    }




}