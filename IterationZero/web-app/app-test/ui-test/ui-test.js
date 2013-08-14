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
            '../../js/sinon-1.5.2.js',
            'mocks/stop_request.js',
            'game_action.js',
            'unit_test.js'
        ]
    }, {
        title : 'Join game, play some steps, stop without winner',
        url : 'specs/02_join_play_stop_and_nobody_win.js',
        preload : [
            '../../js/sinon-1.5.2.js',
            'mocks/stop_request.js',
            'game_action.js',
            'unit_test.js'
        ]
    }]
}]);