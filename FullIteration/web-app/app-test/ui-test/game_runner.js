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

function clickHistoryButton(t){
    Utils.timeSchedule += 500;
    t.chain([
        { waitFor : Utils.timeSchedule },
        { action : 'click', target: Ext.getCmp("btnHistory") }
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

function hasStatusDraw(t){
    Utils.timeSchedule += 500;
    t.chain([
        { waitFor : Utils.timeSchedule },
        function(next) {
            t.is(Ext.getCmp('txtStatus').text, 'Game draw !', 'Play some steps and draw');
            next();
        }
    ]);
}

function hasShowedGameHistory(t){
    Utils.timeSchedule += 1500;
    t.chain([
        { waitFor : Utils.timeSchedule },
        function(next) {
            t.isNot(Ext.getCmp('gridHistory').getStore().data.items.length, 0, 'Show game history in grid view');
            t.waitForRowsVisible(Ext.getCmp('gridHistory'), function() {
                t.ok(Ext.getCmp('gridHistory').getView().getNode(0), "One row was found in the grid");
                t.matchGridCellContent(
                    Ext.getCmp('gridHistory'),                              // Grid to test
                    2,                                                      // Row index
                    2,                                                      // Column index
                    '2 4 8 2 7 1 6',                                        // Text to match
                    'Game details in the third row correct information'     // Assertion message
                );
            });
        }
    ]);
}

