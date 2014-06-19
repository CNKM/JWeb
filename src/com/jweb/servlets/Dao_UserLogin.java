package com.jweb.servlets;

import com.jweb.comm.ActionReturn;
import com.jweb.comm.CommHelper;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by XDAW on 2014-06-17.
 */
public class Dao_UserLogin extends Dao_ServletBase {

    private void ToFail(HttpServletResponse res) throws IOException {
        CommHelper.ToResponseStr(res,new ActionReturn(0,"登录失败").toString());
    }
    private void ToSuccess(HttpServletResponse res) throws IOException {
        CommHelper.ToResponseStr(res,new ActionReturn(0,"登陆成功").toString());
    }
    @Override
    public void doAction(HttpServletRequest req, HttpServletResponse res) throws IOException {
        //super.doAction(req, res);
        String Uname = CommHelper.GetRequestParmeValue(req,"UName");
        String Upwd =CommHelper.GetRequestParmeValue(req,"UPwd");
        if(CommHelper.IsNullorEmpty(Uname)) {
          ToFail(res);
          return;
        }
        if(CommHelper.IsNullorEmpty(Upwd)) {
            ToFail(res);
            return;
        }

        if(Uname.equals("admin")&&(Upwd.equals("admin")))
        {
            CommHelper.SetSessionValue(req,"IsLogined",true);
            ToSuccess(res);
        }else
        {
            ToFail(res);
        }


    }


}
