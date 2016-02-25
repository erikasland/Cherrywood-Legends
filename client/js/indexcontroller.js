myModule.controller('indexController', function($location, $window, $document){
    // init();
    this.focus = true;
    var _this = this;    

    var handler = function(e){
        if(e.keyCode === 32) {
          $location.path('/players')
        }      
    };

    this.docu = angular.element(document);
    this.docu.on('keydown', handler);
})