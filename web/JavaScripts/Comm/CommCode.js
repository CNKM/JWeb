/// <reference path="EasyUI/jquery.min.js" />

var CallFunction = function (url, parm, successcallback, errorcallback) {
    $.ajax({
        type: "POST",
        url: url,
        data: parm,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            successcallback(data);
        },
        error: function (err) {
            errorcallback(err);
        }
    });
}
//通用函数封装一般不直接调用
var showMessage = function (msgdiv, msgfbody, title, contend, msgtype, closedfocuecontrol, coloseevent) {
    var vw = contend.length + 300;
    var vh = contend.length + 100;
    var ch = contend.length + 20;
    msgfbody.height(ch);
    if (msgtype == "Error") {
        msgdiv.window({
            iconCls: "icon-error", title: title, width: vw, height: vh, resizable: true
            , onClose: function (e) {
                if (closedfocuecontrol != null) {
                    closedfocuecontrol.focus();
                }
                if (coloseevent != null) {
                    coloseevent();
                }
            }, onOpen: function (e) {

                msgfbody.focus();
            }
        });
    } else {
        msgdiv.window({
            iconCls: "icon-info", title: title, width: vw, height: vh, resizable: true
            , onClose: function (e) {
                if (closedfocuecontrol != null) {
                    closedfocuecontrol.focus();
                }
                if (coloseevent != null) {
                    coloseevent();
                }
            }, onOpen: function (e) {

                msgfbody.focus();
            }
        });
    }
    msgfbody.html(contend);
    msgdiv.window("open");
    msgdiv.window('center');
}


//首页页面调用警告提示
//contend 内容
//closedfocusControl 关闭消息框后聚焦控件 如不需要传入null
//coloseevent 关闭后的回调
var MsgAlert = function (contend, closedfocusControl, coloseevent) {
    var ss = $("#w");
    var sc = $("#wcontend");
    showMessage(ss, sc, "错误", contend, "Error", closedfocusControl, coloseevent)
}

var getAjaxError = function (e) {
    var errorobject = JSON.parse(e.responseText);
    var errorString = errorobject.ExceptionType + "</br>" + errorobject.Message + "</br>";// + errorobject.StackTrace;
    return errorString;
}

// -2 文本为空 -1 文本包含空格，0 不匹配表达式，1 匹配
var TestRegExpAndBlank = function (re, s) {
    if (!TestStringIsNull(s)) {
        if (TestIsBlankIn(s)) {
            return -1;
        }
        else {
            if (TestRegExp(re, s)) {
                return 1;
            }
            else {
                return 0
            }
        }
    } else {
        return -2;
    }
}

var TestStringIsNull = function (s) {
    if (s == null) {
        return false;
    }
    else {
        if (s.length != 0) {
            return false;
        }
        else {
            return true;
        }
    }
}
var TestIsBlankIn = function (s) {
    if (s.indexOf(" ") == -1) {
        return false;
    }
    else {
        return true;
    }
}

var FormValueToJsonString = function (form,addvaluekeys) {
    var tt = form.serializeArray();
    var obj = {};
    for (var a = 0; a < tt.length; a++) {
        obj[tt[a].name] = tt[a].value;
    }
    if (addvaluekeys != null) {
        for (var i = 0; i < addvaluekeys.length; i++) {
            obj[addvaluekeys[i].name] = addvaluekeys[i].value;
        }
    }
    return JSON.stringify(obj);
}



