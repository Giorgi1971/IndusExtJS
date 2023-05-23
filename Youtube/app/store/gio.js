Ext.define('indusvideo.store.gridGio', {
    extend: 'Ext.data.Store',
    model: 'indusvideo.model.User',
    alias: 'store.gridGio',
    itemId:'gridGio',
    storeId:'gridGio',
    data: {
        item:
        [
            {name: 'xyz', email: 'g@g.ge', phone: '555-55-55-55'},
            {name: 'poxyz', email: 'a@g.ge', phone: '599-55-55-55'},
            {name: 'trxyz', email: 'b@g.ge', phone: '577-55-55-55'},
            {name: 'texyz', email: 'c@g.ge', phone: '514-55-55-55'},
            {name: 'abc', email: 'd@g.ge', phone: '551-55-55-55'},
        ]
    },

    proxy:
    {
        type: 'memory',
        reader:
        {
            type:'json',
            rootProperty:'item',
        }
    }
});