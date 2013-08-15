Ext.application({
    name: 'AM',
    appFolder: 'app',
    controllers: [
        'GameManager'
    ],
    launch: function () {
        Ext.get('loading').remove();
        Ext.get('loading-mask').fadeOut({ remove: true });
    }
});

