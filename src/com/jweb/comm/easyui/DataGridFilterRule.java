package com.jweb.comm.easyui;

/**
 * Created by XDAW on 2014-06-17.
 */
public class DataGridFilterRule {

    public Object getValue() {
        return Value;
    }

    public void setValue(Object value) {
        Value = value;
    }

    Object Value;

    public OperatType get_OperateType() {
        return _OperateType;
    }

    public void set_OperateType(OperatType _OperateType) {
        this._OperateType = _OperateType;
    }

    OperatType _OperateType;

    public String getField() {
        return Field;
    }

    public void setField(String field) {
        Field = field;
    }
    String Field;

}
