package com.jweb.servlets;

import com.jweb.comm.easyui.DataGridPostInfo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by XDAW on 2014-06-16.
 */
public class dao_complainlist extends daoServletBase {
    @Override
    public void doAction(HttpServletRequest req, HttpServletResponse res) throws IOException {
        DataGridPostInfo dataGridPostInfo;
        dataGridPostInfo = new DataGridPostInfo(req);
        //super.doAction(req, res);
    }
}
