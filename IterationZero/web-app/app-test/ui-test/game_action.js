/**
 * Created with IntelliJ IDEA.
 * User: hailh
 * Date: 8/14/13
 * Time: 9:00 AM
 * To change this template use File | Settings | File Templates.
 */

function joinGame(t, firstState){
    t.diag('Open new game and stop game');
    var form = Ext.create('AM.view.GameScreen', {
        renderTo : Ext.getBody(),
        x: 0,
        y: 0
    });
    form.show();
    t.pass("Game started !");
    Utils.count = firstState;
}

function playOneStep(t, x, y){
    Utils.timeSchedule += 500;
    t.chain([
        { waitFor : Utils.timeSchedule },
        { action : 'click', target: Ext.getCmp(x + "_" + y) }
    ]);
}

function clickStopButton(t){
    Utils.timeSchedule += 500;
    t.chain([
        { waitFor : Utils.timeSchedule },
        { action : 'click', target: Ext.getCmp("btnControl") }
    ]);
}

function clickHistoryButton(t){
    Utils.timeSchedule += 500;
    t.chain([
        { waitFor : Utils.timeSchedule },
        { action : 'click', target: Ext.getCmp("btnHistory") }
    ]);
}
