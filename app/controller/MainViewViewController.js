

Ext.define('app04.controller.MainViewViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainview',

    onLoginButtonClick: function(button, e, eOpts) {
        var refs = this.getReferences();

        // Create new login form window
        var login = Ext.create('widget.loginform', {
            loginPanel: refs.loginPanel,
            logoutPanel: refs.logoutPanel
        });

        // Show window
        login.show();
    },

    onRegisterButtonClick: function(button, e, eOpts) {
        var refs = this.getReferences();

        // Create new login form window
        var register = Ext.create('widget.registerform', {
            loginPanel: refs.loginPanel,
            lougoutPanel: refs.logoutPanel
        });

        // Show window
        register.show();
    },

    onLogoutButtonClick: function(button, e, eOpts) {
        var refs = this.getReferences();
        refs.loginPanel.show();
        refs.logoutPanel.hide();
        Ext.Msg.alert('Estado', 'Usted ha salido del sistema');
    }

});