<%--
  Created by IntelliJ IDEA.
  User: XDAW
  Date: 2014-06-17
  Time: 9:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div style="display: none" id="Dialogs">
    <%--通用对话框--%>
    <div id="w" class="easyui-window" title="Basic Window"
         data-options="modal:true,closed:true,minimizable:false,collapsible:false,maximizable:false,iconCls:'icon-ok'"
         style="width: 300px; height: 130px; padding: 10px; filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=demo.png); overflow: hidden">
        <div id="wcontend" tabindex="0" style="outline: 0px solid; width: 100%">
        </div>
        <div data-options="border:true" style="text-align: center; padding: 5px 0 0; width: 100%;">
            <a id="btndialogok" class="easyui-linkbutton" data-options="iconCls:'icon-ok'"
               onclick="$('#w').window('close')">确定
            </a>
        </div>
    </div>
    <%--服务投诉对话框--%>
    <div id="dlg_Complain" class="easyui-dialog" style="width: 380px; height: 250px;"
         closed="true" buttons="#dlg_Complainbuttons" modal="true">
        <form id="fmComplain" name="fmComplain">
            <table style="text-align: center; margin-left: auto; margin-right: auto; margin-top: 2px; width: 300px">
                <tr>
                    <td style="width: 60px">联系人员:</td>
                    <td style="text-align: left">
                        <input name="F_TargetName" id="F_TargetName" class="easyui-validatebox" novalidate="true"
                               required="true"/>
                    </td>
                    <td>*</td>
                </tr>
                <tr>
                    <td>联系电话:</td>
                    <td style="text-align: left">
                        <input name="F_TargetTel" id="F_TargetTel" class="easyui-validatebox" novalidate="true"
                               required="true"/>
                    </td>
                    <td>*</td>
                </tr>
                <tr>
                    <td>投诉内容:</td>
                    <td style="text-align: left" colspan="2">
                        <textarea name="F_TContent" id="F_TContent" style="width: 210px" rows="5"
                                  class="easyui-validatebox"
                                  novalidate="true" required="true"></textarea></td>
                    <td>*</td>
                </tr>
            </table>
        </form>
    </div>
    <div id="dlg_Complainbuttons" style="text-align: center">
        <a href="javascript:void(0)" id="btnhandup" class="easyui-linkbutton" iconcls="icon-ok">提交</a>
        <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-cancel"
           onclick="javascript:$('#dlg_Complain').dialog('close')">取消</a>
    </div>
</div>



