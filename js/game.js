

//create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');
canvas.width = 1550;
canvas.height = 960;
document.body.appendChild(canvas);

var background = new Image();
background.src = './static/sacredcherrygrove.png';


    loadField();



function reloadField(callback){
    console.log("reloading")
    background = new Image();
    background.src = './static/sacredcherrygrove.png';
        //load the background
    background.onload = function() {
      var pattern = ctx.createPattern(background, 'no-repeat');
      ctx.fillStyle = pattern;
      ctx.fillRect(0,0,1550,960);
      //load the towers and character only after the background has loaded
      drawTower();
      callback();
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


function drawCharacter() {
    


    var character_img = new Image();
    character_img.onload = function() {
        character_img_loaded()
    }
    // character_img.addEventListener('load', character_img_loaded , false);
    character_img.src = './static/link.png';

    var positions = [[0,0], [35,0], [70,0], [105,0], [140,0], [175,0]];

    var dx = 35;
    var dy = 0;
    var sx = 0;
    var sy = 0;
    var destX = 500;
    var destY = 650;

    function character_img_loaded() {

      console.log("hello")
      ctx.drawImage(character_img, sx, sy,35,35,destX,destY,35,35);


    }

    $(document).on("keypress", function(e){
        if(e.which == 32){
            // oldDest = destX;
            // destX = destX + 35;
            function fight(){
                sy = sy+dy;
                sx = sx+dx;
                if(sx == 210){
                    window.clearInterval(start_fight);
                    sx = 0;
                }
                reloadField(function() {

                    ctx.drawImage(character_img, sx, sy, 35, 35,destX,destY,35,35);

                });
            }
           var start_fight = setInterval(fight, 50);
        }
    })

}


var constants = {
    'WALKING': {
        'y': 3,
        'x': [0, 1, 2]
    }
}

























// //draw the character
// function drawCharacter(){
//     var constants = {
//         'WALKING': {
//             'y': 3,
//             'x': [0, 1, 2]
//         }
//     }


//     var character_img = new Image();
//     character_img.src = './static/link.png';
//     character_img.onload = function(){
//         sprite.draw(0, 600, 650);
        
//     }
    
//     function Sprite(img, width, height, positions){
//         this.img = img;
//         this.width = width;
//         this.height = height;
//         this.positions = positions;
//     }

//     Sprite.prototype = {
//         draw: function(position, x, y){
//             console.log("drawing link")
//             var pos = this.positions[position];
//             ctx.drawImage(
//                 this.img,
//                 pos[0],
//                 pos[1],
//                 this.width,
//                 this.height,
//                 x, 
//                 y,
//                 this.width,
//                 this.height
//             );
//         }
//     }
//     var sprite = new Sprite(character_img, 21, 25, [
//         [0,0], [25,0], [50,0]
//     ]);
   

//     $(document).on("keypress", function(e){
//         if(e.which == 32){
//             var x = 600;
//             var y = 650;
//             // for(var i = 0; i <= 2; i++){
//             //     sprite.draw(i, x, y);
//             //     x+=25;
               
//             // }

            
//             loadField();
//             sprite.draw(1, 625, 650);
//         }
//     })
    
    
// }










