function load (){
    var msg = document.getElementById('msg');
    var img = document.querySelector('img');
    var data = new Date();
    var hour = data.getHours();
    
    if (hour < 6){
        img.src = "src/night.png"
        hour += " AM"
        msg.innerHTML = "Hey there night owl! "
        document.body.style.background = "#0b1026"
    }
    else if(hour <= 12){
        img.src = "src/morning.png"
        hour += " AM"
        msg.innerHTML = "Good morning my sunshine <3 "
        document.body.style.background = "#f7db79"
    }
    else if (hour <= 18) {
        img.src="src/afternoon.png"
        hour -=12
        hour += " PM"
        msg.innerHTML = "Time to live, it is already afternoon! "
        document.body.style.background = "#f2b366"
    } else {
        img.src="src/night.png"
        hour -=12
        hour += " PM"
        msg.innerHTML = "Good night! "
        document.body.style.background = "#24284e"
    }
    msg.innerHTML += `It is ${hour}`
}