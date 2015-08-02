
Ext.define('app04.view.RegisterForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.registerform',

    requires: [
        'app04.model.RegisterFormViewModel',
        'app04.controller.RegisterFormViewController',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    controller: 'registerform',
    viewModel: {
        type: 'registerform'
    },
    height: 270,
    itemId: 'registerForm',
    width: 400,
    title: 'Registro',
    modal: true,

    items: [
        {
            xtype: 'form',
            itemId: 'form',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    margin: '0 0 10 0',
                    fieldLabel: 'Nombre',
                    labelAlign: 'right',
                    msgTarget: 'title',
                    name: 'name',
                    allowBlank: false,
                    blankText: 'Ingresar su nombre'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    margin: '0 0 10 0',
                    fieldLabel: 'Email',
                    labelAlign: 'right',
                    msgTarget: 'title',
                    name: 'email',
                    allowBlank: false,
                    blankText: 'Ingresa tu email.'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    margin: '0 0 10 0',
                    fieldLabel: 'Usuario',
                    labelAlign: 'right',
                    msgTarget: 'title',
                    name: 'username',
                    allowBlank: false,
                    blankText: 'Escribir password'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    margin: '0 0 10 0',
                    fieldLabel: 'Password',
                    labelAlign: 'right',
                    msgTarget: 'title',
                    name: 'password',
                    allowBlank: false,
                    blankText: 'Escribir password'
                },
                {
                    xtype: 'button',
                    formBind: true,
                    itemId: 'registerButton',
                    scale: 'medium',
                    text: 'Registrar',
                    listeners: {
                        click: 'onRegisterButtonClick'
                    }
                }
            ]
        }
    ]

});