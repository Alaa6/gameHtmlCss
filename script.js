


var canvas = document.getElementById('canvas')
var car = document.getElementById('car')
var park1 = document.getElementById('park1')
var park2 = document.getElementById('park2')
var park3 = document.getElementById('park3')
var carBody = document.getElementById('carBody')




var ctx = canvas.getContext('2d')
ctx.rotate(20 * Math.PI / 180);

var road = new Image()
road.src = './imgs/ride2.jpg'

var road2 = new Image()
road2.src = './imgs/Road.svg'

var road3 = new Image()
road3.src = './imgs/ride2.jpg'

var road4 = new Image()
road4.src = './imgs/ride2.jpg'

var road5 = new Image()
road5.src = './imgs/ride2.jpg'

var road6 = new Image()
road6.src = './imgs/ride2.jpg'

var road7 = new Image()
road7.src = './imgs/ride2.jpg'


var road8 = new Image()
road8.src = './imgs/ride2.jpg'

var road9 = new Image()
road9.src = './imgs/ride2.jpg'

var road10 = new Image()
road10.src = './imgs/ride2.jpg'

var mine1 = new Image()
mine1.src = './imgs/mines.png'

var mine2= new Image()
mine2.src = './imgs/mines.png'

var mine3 = new Image()
mine3.src = './imgs/mines.png'




road.onload = function () {
    ctx.drawImage(road, 0, 0, 500, 100); // x y w h
}

road5.onload = function () {
    ctx.drawImage(road5, 0, 100, 500, 100); // x y w h
}


road2.onload = function () {
    ctx.drawImage(road2, 500, 0, 500, 100); // x y w h
}

road6.onload = function () {
    ctx.drawImage(road6, 700, 0, 500, 100); // x y w h
}



road3.onload = function () {
    // ctx.translate(100,150);
    ctx.drawImage(road3, 500, 100, 500, 100); // x y w h
}

road4.onload = function () {
    ctx.drawImage(road4, 200, 0, 500, 100); // x y w h
}


road7.onload = function () {
    ctx.drawImage(road7, 700, 100, 500, 100); // x y w h
}



road8.onload = function () {
    // ctx.translate(100,150);
    ctx.drawImage(road8, 500, 200, 500, 100); // x y w h
}

road9.onload = function () {
    ctx.drawImage(road9, 0, 200, 500, 100); // x y w h
}


road10.onload = function () {
    ctx.drawImage(road10, 700, 200, 500, 100); // x y w h
}

mine1.onload = function () {
    ctx.drawImage(mine1, 100, 150, 100, 100); // x y w h
}



mine2.onload = function () {
    ctx.drawImage(mine2, 300, 100, 100, 100); // x y w h
}



mine3.onload = function () {
    ctx.drawImage(mine3, 600, 200, 100, 100); // x y w h
}


var x = 0
var y = 0


document.addEventListener('keyup', function (e) {

    park1.style.fill = '#6EB1E2'
    park2.style.fill = '#6EB1E2'
    park3.style.fill = '#6EB1E2'
    carBody.style.fill ="#ED6951"



    if (x >= 0 && y >= 0) {

 
        
        switch (e.keyCode) {

            case 37: { //left
               
                x -= 50
                car.style.transform = `translate(${x}px,${y}px)`
                if (x < 0) {
                    x = 0
                }

            }
                break;
            case 38: { //up
               
                y -= 50
                car.style.transform = `translate(${x}px,${y}px)`
                if (y < 0) {
                    y = 0
                }


            }
                break
            case 39: { //right
            
             
                x += 50
                car.style.transform = `translate(${x}px,${y}px)`

            } break
            case 40: { //down
          
             
                y += 50
                car.style.transform = `translate(${x}px,${y}px)`
            }
        }

        console.log(x);
        console.log(y);



        if (x >= 500 && x < 1000 && y >= 100 && y <= 350) {
            carBody.style.fill ='#5a5e76'
            alert("oops , there is strange road , please try again")
            x = 0
            y = 0

        }


        if (x >= 0 && x <= 100 && y >= 300 && y <= 400) {
            carBody.style.fill ='#5a5e76'
            alert("oops , there are mines , please try again")
            x = 0
            y = 0

        }

        if (x >= 250 && x <= 350 && y >= 300 && y <= 350) {
            carBody.style.fill ='#5a5e76'
            alert("oops , there are mines , please try again")
            x = 0
            y = 0

        }

        if (x >= 450 && x <= 550 && y >= 450 && y <= 500) {
            carBody.style.fill ='#5a5e76'
            alert("oops , there are mines , please try again")
            x = 0
            y = 0

        }

        if (x >= 950 && y >= 650) {
            park1.style.fill = '#e60048'
            park2.style.fill = '#e60048'
            park3.style.fill = '#e60048'
            alert(" Parking here *_* Congratulations *_*")

            x = 0
            y = 0
        }


    }





}
);









// var tsadom = new event("tsadom");

// car.addEventListener("tsadom", function () {
//     // if (x == x +100 || x ==rectX +100 || arcY ==y || rectY == y){
//     alert("game over please try again")
//     // }
// })

// car.dispatchEvent(tsadom)