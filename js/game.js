
function init() {

    var background_ctx = document.getElementById("background").getContext('2d')

    var tower_ctx = document.getElementById("tower_canvas").getContext('2d')

    var game_over = false;

    tower_ctx.clearRect(0, 0, 1550, 960);
    tower_ctx.clearRect(0, 0, 1550, 960);
    document.getElementById('game_over').style.display = 'none'


    loadField();
        
// ---------------reload--------------------

    function reloadField(callback){

        background = new Image();
        background.src = './static/sacredcherrygrove.png';
            //load the background
        background.onload = function() {
        var pattern = background_ctx.createPattern(background, 'no-repeat');
        background_ctx.fillStyle = pattern;
        background_ctx.fillRect(0,0,1550,960);
        //load the towers and character only after the background has loaded
        // if(callback == true){
        //     console.log('hereeeeeeeeee ughhh')
        //     // tower_ctx = document.getElementById("tower_canvas").getContext('2d')
        //     background_ctx.font = "45px Courier";
        //     background_ctx.fillText("Game Over", 650, 550);
        //   } else {

           callback();
          // }
        }
    }

// ------------------initial load---------------------
    function loadField() {
        //load the background
        var background = new Image();
        background.src = './static/sacredcherrygrove.png';
        background.onload = function() {
            var pattern = background_ctx.createPattern(background, 'no-repeat');
            background_ctx.fillStyle = pattern;
            background_ctx.fillRect(0,0,1550,960);
            
            //load the towers and character only after the background has loaded
            drawTower();
            drawCharacter(game_over);

        };
        
    }

// -------------explosion stuff------------------------

    function drawExplosion(tower){

        var explosion_img = new Image();
        var explosiveCallback;
        explosion_img.onload = function(){

            explosiveCallback = setInterval(updateExplosion, 200);    
        }
            
        explosion_img.src = './static/explosion.png';

        var constants = {
            'EXPLODE_UP': [[0,0], [160,0], [320,0], [480,0], [0,160],[160,160],[320,160],[480,160]]
        }

        var dx = 0;
        var dy = 0;
        var sx = 0;
        var sy = 0;
        var destX = tower.x;
        var destY = tower.y
        var explosion;
        var count = 0;


        var explosionIndex = 0;

        function updateExplosion() {
            if (explosionIndex == constants["EXPLODE_UP"].length) {
                window.clearInterval(explosiveCallback);

                drawTower(tower)

            }

            
            if(explosionIndex < constants['EXPLODE_UP'].length){
                sy = constants["EXPLODE_UP"][explosionIndex][1];
                sx = constants["EXPLODE_UP"][explosionIndex][0];
                tower_ctx.drawImage(explosion_img, sx, sy, 160, 160, destX, destY, 160, 160);
                explosionIndex++;
                
            }
            
            
        }
    }


// ---------------------tower stuff ---------------------


    //create an array to hold each tower object
    var towers = [{
                type: 'tower',
                x: 200,
                y: 450,
                w: 151,
                h: 201,
                hp: 2,
                alive: true,
                flag: false
        }, {
                type: 'tower',
                x: 50,
                y: 250,
                w: 151,
                h: 201,
                hp: 2,
                alive: true,
                flag: false
                
        }, {
                type: 'tower',
                x: 50,
                y: 650,
                w: 151,
                h: 201,
                hp: 2,
                alive: true,
                flag: false

            
        }, {
                type: 'tower',
                x: 1300,
                y: 650,
                w: 151,
                h: 201,
                hp: 2,
                alive: true,
                flag: false
              
        }, {
                type: 'tower',
                x: 1150,
                y: 450,
                w: 151,
                h: 201,
                hp: 2,
                alive: true,
                flag: false
              
        }, {
                type: 'tower',
                x: 1300,
                y: 250,
                w: 151,
                h: 201,
                hp: 2,
                alive: true,
                flag: false
            }
            
    ]



    function drawTower(tower){

        for(var i = 0; i < towers.length; i++){
            console.log(towers[i])
            //check for explosion
            if(tower == towers[i]){
                towers[i].alive = false;
            }
        }
        //create the flag
        var flag_index = Math.floor(Math.random()*7)
        
        towers[flag_index].flag = true;
        var tower_image = new Image()
        tower_image.src = './static/castle.png';
        tower_image.onload = function() {
            var pattern = tower_ctx.createPattern(tower_image, 'no-repeat');
            tower_ctx.fillStyle = pattern;

            for(var i = 0; i < towers.length; i++){
                    
                if(towers[i].alive == true){
                    tower_ctx.drawImage(tower_image, towers[i].x, towers[i].y, towers[i].w, towers[i].h); 

                } else if(towers[i].alive == false && towers[i].flag == false){
                    tower_ctx.clearRect(tower.x, tower.y, tower.w, tower.h)
                    
                    var rubble_img = new Image();
                    rubble_img.src = './static/rock.png'
                    rubble_img.onload = function() {
                        var pattern = tower_ctx.createPattern(rubble_img, 'no-repeat');
                        tower_ctx.fillStyle = pattern;
                        tower_ctx.drawImage(rubble_img, tower.x, tower.y, tower.w, tower.h);
                    }

                } else if(towers[i].alive == false && towers[i].flag == true) {

                    tower_ctx.clearRect(tower.x, tower.y, tower.w, tower.h)

                    var rubble_img = new Image();
                    rubble_img.src = './static/rock.png'

                    //flag
                    var flag_img = new Image();
                    flag_img.src = './static/flag.png'

                    rubble_img.onload = function() {
                        var pattern = tower_ctx.createPattern(rubble_img, 'no-repeat');
                        tower_ctx.fillStyle = pattern;
                        tower_ctx.drawImage(rubble_img, tower.x, tower.y, tower.w-30, tower.h-60);
                    }

                    flag_img.onload = function(){
                        var pattern = tower_ctx.createPattern(flag_img, 'no-repeat');
                        tower_ctx.fillStyle = pattern;
                        tower_ctx.drawImage(flag_img, tower.x+50 , tower.y+5, 35, 35);
                        
                    }
                    var game_over = true;

                    drawCharacter(game_over);

                }

            }

        }    

    }
                    

// -------------------character------------------------

    var character1 = {
        type: 'character',
        w: 35,
        h: 35,
        x: 800,
        y: 650,
        hp: 6,
        attack: 1
    }

    function drawCharacter(game_over) {
        console.log(game_over);
        if(game_over == false){

            var character_img = new Image();
            character_img.onload = function() {
                character_img_loaded()
            // character_img.addEventListener('load', character_img_loaded , false);
            }
            character_img.src = './static/link.png';
        }
        game(game_over);

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
        var destX = 800;
        var destY = 650; 
        var count = 0;
        var action;



       function character_img_loaded() {


          background_ctx.drawImage(character_img, sx, sy,35,35,destX,destY,35,35);

        }


        //establish character position
        //update character movement
        function updateAction(position){
            count++
            sy = position[0][1];
            sx = position[0][0] + dx;
            dx = dx + 35

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

// ------------------functionality------------------------
        
        function game(game_over){

            if(game_over == true){
                console.log('GAME OVER!!!')
                document.getElementById('game_over').style.display = 'block';
               
                // tower_ctx.font = "30px Press Start 2P";

            } else {

                //Check for keypress to navigate link
                $(document).on("keyup", function(e){
                    var barrier_top = {x:0, y:0, w:1550, h:300}
                    var barrier_bottom = {x:0, y:880, w:1550, h: 200}
                    
                    e.preventDefault();
                    if(e.which == 32){
                        function fight(){

                            updateAction(positions['FIGHTING']); 
                        }
                     
                        for(var i = 0; i < towers.length; i++){
                            if(towers[i].x < character1.x + character1.w && 
                                towers[i].x + towers[i].w > character1.x &&
                                towers[i].y < character1.y + character1.h &&
                                towers[i].h + towers[i].y > character1.y){
                                
                                towers[i].hp --
                                if(towers[i].hp == 0){
                                    drawExplosion(towers[i], function(){

                                        towers[i].alive = false;

                                    });

                                }
                         
                            }
                        }
                        
                    action = setInterval(fight, 10);
                    } 

                    if(e.which == 50){
                        function walk_left(){
                            
                            for(var i = 0; i < towers.length; i++){
                                if(towers[i].x < character1.x + character1.w && 
                                    towers[i].x + towers[i].w > character1.x &&
                                    towers[i].y < character1.y + character1.h &&
                                    towers[i].h + towers[i].y > character1.y){
                                        
                                        destX+=27;
                                        character1.x += 27;

                                    } else {
                                        destX -= 5;
                                        character1.x -= 5;
                                        updateAction(positions['WALK_LEFT']);
                                    }
                             
                                }
                            }
                        
                    action = setInterval(walk_left, 5);
                    }

                    if(e.which == 51){
                        console.log(background_ctx.canvas.height-20);
                        function walk_back(){
                            if(barrier_top.x < character1.x + character1.w && 
                                barrier_top.x + barrier_top.w > character1.x &&
                                barrier_top.y < character1.y + character1.h &&
                                barrier_top.h + barrier_top.y > character1.y){
                                
                                    destY+=27;
                                    character1.y+=27;
                            } else {
                                destY -= 5;
                                character1.y -= 5;
                                updateAction(positions['WALK_BACK']);
                            }
                                
                            for(var i = 0; i < towers.length; i++){
                                if(towers[i].x < character1.x + character1.w && 
                                    towers[i].x + towers[i].w > character1.x &&
                                    towers[i].y < character1.y + character1.h &&
                                    towers[i].h + towers[i].y > character1.y){
                                    
                                        destY+=27;
                                        character1.y+=27;
                                       

                                } else{
                                    destY -= 5;
                                    character1.y -= 5;
                                    updateAction(positions['WALK_BACK']);
                                }
                             
                            }
                        }


                        
                        action = setInterval(walk_back, 5);
                    }
                    
                    if(e.which == 52){
                        function walk_right(){
                            for(var i = 0; i < towers.length; i++){
                                if(towers[i].x < character1.x + character1.w && 
                                    towers[i].x + towers[i].w > character1.x &&
                                    towers[i].y < character1.y + character1.h &&
                                    towers[i].h + towers[i].y > character1.y){
                                        
                                    
                                        destX-=27;
                                        character1.x-=27;
                                        

                                    } else{
                                        destX += 5;
                                        character1.x += 5;
                                        updateAction(positions['WALK_RIGHT']);
                                    }
                             
                                }
                            }
                        
                        action = setInterval(walk_right, 5);
                    }

                    if(e.which == 53){
                        function walk_down(){ 
                            if(barrier_bottom.x < character1.x + character1.w && 
                                barrier_bottom.x + barrier_bottom.w > character1.x &&
                                barrier_bottom.y < character1.y + character1.h &&
                                barrier_bottom.h + barrier_bottom.y > character1.y){
                                
                                    destY-=27;
                                    character1.y-=27;
                            } else {
                                destY += 5;
                                character1.y += 5;
                                updateAction(positions['WALK_DOWN']);
                            }

                            for(var i = 0; i < towers.length; i++){
                                if(towers[i].x < character1.x + character1.w && 
                                    towers[i].x + towers[i].w > character1.x &&
                                    towers[i].y < character1.y + character1.h &&
                                    towers[i].h + towers[i].y > character1.y){
                                    
                                    
                                        destY -= 27;
                                        character1.y -= 27;
                                       

                                    } else {
                                        destY += 5;
                                        character1.y += 5;
                                        updateAction(positions['WALK_DOWN']);
                                    }
                             
                                }
                            }
                        
                        action = setInterval(walk_down, 5);
                    }

                })

            }
        }
        
    }


}











