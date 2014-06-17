function formatstate(val, row) {
    if (val == 0) {
        return '已提交';
    } else if (val == 1) {
        return '已处理';
    }
}
function formatdatatime(val, row) {
    var returnvalue = new Date(val).toLocaleString();
    return returnvalue;
}
$(function () {
    var dlg;
    var dg;
    var initparent = function () {
        dg = $('#udl').datagrid();

        dg.datagrid('enableFilter', [
            {
                field: 'F_State', type: 'combobox',
                options: {
                    panelHeight: 'auto',
                    data: [{ value: '', text: '全部' }, { value: '0', text: '已提交' }, { value: '1', text: '已处理' }],
                    onChange: function (value) {
                        if (value == '') {
                            dg.datagrid('removeFilterRule', 'F_State');
                        } else {
                            dg.datagrid('addFilterRule', {
                                field: 'F_State',
                                op: 'equal',
                                value: value
                            });
                        }
                        dg.datagrid('doFilter');
                    }
                }
            },
            {
                field: "F_CreateDate", type: "datebox",
                options: {
                    panelHeight: 'auto',
                    data: "",
                    onChange: function (value) {
                        if (value == '') {
                            dg.datagrid('removeFilterRule', 'F_CreateDate');
                        } else {
                            dg.datagrid('addFilterRule', {
                                field: 'F_CreateDate',
                                op: 'greater',
                                value: value
                            });
                        }
                        dg.datagrid('doFilter');
                    }
                }
            },
        ]);
    }
    initparent();
    var GetSelectRows = function () {
        var rows = $('#udl').datagrid('getSelections');
        return rows;
    }

});