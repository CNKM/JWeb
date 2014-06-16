package com.jweb.servlets;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by XDAW on 2014-06-16.
 */
public class servlet_dao_complainlist extends HttpServlet {

    private void doAction(HttpServletRequest req, HttpServletResponse res) throws IOException {
        String T =new String("123");

    }

    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        doAction(req,res);
    }

    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        doAction(req,res);
    }
}
