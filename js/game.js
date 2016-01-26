

//create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');


canvas.width = 1550;
canvas.height = 960;
document.body.appendChild(canvas);

var img = new Image();
img.src = './static/sacredcherrygrove.png';
img.onload = function() {
  var pattern = ctx.createPattern(img, 'no-repeat');
  ctx.fillStyle = pattern;
  ctx.fillRect(0,0,1550,960);
};



function game(building, character){
    this.init = function(){
        var playerOneBuilding = new Building();
        var ch1 = new Character(character);
        playerOneBuilding.create(3, building);
        ch1.create(character);

    }
}

function Building(){
    // var something = the thing that we passed in

    this.create = function(number, building){
        var white_space = window.innerHeight - (160*number);
        var margin_top = white_space/(number -1);
        console.log(margin_top)

        //if we want to add more buildings, we could have a recursive function here that subtracts 3 from the number as it goes

        for(var i = 0; i < number; i++){
            $('#' + building).append('<img class="castle" src="./../the_game/static/castle.png"  style = "margin-top:' + margin_top + '"><br>')
        }
    }

}

function Character(){
    this.create = function(character){
        console.log('working')

        $('#'+character).css('background', "url('./../the_game/static/link.png') "+x*(0)+"px "+(0 + y)+"px").css(0 + "px");

                $('#'+selector).css('background', "url('images/ken.png') "+x*(-70)+"px "+(-80*y)+"px").css('left', this.ch_x+"px");

    }
}
