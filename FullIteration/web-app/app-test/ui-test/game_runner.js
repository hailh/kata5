/*Game action*/
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

function clickStopButton(t){
    Utils.timeSchedule += 500;
    t.chain([
        { waitFor : Utils.timeSchedule },
        { action : 'click', target: Ext.getCmp("btnControl") }
    ]);
}

/*Test*/
function hasStoppedAfterClickStopButton(t){
    Utils.timeSchedule += 500;
    t.chain([
        { waitFor : Utils.timeSchedule },
        function(next) {
            t.is(Ext.getCmp('txtStatus').text, 'Game stopped !', 'Game stooped after click "Stop" button');
            next();
        }
    ]);
}

