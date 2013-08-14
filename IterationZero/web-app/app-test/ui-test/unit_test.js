/**
 * Created with IntelliJ IDEA.
 * User: hailh
 * Date: 8/14/13
 * Time: 9:07 AM
 * To change this template use File | Settings | File Templates.
 */

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
            next();
        }
    ]);
}
