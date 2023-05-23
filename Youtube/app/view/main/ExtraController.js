Ext.define('indusvideo.view.main.ExtraController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.extra',

    init: function () {
        // console.warn("app")
        this.control({
            '#callController2': {
                click: 'callOnClick'
            }
        })
    },
    callOnClick: function () 
    {
        alert("Hello From Controlller!")
    }
})