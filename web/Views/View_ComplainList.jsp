<%--
  Created by IntelliJ IDEA.
  User: XDAW
  Date: 2014-06-16
  Time: 17:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <jsp:include page="CommHeader.jsp"/>
    <%--JS CLIB--%>

    <script type="text/javascript" src="../JavaScripts/ViewJS/JS_View_ComplainList.js"></script>
    <%--CSS CLIB--%>
</head>
<body>
<table class="easyui-datagrid" title="投诉列表" style="width: 966px; height: 560px" id="udl"
       data-options="rownumbers:true,singleSelect:false,collapsible:false,pagination:true,idField:'F_SN',pageSize:20,pageList:[10,20,50,100,200],url:'/servlet_dao_complainlist',remoteFilter:true,toolbar:'#toolbar'">
    <thead>
    <tr>
        <th data-options="field:'F_BLLNO',width:80,align:'center'">编号</th>
        <th data-options="field:'F_State',width:60,align:'center'">处理状态</th>
        <th data-options="field:'F_UserName',width:120,align:'center'">联系(单位/人员)</th>
        <th data-options="field:'F_Tel',width:160,align:'center'">联系电话</th>
        <th data-options="field:'F_Description',width:420,align:'center'">投诉内容</th>
        <th data-options="field:'F_CreateDate',width:86,align:'center'">投诉时间</th>
    </tr>
    </thead>
</table>
</body>
</html>
