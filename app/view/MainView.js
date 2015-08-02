

Ext.define('app04.view.MainView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainview',

    requires: [
        'app04.model.MainViewViewModel',
        'app04.controller.MainViewViewController',
        'Ext.panel.Panel',
        'Ext.button.Button'
    ],

    controller: 'mainview',
    viewModel: {
        type: 'mainview'
    },
    layout: 'border',

    items: [
        {
            xtype: 'panel',
            region: 'north',
            height: 100,
            title: 'Sistema',
            dockedItems: [
                {
                    xtype: 'panel',
                    dock: 'right',
                    reference: 'loginPanel',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            flex: 8
                        },
                        {
                            xtype: 'button',
                            margin: 6,
                            flex: 1,
                            text: 'Ingresar',
                            height: 50,
                            listeners: {
                                click: 'onLoginButtonClick'
                            }
                        },
                        {
                            xtype: 'button',
                            margin: 5,
                            flex: 1,
                            height: 50  ,
                            text: 'Registrar',
                            listeners: {
                                click: 'onRegisterButtonClick'
                            }
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    dock: 'right',
                    reference: 'logoutPanel',
                    hidden: true,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            flex: 8
                        },
                        {
                            xtype: 'button',
                            margin: 6,
                            flex: 1,
                            text: 'Logout',
                            listeners: {
                                click: 'onLogoutButtonClick'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'center',
            itemId: 'contentPanel',
            layout: 'border',
            title: 'Ingreso'
        }
    ]

});