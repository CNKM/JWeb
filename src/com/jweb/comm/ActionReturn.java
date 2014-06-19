package com.jweb.comm;

/**
 * Created by XDAW on 2014-06-19.
 */
public class ActionReturn {

    public Integer getActionReuslt() {
        return ActionReuslt;
    }

    public void setActionReuslt(Integer actionReuslt) {
        ActionReuslt = actionReuslt;
    }

    Integer ActionReuslt;


    public String getActionMsg() {
        return ActionMsg;
    }

    public void setActionMsg(String actionMsg) {
        ActionMsg = actionMsg;
    }

    String ActionMsg;

    public ActionReturn(Integer actionReuslt, String actionMsg) {
        ActionReuslt = actionReuslt;
        ActionMsg = actionMsg;
    }

    @Override
    public String toString() {
        return CommHelper.ToJsonString(this);
    }
}
