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
    <jsp:include page="Comm/CommHeader.jsp"/>
    <%--JS CLIB--%>

    <script type="text/javascript" src="../JavaScripts/ViewJS/JS_View_ComplainList.js"></script>
    <%--CSS CLIB--%>
</head>
<body>
<table class="easyui-datagrid" title="投诉列表" style="width: 966px; height: 500px" id="udl"
       data-options="rownumbers:true,singleSelect:false,collapsible:false,pagination:true,idField:'F_SN',pageSize:20,pageList:[10,20,50,100,200],url:'/Dao_ComplainList',remoteFilter:true">
    <thead>
    <tr>
        <th data-options="field:'ck',checkbox:true"></th>
        <th data-options="field:'F_BLLNO',width:80,align:'center'" style="width: 50px">编号</th>
        <th data-options="field:'F_TargetName',width:145,align:'center'" style="width: 150px">投诉对象</th>
        <th data-options="field:'F_TargetTel',width:120,align:'center'" style="width: 150px">联系方式</th>
        <th data-options="field:'F_TContent',width:200,align:'center'" style="width: 250px">投诉内容</th>
        <th data-options="field:'F_State',width:60,align:'center',formatter:formatstate" style="width: 85px" >处理状态</th>
        <th data-options="field:'F_Reply',width:200,align:'center'" style="width: 250px">回复内容</th>
        <th data-options="field:'F_CreateDate',width:100,align:'center',formatter:formatdatatime" style="width: 263px">投诉时间</th>
    </tr>
    </thead>
</table>
</body>
</html>
