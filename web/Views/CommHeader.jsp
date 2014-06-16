<%
  //定义获取根路径
  String RootPath=request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/";
%>
        <%--javaScripts Lib--%>
        <%--Base Jquery--%>
        <script  type="text/javascript" src="<%=RootPath%>JavaScripts/EasyUI/jquery.min.js"></script>
      <script  type="text/javascript" src="<%=RootPath%>JavaScripts/Comm/JqueryExt.js"></script>
      <script  type="text/javascript" src="<%=RootPath%>JavaScripts/Comm/CommCode.js"></script>
      <%--EasyUI--%>
      <script  type="text/javascript" src="<%=RootPath%>JavaScripts/EasyUI/jquery.easyui.min.js"></script>
      <%--CSS Lib--%>
      <%--EasyUI Comm Icon Css--%>
      <link rel="stylesheet" type="text/css" href="<%=RootPath%>JavaScripts/EasyUI/themes/icon.css">
      <%--对于EasyUI瞬时仅能使用下列一个样式表--%>
      <%--对于自定义EasyUI 请使用官方网站提供的Theme Tools 进行处理--%>
      <%--EasyUI Default CSS--%>
      <link rel="stylesheet" type="text/css" href="<%=RootPath%>JavaScripts/EasyUI/themes/default/easyui.css">
      <%--&lt;%&ndash;EasyUI Black CSS&ndash;%&gt;--%>
      <%--<link rel="stylesheet" type="text/css" href="<%=RootPath%>JavaScripts/EasyUI/themes/black/easyui.css">--%>
      <%--&lt;%&ndash;EasyUI bootstrap CSS&ndash;%&gt;--%>
      <%--<link rel="stylesheet" type="text/css" href="<%=RootPath%>JavaScripts/EasyUI/themes/bootstrap/easyui.css">--%>
      <%--&lt;%&ndash;EasyUI gray CSS&ndash;%&gt;--%>
      <%--<link rel="stylesheet" type="text/css" href="<%=RootPath%>JavaScripts/EasyUI/themes/gray/easyui.css">--%>
      <%--EasyUI metro CSS--%>
      <%--<link rel="stylesheet" type="text/css" href="<%=RootPath%>JavaScripts/EasyUI/themes/metro/easyui.css">--%>