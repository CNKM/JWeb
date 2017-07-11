package com.jweb.servlets;

import com.jweb.comm.CommHelper;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by XDAW on 2014-06-19.
 */
public class Do_UserCheck extends Do_ServletBase {
    @Override
    public void doAction(HttpServletRequest req, HttpServletResponse res) throws IOException {
        Object Value= CommHelper.GetSessionValue(req,"IsLogined");

    }
}
