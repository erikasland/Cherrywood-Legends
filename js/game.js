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
        // function add_building(number, building){
        //     if(number > 3){
        //         //append the first three to the first div part
        //     }
        //     number = number -3;
        //     add_building(number, building);
        // }
        // if(number > 3){
        //     //append the first three
        //     //append the next three
        //     number = number -3

        // }
        // $("#" + building).append('<img class = "castle" src = "./../the_game/static/castle.png"><br>')
        for(var i = 0; i < number; i++){
            $('#' + building).append('<img class="castle" src="./../the_game/static/castle.png"  style = "margin-top:' + margin_top + '"><br>')
        }
    }

    // var stats = {
    //     hp: 1,
    //     flag: false,

    // }


}

function Character(){
    this.create = function(character){
        console.log('working')

        $('#'+character).css('background', "url('./../the_game/static/link.png') "+x*(0)+"px "+(0 + y)+"px").css(0 + "px");

                // $('#'+selector).css('background', "url('images/ken.png') "+x*(-70)+"px "+(-80*y)+"px").css('left', this.ch_x+"px");

    }
}
