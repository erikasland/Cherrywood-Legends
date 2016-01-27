

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

    var positions = {

        'FIGHTING': [[0,0], [35,0], [70,0], [105,0], [140,0], [175,0]],
        'WALK_LEFT': [[0,105], [35,105], [70,105]],
        'WALK_BACK': [[105,105], [140,105],[175,105]],
        'WALK_RIGHT': [[0,245], [35,245], [70,245]],
        'WALK_DOWN': [[0,105], [35,105], [70,105]]
    }
    console.log(positions['FIGHTING'].length)
    //dx is the width of the sprite aka what we use to increment the sx and sy coordinates
    var dx = 35;
    var dy = 0;
    //starting point x and y coordinates on the sprite sheet
    var sx = 0;
    var sy = 0;
    var destX = 500;
    var destY = 650;
    var count = 0;

    function character_img_loaded() {

      console.log("hello")
      ctx.drawImage(character_img, sx, sy,35,35,destX,destY,35,35);


    }

    $(document).on("keypress", function(e){
        if(e.which == 32){
            function fight(){
                sy = 0;
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
        if(e.which == 50){
            console.log("hellooooooo")
            function walk_left(){
                sy = 105;
                sx = sx + dx;
                destX -= 15;
                count++
                if(count >= positions['WALK_LEFT'].length){
                    window.clearInterval(start_walking);
                    sx = 0;
                }
                reloadField(function() {

                    ctx.drawImage(character_img, sx, sy, 35, 35,destX,destY,35,35);

                });
            }
            var start_walking = setInterval(walk_left, 50);
        }
        if(e.which == 51){
            function walk_back(){
                count ++
                sy = 105;
                sx = 105 + dx;
                // destX += 15;
                destY -= 15;
                if(count >= positions['WALK_BACK'].length){
                    window.clearInterval(start_walking_again);
                    sx = 0;
                }
                reloadField(function() {

                    ctx.drawImage(character_img, sx, sy, 35, 35, destX, destY, 35, 35);
                });
            }
            var start_walking_again = setInterval(walk_back, 50);
        }
        if(e.which == 52){
            function walk_right(){
                count++;
                sy = 215;
                sx += dx ;
                destX += 15;
                if(count >= positions['WALK_RIGHT'].length){
                    window.clearInterval(hit_the_road_jack);
                    sx = 0;
                }
                reloadField(function(){
                    ctx.drawImage(character_img, sx, sy, 35, 35, destX, destY, 35, 35);
                })
            }
            var hit_the_road_jack = setInterval(walk_right, 50);
        }
        if(e.which == 53){
            function walk_down(){
                count++;
                sy = 105;
                sx += dx ;
                destY += 15;
                if(count >= positions['WALK_DOWN'].length){
                    window.clearInterval(walking_more);
                    sx = 0;
                }
                reloadField(function(){
                    ctx.drawImage(character_img, sx, sy, 35, 35, destX, destY, 35, 35);
                })
            }
            var walking_more = setInterval(walk_down, 50);
        }
    })

}


var constants = {
    'WALKING': {
        'y': 3,
        'x': [0, 1, 2]
    }
}











