StartTest(function(t) {
    joinGame(t);
    clickStopButton(t);
    hasStoppedAfterClickStopButton(t);
});

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

function clickStopButton(t){
    t.chain([
        { waitFor : 1000 },
        { action : 'click', target: Ext.getCmp("btnControl") }
    ]);
}

function hasStoppedAfterClickStopButton(t){
    t.chain([
        { waitFor : 2000 },
        function(next) {
            t.is(Ext.getCmp('txtStatus').text, 'Game stopped !', 'Game stooped after click "Stop" button');
            next();
        }
    ]);
}
