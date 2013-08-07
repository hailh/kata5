Ext.application({
    name: 'AM',
    appFolder: 'app',
    launch: function () {
        Ext.get('loading').remove();
        Ext.get('loading-mask').fadeOut({ remove: true });
    }
});

