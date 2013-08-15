Ext.define('AM.controller.GameManager', {
    extend: 'Ext.app.Controller',
    views: ['GameScreen'],
    refs : [{
        ref:'GameScreen',
        selector:'gameScreen'
    }],
    init: function () {
        this.control({
            'gameScreen':{
                btnClick: function(y, x){

                },
                btnControlClick: function(){

                },
                btnHistoryClick: function(){

                }
            }
        });
    }
});
