$(function() {
    //弹出服务投诉内容
    $("#btnComplainDlg").click(function () {
        $("#dlg_Complain").dialog('open').dialog('setTitle', '服务投诉');
        $("#dlg_Complain").dialog('center');
    })

    //服务投诉提交按钮
    $("#btnhandup").click(function () {
        //投诉目标姓名
        $('#F_TargetName').validatebox('enableValidation');
        $('#F_TargetTel').validatebox('enableValidation');
        $('#F_TContent').validatebox('enableValidation');
        var vr = $("#fmComplain").form('validate');
        if (vr == true) {
            var regObject = {
                TValues: ""
            };
            regObject.TValues = FormValueToJsonString($("#fmComplain"));
            CallFunction("/Dao_HandupComplain", JSON.stringify(regObject),
                function (data) {
                    var returnReuslt = JSON.parse(data.d);
                    if (returnReuslt.ActionReuslt == 1) {
                        subMsgInfo("提交投诉内容成功，请等待审批！", null, function () {
                            $("#dlg_Complain").dialog('close');
                        });
                    }
                    else {
                        subMsgInfo("提交投诉内容失败:" + returnReuslt.ErrorMessage, null, function () {
                            $("#dlg_Complain").dialog('close');
                        });
                    }

                },
                function (e) {
                    MsgAlert(getAjaxError(e));
                }
            );
        }
        else {
            MsgInfo("提交数据验证未通过，请检查后重试！");
        }
    })
});
