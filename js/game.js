

//create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');
canvas.width = 1550;
canvas.height = 960;
document.body.appendChild(canvas);

var background = new Image();
background.src = './static/sacredcherrygrove.png';


var keysDown = {};
//EVENT LISTENER FOR THE KEYPRESS
addEventListener("keydown", function (e){
    keysDown[e.keyCode] = true;
}, false);
//CLEARING THE KEYPRESS
addEventListener("keyup", function (e){
    delete keysDown[e.keyCode];
}, false);


//GAME LOOP
var main = function() {
    var now = Date.now();
    var delta = now - then;

    update();
    loadField();

    then = now;

    requestAnimationFrame(main);
}
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now();
main();

function update(){
    if(32 in keysDown) {

        for(var i = 0; i <= 5; i++){
            sprite.draw(i, 600, 650);
               
        }
    }
}



function loadField() {
    //load the background
    background.onload = function() {
      var pattern = ctx.createPattern(background, 'no-repeat');
      ctx.fillStyle = pattern;
      ctx.fillRect(0,0,1550,960);
      //load the towers and character only after the background has loaded
      drawTower();
      drawCharacter();
    };
    
}


//draw the towers
function drawTower(){
    var tower = new Image();
    tower.src = './static/castle.png';
    tower.onload = function() {
        var x = 50;
        var y = 850;
        var pattern = ctx.createPattern(tower, 'no-repeat');
        ctx.fillStyle = pattern;
        //we could pass in a number here instead of hard coding 4
        for(var i = 0; i < 6; i++){
            if(i === 1){
                x = x + 150;
            }
            else if(i == 2){
                x = x - 150;
            }

           else if(i == 3){
                x = 1300;
                y = 850;
            }

            else if (i == 4){
                x = x - 150;
            }

            else if(i == 5){
                x = x + 150;
            }
            y = y - 200
            ctx.drawImage(tower, x, y, 176, 276); 
        }
    }
}


//draw the character
function drawCharacter(){
    var character_img = new Image();
    character_img.src = './static/link.png';
    character_img.onload = function(){
        sprite.draw(0, 600, 650);
        
    }
    
    function Sprite(img, width, height, positions){
        this.img = img;
        this.width = width;
        this.height = height;
        this.positions = positions;
    }

    Sprite.prototype = {
        draw: function(position, x, y){
            console.log("drawing link")
            var pos = this.positions[position];
            ctx.drawImage(
                this.img,
                pos[0],
                pos[1],
                this.width,
                this.height,
                x, 
                y,
                this.width,
                this.height
                );
        }
    }
    var sprite = new Sprite(character_img, 21, 25, {
        //walking positions
        'walk': {'x': [0, 25, 50, 75, 100, 125], 'y': 0}
    ]);
   
    
}

function attack(){
    $(document).on("keypress", function(e){
        if(e.which == 32){
            var x = 600;
            var y = 650;
            for(var i = 0; i <= 5; i++){
                sprite.draw(i, x, y);
               
            }
        }
    })
}






