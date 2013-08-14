/**
 * Created with IntelliJ IDEA.
 * User: Dell 3360
 * Date: 8/14/13
 * Time: 3:33 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('AM.store.History', {
    extend: 'Ext.data.Store',
    model: 'AM.model.History',
    proxy : {
        type : 'ajax',
        url  : '/app/data/url'
    }
});
