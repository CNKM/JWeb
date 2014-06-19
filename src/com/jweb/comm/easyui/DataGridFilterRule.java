package com.jweb.comm.easyui;

/**
 * Created by XDAW on 2014-06-17.
 */
public class DataGridFilterRule {

    public Object getValue() {
        return value;
    }

    public void setValue(Object value) {
        this.value = value;
    }

    Object value;

    public DataGridFilterOperateType getOp() {
        return op;
    }

    public void setOp(DataGridFilterOperateType op) {
        this.op = op;
    }

    DataGridFilterOperateType op;

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }
    String field;

}
