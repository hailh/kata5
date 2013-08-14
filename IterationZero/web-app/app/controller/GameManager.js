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
        this.control({
            'gameScreen':{
                btnClick: function(y, x){
                    if(Utils.count % 2 == 0){
                        if(Ext.getCmp(y + "_" + x).src == "") {
                            Ext.getCmp(y + "_" + x).setSrc("images/x.png");
                            if(Utils.checkFinishGame(Utils.board, x, y, 1)){
                                Ext.getCmp('txtStatus').setText("Player X win !");
                                Ext.getCmp('btnControl').setText("Restart");
                                Ext.getCmp('mainScreenId').setDisabled(true);
                                Utils.gameStatus = 1;
                            } else {
                                Ext.getCmp('txtStatus').setText("X played, O playing ...");
                            }
                            ++Utils.count;
                        }
                    } else {
                        if(Ext.getCmp(y + "_" + x).src == "") {
                            Ext.getCmp(y + "_" + x).setSrc("images/o.png");
                            if(Utils.checkFinishGame(Utils.board, x, y, 2)){
                                Ext.getCmp('txtStatus').setText("Player O win !");
                                Ext.getCmp('btnControl').setText("Restart");
                                Ext.getCmp('mainScreenId').setDisabled(true);
                                Utils.gameStatus = 1;
                            } else {
                                Ext.getCmp('txtStatus').setText("O played, X playing ...");
                            }
                            ++Utils.count;
                        }
                    }
                },
                btnControlClick: function(){
                    if (Utils.gameStatus == 0){
                        Ext.data.JsonP.request({
                            scope:this,
                            url: '/tictactoe/stop',
                            callback: function (status, results) {
                                Ext.getCmp('txtStatus').setText(results.results);
                                Ext.getCmp('btnControl').setText("Start");
                                Ext.getCmp('mainScreenId').setDisabled(true);
                            }
                        });
                        Utils.gameStatus = 1;
                    }
                }
            }
        });
    }
});
