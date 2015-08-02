/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({    
    
    extend: 'app04.Application',

    requires: [
        'Ext.window.MessageBox',
        'Ext.window.Window'
    ],
    views: [
        'MainView',
        'LoginForm',
        'RegisterForm'
    ],

    name: 'app04',

    launch: function() {
        Ext.create('app04.view.MainView');
    }
});