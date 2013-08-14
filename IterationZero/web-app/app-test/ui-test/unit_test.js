/**
 * Created with IntelliJ IDEA.
 * User: hailh
 * Date: 8/14/13
 * Time: 9:07 AM
 * To change this template use File | Settings | File Templates.
 */

function hasStatusXPlayedOPlaying(t){
    t.chain([
        { waitFor : 1500 },
        function(next) {
            t.is(Ext.getCmp('txtStatus').text, 'X played, O playing ...', 'X played, O playing ... after first step');
            next();
        }
    ]);
}

function hasStatusOPlayedXPlaying(t){
    t.chain([
        { waitFor : 2200 },
        function(next) {
            t.is(Ext.getCmp('txtStatus').text, 'O played, X playing ...', 'O played, X playing ... after second steps');
            next();
        }
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
