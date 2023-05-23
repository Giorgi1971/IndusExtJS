Ext.define('indusvideo.view.Viewport', {
    extend: 'Ext.container.Viewport',
    id:'viewport',
    items:[
        {  region:'north', html: '<h1>Heder Part</h1>' },
        {  region:'canter', xtype: 'tabpanel', activeTab: 0,  itemId: 'viewport-target', },
        {  region:'south', html: '<h1>Footer Part</h1>' },
    ]
})