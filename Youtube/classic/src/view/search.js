Ext.define('indusvideo.view.Search', {
    extend: 'Ext.form.Panel',
    title: 'YouTube tutorial',
    defaultType: 'textfield',
    width:500,
    height:700,
    items:[
        {fieldLabel: 'First Name', name: 'firstName'},
        {fieldLabel: 'Last Name', name: 'lastName'},
        {fieldLabel: 'Email', name: 'email'},
        {fieldLabel: 'DOB', name: 'dob', xtype: 'datefield'},
    ],
    buttons:[
        {text:'Submit', handler: function(btn){
             var data = this.up('form'); 
             console.warn("Print the data form", data.getForm().getValues());
        }}
    ]
})