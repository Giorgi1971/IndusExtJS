Ext.define('indusvideo.store.ExtraApi', {
    extend:  'Ext.data.Store',
    // model: 'indusvideo.model.User',
    alias: 'store.extraApi',
    pageSize: 3,
    proxy:
    {
        type: 'ajax',
        url: 'https://jsonplaceholder.typicode.com/users'
    },
    autoLoad:true
});