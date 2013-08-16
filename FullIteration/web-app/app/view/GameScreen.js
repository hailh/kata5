Ext.define('AM.view.GameScreen', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.gameScreen',
    title: 'Tic Tac Toe',
    width: 500,
    height: 320,
    layout: 'hbox',
    items:[{
        xtype: 'container',
        id: 'mainScreenId',
        layout: 'vbox',
        items: [{
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'image',
                id: '0_0',
                width: 100,
                height: 100,
                listeners : {
                    el: {
                        click: function() {
                            Ext.ComponentQuery.query('gameScreen')[0].fireEvent('btnClick', 0, 0);
                        }
                    }
                }
            }, {
                xtype: 'image',
                id: '0_1',
                border: 1,
                width: 100,
                height: 100,
                listeners : {
                    el: {
                        click: function() {
                            Ext.ComponentQuery.query('gameScreen')[0].fireEvent('btnClick', 0, 1);
                        }
                    }
                }
            }, {
                xtype: 'image',
                id: '0_2',
                border: 1,
                width: 100,
                height: 100,
                listeners : {
                    el: {
                        click: function() {
                            Ext.ComponentQuery.query('gameScreen')[0].fireEvent('btnClick', 0, 2);
                        }
                    }
                }
            }]
        }, {
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'image',
                id: '1_0',
                border: 1,
                width: 100,
                height: 100,
                listeners : {
                    el: {
                        click: function() {
                            Ext.ComponentQuery.query('gameScreen')[0].fireEvent('btnClick', 1, 0);
                        }
                    }
                }
            }, {
                xtype: 'image',
                id: '1_1',
                border: 1,
                width: 100,
                height: 100,
                listeners : {
                    el: {
                        click: function() {
                            Ext.ComponentQuery.query('gameScreen')[0].fireEvent('btnClick', 1, 1);
                        }
                    }
                }
            }, {
                xtype: 'image',
                id: '1_2',
                border: 1,
                width: 100,
                height: 100,
                listeners : {
                    el: {
                        click: function() {
                            Ext.ComponentQuery.query('gameScreen')[0].fireEvent('btnClick', 1, 2);
                        }
                    }
                }
            }]
        }, {
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'image',
                id: '2_0',
                border: 1,
                width: 100,
                height: 100,
                listeners : {
                    el: {
                        click: function() {
                            Ext.ComponentQuery.query('gameScreen')[0].fireEvent('btnClick', 2, 0);
                        }
                    }
                }
            }, {
                xtype: 'image',
                id: '2_1',
                border: 1,
                width: 100,
                height: 100,
                listeners : {
                    el: {
                        click: function() {
                            Ext.ComponentQuery.query('gameScreen')[0].fireEvent('btnClick', 2, 1);
                        }
                    }
                }
            }, {
                xtype: 'image',
                id: '2_2',
                border: 1,
                width: 100,
                height: 100,
                listeners : {
                    el: {
                        click: function() {
                            Ext.ComponentQuery.query('gameScreen')[0].fireEvent('btnClick', 2, 2);
                        }
                    }
                }
            }]
        }]
    }, {
        xtype: 'panel',
        width: 200,
        height: 300,
        title: 'Control panel',
        layout: 'vbox',
        items: [{
            xtype: 'label',
            id: 'txtStatus',
            text: 'Game started !',
            margin: '10 0 10 50'
        }, {
            xtype: 'button',
            id: 'btnControl',
            text: 'Stop',
            width: 200,
            handler: function(){
                Ext.ComponentQuery.query('gameScreen')[0].fireEvent('btnControlClick');
            }
        }, {
            xtype: 'button',
            id: 'btnHistory',
            text: 'History',
            width: 200,
            handler: function(){
                Ext.ComponentQuery.query('gameScreen')[0].fireEvent('btnHistoryClick');
            }
        }, {
            xtype: 'grid',
            id: 'gridHistory',
            store: 'History',
            width: 200,
            columns: [
                { text: 'First',  dataIndex: 'First', flex: 1 },
                { text: 'Winner', dataIndex: 'Winner', flex: 1 },
                { text: 'Details', dataIndex: 'Details', flex: 2  }
            ]
        }]
    }]
});
