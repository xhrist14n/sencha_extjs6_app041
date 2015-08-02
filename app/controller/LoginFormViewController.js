

Ext.define('app04.controller.LoginFormViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginform',
    requires: [
        'Ext.window.MessageBox',
        'Ext.window.Window'
    ],

    onLoginButtonClick: function(button, e, eOpts) {
        var view = this.getView(),
            form = button.up('form'),
            formWindow = button.up('window'),
            values = form.getValues();

        // Success
        var successCallback = function(resp, ops) {
//            debugger;
            // Hide login panel
            view.loginPanel.hide();

            // Show logout panel
            view.logoutPanel.show();

            // Close window
            formWindow.destroy();

        };

        // Failure
        var failureCallback = function(resp, ops) {

            // Show login failure error
            Ext.Msg.alert('Login Failure', resp);

        };


        // TODO: Login using server-side authentication service
        // Ext.Ajax.request({
        //		url: "/login",
        //		params: values,
        //		success: successCallback,
        //		failure: failureCallback
        // });

        // Just run success for now
        successCallback();
    }

});