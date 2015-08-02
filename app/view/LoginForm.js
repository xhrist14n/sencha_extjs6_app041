
Ext.define('app04.view.LoginForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.loginform',

    requires: [
        'app04.model.LoginFormViewModel',
        'app04.controller.LoginFormViewController',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.window.Window'
    ],

    controller: 'loginform',
    viewModel: {
        type: 'loginform'
    },
    height: 200,
    shrinkWrap: 3,
    manageHeight: false,
    title: 'Login',
    modal: true,

    items: [
        {
            xtype: 'form',
            bodyPadding: 20,
            items: [
                {
                    xtype: 'textfield',
                    margin: '0 0 20 0',
                    fieldLabel: 'Usuario',
                    labelAlign: 'right',
                    msgTarget: 'title',
                    name: 'identity',
                    allowBlank: false,
                    blankText: 'Ingrese usuario',
                    regexText: 'Ingrese usuario'
                },
                {
                    xtype: 'textfield',
                    margin: '0 0 10 0',
                    fieldLabel: 'Password',
                    labelAlign: 'right',
                    msgTarget: 'title',
                    name: 'password',
                    inputType: 'password',
                    allowBlank: false,
                    blankText: 'Ingrese su password.'
                },
                {
                    xtype: 'button',
                    formBind: true,
                    margin: '0 15 0 0',
                    scale: 'medium',
                    text: 'Ingresar',
                    listeners: {
                        click: 'onLoginButtonClick'
                    }
                }
            ]
        }
    ]

});