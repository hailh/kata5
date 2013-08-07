var stop = sinon.stub(Ext.data.JsonP, 'request', function (options) {
    options.callback(true,
        {
            results : 'Game stopped !'
        }
    );

    return {
        scope    : options.scope,
        success  : options.success,
        failure  : options.failure,
        callback : options.callback
    };
});