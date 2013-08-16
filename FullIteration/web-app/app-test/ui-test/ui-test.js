var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
    title     : 'Sencha UI Test Demo - Application Tests',
    hostPageUrl: '../../index.gsp'
});

Harness.start([{
    group: 'Test View',
    items: [{
        title : 'Join game and stop without playing',
        url : 'specs/01_join_and_stop.js',
        preload : [
            'game_runner.js'
        ]
    }, {
        title : 'Join game, play some steps, stop without winner',
        url : 'specs/02_join_play_stop_and_nobody_win.js',
        preload : [
            'game_runner.js'
        ]
    }, {
        title : 'Join game, play, and winner is X',
        url : 'specs/03_join_play_and_winner_is_x.js',
        preload : [
            'game_runner.js'
        ]
    }, {
        title : 'Join game, play, and winner is O',
        url : 'specs/04_join_play_and_winner_is_o.js',
        preload : [
            'game_runner.js'
        ]
    }]
}]);