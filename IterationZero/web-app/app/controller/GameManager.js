/**
 * Created with IntelliJ IDEA.
 * User: hailh
 * Date: 1/11/13
 * Time: 1:35 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('AM.controller.GameManager', {
    extend: 'Ext.app.Controller',
    views: ['GameScreen'],
    refs : [{
        ref:'GameScreen',
        selector:'gameScreen'
    }],
    init: function () {
        var count = 0;
        var status = 0;
        this.control({
            'gameScreen':{
                btnClick: function(y, x){

                },
                btnControlClick: function(){

                }
            }
        });
    }
});
