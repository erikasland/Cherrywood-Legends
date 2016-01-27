

function init() {

    var background_ctx = document.getElementById("background").getContext('2d')
    console.log(background_ctx)
    var tower_ctx = document.getElementById("tower_canvas").getContext('2d')




    var background = new Image();
    background.src = './static/sacredcherrygrove.png';


    loadField();
        


    function reloadField(callback){
        console.log("reloading")
        background = new Image();
        background.src = './static/sacredcherrygrove.png';
            //load the background
        background.onload = function() {
          var pattern = background_ctx.createPattern(background, 'no-repeat');
          background_ctx.fillStyle = pattern;
          background_ctx.fillRect(0,0,1550,960);
          //load the towers and character only after the background has loaded
           callback();
        }
    }
    function loadField() {
        //load the background
        background.onload = function() {
          var pattern = background_ctx.createPattern(background, 'no-repeat');
          background_ctx.fillStyle = pattern;
          background_ctx.fillRect(0,0,1550,960);
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
            var pattern = tower_ctx.createPattern(tower, 'no-repeat');
            tower_ctx.fillStyle = pattern;
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
                tower_ctx.drawImage(tower, x, y, 176, 276); 
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
            'WALK_RIGHT': [[0,210], [35,210], [70,210]],
            'WALK_DOWN': [[0,105], [35,105], [70,105]]
        }
        
        //dx is the width of the sprite aka what we use to increment the sx and sy coordinates
        var dx = 0;
        var dy = 0;
        //starting point x and y coordinates on the sprite sheet
        var sx = 0;
        var sy = 0;
        var destX = 500;
        var destY = 650; 
        var count = 0;
        var action;



       function character_img_loaded() {

          console.log("character_img_loaded")

          background_ctx.drawImage(character_img, sx, sy,35,35,destX,destY,35,35);

        }


        //establish character position
        //update character movement
        function updateAction(position){
            count++
            sy = position[0][1];
            sx = position[0][0] + dx;
            dx = dx + 35
            // console.log(sx);
            // console.log(sy);
            if(count >= position.length){
                window.clearInterval(action);
                sx = 0;
                dx = 0;
                count = 0;
            }

            reloadField(function(){

                background_ctx.drawImage(character_img, sx, sy, 35, 35,destX,destY,35,35);
            })

        } 

        //Check for keypress to navigate link
        $(document).on("keypress", function(e){

            if(e.which == 32){
                function fight(){

                    updateAction(positions['FIGHTING']);
                }
                
            action = setInterval(fight, 50);
            } 

            if(e.which == 50){
                function walk_left(){
                    destX -= 15;
                    updateAction(positions['WALK_LEFT']);
                }
                action = setInterval(walk_left, 50);
            }

            if(e.which == 51){
                function walk_back(){
                    destY -= 15;
                    updateAction(positions['WALK_BACK']);
                }
                action = setInterval(walk_back, 50);
            }
            
            if(e.which == 52){
                function walk_right(){
                    destX += 15;
                    updateAction(positions['WALK_RIGHT']);
                }
                action = setInterval(walk_right, 50);
            }

            if(e.which == 53){
                function walk_down(){ 
                    destY += 15;
                    updateAction(positions['WALK_DOWN']);
                }
                action = setInterval(walk_down, 50);
            }
        })

    }


}










