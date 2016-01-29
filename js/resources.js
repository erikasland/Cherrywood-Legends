var Game = {};
Game.draw = function(){
   loadField();
}
// Game.update = function(){

//     $(document).on("keypress", function(e){
//         if(e.which == 32){
//             var x = 600;
//             var y = 650;
//             for(var i = 0; i <= 5; i++){
//                 sprite.draw(i, x, y);
               
//             }
//         }
//     })
//     //game logic goes here
// }

while(!Game.stopped){
    Game.draw();
    Game.update();
}

Game.fps = 50;

Game.run = (function() {
    var loops = 0, skipTicks = 1000 / Game.fps,
        maxFrameSkip = 10,
        nextGameTick = (new Date).getTime();

    return function() {
      loops = 0;

      while ((new Date).getTime() > nextGameTick) {
        updateStats.update();
        Game.update();
        nextGameTick += skipTicks;
        loops++;
      }

      renderStats.update();
      Game.draw();
    };
  })();
  
  window.setInterval(Game.run, 0);