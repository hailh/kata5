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

function playOneStep(t, x, y){
    Utils.timeSchedule += 500;
    t.chain([
        { waitFor : Utils.timeSchedule },
        { action : 'click', target: Ext.getCmp(x + "_" + y) }
    ]);
}

function clickRestartButton(t){
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

function hasStatusXPlayedOPlaying(t){
    Utils.timeSchedule += 500;
    t.chain([
        { waitFor : Utils.timeSchedule },
        function(next) {
            t.is(Ext.getCmp('txtStatus').text, 'X played, O playing ...', 'X played, O playing ... after first step');
            next();
        }
    ]);
}

function hasStatusOPlayedXPlaying(t){
    Utils.timeSchedule += 500;
    t.chain([
        { waitFor : Utils.timeSchedule },
        function(next) {
            t.is(Ext.getCmp('txtStatus').text, 'O played, X playing ...', 'O played, X playing ... after second steps');
            next();
        }
    ]);
}

function hasStatusPlayerXWin(t){
    Utils.timeSchedule += 500;
    t.chain([
        { waitFor : Utils.timeSchedule },
        function(next) {
            t.is(Ext.getCmp('txtStatus').text, 'Player X win !', 'Play some steps and player X win');
            next();
        }
    ]);
}

function hasStatusPlayerOWin(t){
    Utils.timeSchedule += 500;
    t.chain([
        { waitFor : Utils.timeSchedule },
        function(next) {
            t.is(Ext.getCmp('txtStatus').text, 'Player O win !', 'Play some steps and player O win');
            next();
        }
    ]);
}

