/**
 * Created with IntelliJ IDEA.
 * User: hailh
 * Date: 8/14/13
 * Time: 9:00 AM
 * To change this template use File | Settings | File Templates.
 */

function joinGame(t){
    t.diag('Open new game and stop game');
    var form = Ext.create('AM.view.GameScreen', {
        renderTo : Ext.getBody(),
        x: 0,
        y: 0
    });
    form.show();
    t.pass("Game started !");
}

function playX(t){
    t.chain([
        { waitFor : 1000 },
        { action : 'click', target: Ext.getCmp("0_1") }
    ]);
}

function playO(t){
    t.chain([
        { waitFor : 1700 },
        { action : 'click', target: Ext.getCmp("0_2") }
    ]);
}

function clickStopButton(t){
    t.chain([
        { waitFor : 3000 },
        { action : 'click', target: Ext.getCmp("btnControl") }
    ]);
}
