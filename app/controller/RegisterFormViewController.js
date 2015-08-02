
Ext.define('app04.controller.RegisterFormViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.registerform',

    onRegisterButtonClick: function(button, e, eOpts) {
        var view = this.getView(),
            form = button.up('form'),
            formWindow = button.up('window'),
            values = form.getValues();

        // Success
        var successCallback = function(resp, ops) {

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
            Ext.Msg.alert('Registration Failure', resp);

        };


        // TODO: Register using server-side authentication service
        // Ext.Ajax.request({
        //					url: "/register",
        //		params: values,
        //		success: successCallback,
        //		failure: failureCallback
        // });

        // Just run success for now
        successCallback();
    }

});