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
            'mocks/stop_request.js'
        ]
    }]
}]);