Ext.define('AM.controller.GameManager', {
    extend: 'Ext.app.Controller',
    models: ['History'],
    stores: ['History'],
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
                                Utils.gameStatus = 2;
                            } else {
                                if(Utils.gameStatus == 2){
                                    Ext.getCmp('txtStatus').setText("Game draw !");
                                    Ext.getCmp('btnControl').setText("Restart");
                                    Ext.getCmp('mainScreenId').setDisabled(true);
                                } else {
                                    Ext.getCmp('txtStatus').setText("X played, O playing ...");
                                }
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
                                Utils.gameStatus = 2;
                            } else {
                                if(Utils.gameStatus == 2){
                                    Ext.getCmp('txtStatus').setText("Game draw !");
                                    Ext.getCmp('btnControl').setText("Restart");
                                    Ext.getCmp('mainScreenId').setDisabled(true);
                                } else {
                                    Ext.getCmp('txtStatus').setText("O played, X playing ...");
                                }
                            }
                            ++Utils.count;
                        }
                    }
                },
                btnControlClick: function(){
                    if (Utils.gameStatus == 0){
                        Ext.getCmp('txtStatus').setText("Game stopped !");
                        Ext.getCmp('btnControl').setText("Start");
                        Ext.getCmp('mainScreenId').setDisabled(true);
                        Utils.gameStatus = 1;
                    } else {
                        Ext.getCmp('txtStatus').setText("Game started !");
                        Ext.getCmp('btnControl').setText("Stop");
                        Ext.getCmp('mainScreenId').setDisabled(false);
                        Utils.board = [[0, 0, 0], [0, 0, 0],[0, 0, 0]];
                        for(var i = 0; i < 3; i ++){
                            for(var j = 0; j < 3; j++){
                                Ext.getCmp(i + "_" + j).setSrc("");
                            }
                        }
                        Utils.gameStatus = 0;
                        Utils.count = 0;
                    }
                },
                btnHistoryClick: function(){
                    Ext.getCmp('gridHistory').getStore().load();
                }
            }
        });
    }
});
