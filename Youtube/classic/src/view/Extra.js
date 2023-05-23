// var user = Ext.create('indusvideo.model.User',{
//     name: 'Conan',
// });
// user.changeName();

Ext.define('indusvideo.view.Extra', {
    extend: 'Ext.grid.Panel',
    xtype:'gioGrid',
    title: 'Grid Video',
    store: {type: 'extraApi'},
    controller: 'extra',
    bbar:{
        xtype: 'pagingtoolbar',
        displayInfo:true
    },
    columns: [
        {
            text:'Name', dataIndex: 'name', flex:1,
            filter:{
                // type:'string'
                type: 'list',
                options:['Leanne Graham', 'Clementina DuBuque', 'Chelsey Dietrich']
            }
        },
        {text:'Email', dataIndex: 'email', flex:1},
        {text:'Phone', dataIndex: 'phone', flex:1},
        {text:'website', dataIndex: 'website', flex:1},
    ],
    plugins:'gridfilters',

    id: 'testGrid',
    selModel:{
        injectCheckbox: 'first',
        checkOnly: false,
        model:'SIMPLE',
        type: 'checkboxmodel'
    },
    buttons:
    [
        {
            text: 'Show Popup', handler: function(){
                pop = Ext.create('indusvideo.view.PopUp');
                pop.show();
                console.warn("abc");
            }
        },        {
            text: 'Select All', handler: function(){
                Ext.getCmp('testGrid').getSelectionModel().selectAll();
            }
        },

        {
            text: 'Deselect All', handler: function(){
                Ext.getCmp('testGrid').getSelectionModel().deselectAll();
            }
        },
        {
            text: 'Get Selection', handler: function(){
                var data = Ext.getCmp('testGrid').getSelectionModel().getSelection();
                console.warn("data", data);
            }
        },
    ]
});
