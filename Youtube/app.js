/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'indusvideo.Application',

    name: 'indusvideo',

    requires: [
        // This will automatically load all classes in the indusvideo namespace
        // so that application classes do not need to require each other.
        'indusvideo.*'
    ],
    // launch: function(){
    //     viewport = Ext.getCmp('viewport');
    //     target = viewport.down('#viewport-target');
    //     view = Ext.create('indusvideo.view.Extra');
    //     target.add(view);
    // },

    // The name of the initial view to create.
    mainView: 'indusvideo.view.Extra',
    // mainView: 'indusvideo.view.Search',
    // autoCreateViewport: true
});
