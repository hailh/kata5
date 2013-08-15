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
                            } else {
                                Ext.getCmp('txtStatus').setText("X played, O playing ...");
                            }
                            ++Utils.count;
                        }
                    } else {
                        if(Ext.getCmp(y + "_" + x).src == "") {
                            Ext.getCmp(y + "_" + x).setSrc("images/o.png");
                            Ext.getCmp('txtStatus').setText("O played, X playing ...");
                            ++Utils.count;
                        }
                    }
                },
                btnControlClick: function(){
                    Ext.getCmp('txtStatus').setText("Game stopped !");
                    Ext.getCmp('btnControl').setText("Restart");
                    Ext.getCmp('mainScreenId').setDisabled(true);
                },
                btnHistoryClick: function(){

                }
            }
        });
    }
});
