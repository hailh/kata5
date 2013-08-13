StartTest(function(t) {
    joinGame(t);
    playX(t);
    hasStatusXPlayedYPlaying(t);
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

function playX(t){
    t.chain([
        { waitFor : 1000 },
        { action : 'click', target: Ext.getCmp("0_1") }
    ]);
}

function hasStatusXPlayedYPlaying(t){
    t.chain([
        { waitFor : 1500 },
        function(next) {
            t.is(Ext.getCmp('txtStatus').text, 'X played, O playing ...', 'X played, O playing ... after first step');
            next();
        }
    ]);
}

function clickStopButton(t){
    t.chain([
        { waitFor : 3000 },
        { action : 'click', target: Ext.getCmp("btnControl") }
    ]);
}

function hasStoppedAfterClickStopButton(t){
    t.chain([
        { waitFor : 4000 },
        function(next) {
            t.is(Ext.getCmp('txtStatus').text, 'Game stopped !', 'Game stooped after click "Stop" button');
            next();
        }
    ]);
}
