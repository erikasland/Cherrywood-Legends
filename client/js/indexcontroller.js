myModule.controller('indexController', function($location, $window, $document){
    // init();
    var _this = this;    

    var handler = function(e){
        if(e.keyCode === 32) {
          $location.path('/players')
        }      
    };

    this.docu = angular.element(document);
    this.docu.on('keydown', handler);
    $document.on('keydown', handler);
})