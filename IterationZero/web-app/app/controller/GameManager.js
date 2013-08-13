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
                    if(count % 2 == 0){
                        if(Ext.getCmp(y + "_" + x).src == "") {
                            Ext.getCmp(y + "_" + x).setSrc("images/x.png");
                            Ext.getCmp('txtStatus').setText("X played, O playing ...");
                            ++count;
                        }
                    } else {
                        if(Ext.getCmp(y + "_" + x).src == "") {
                            Ext.getCmp(y + "_" + x).setSrc("images/o.png");
                            Ext.getCmp('txtStatus').setText("O played, X playing ...");
                            ++count;
                        }
                    }
                },
                btnControlClick: function(){
                    if (status == 0){
                        Ext.data.JsonP.request({
                            scope:this,
                            url: '/tictactoe/stop',
                            callback: function (status, results) {
                                Ext.getCmp('txtStatus').setText(results.results);
                                Ext.getCmp('btnControl').setText("Start");
                                Ext.getCmp('mainScreenId').setDisabled(true);
                            }
                        });
                        status = 1;
                    }
                }
            }
        });
    }
});
