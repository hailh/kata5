Ext.define('AM.store.History', {
    extend: 'Ext.data.Store',
    model: 'AM.model.History',
    proxy : {
        type : 'ajax',
        url  : '/app/data/url'
    }
});
