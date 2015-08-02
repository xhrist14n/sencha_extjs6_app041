
Ext.define('app04.Application', {
    extend: 'Ext.app.Application',
    
    name: 'app04',

    requires: [
        'app04.view.LoginForm',
        'app04.view.MainView',
        'app04.view.RegisterForm'
    ],

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});