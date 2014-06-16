jQuery.Hashtable = function() {
    this.items = new Array();
    this.itemsCount = 0;
    this.add = function(key, value) {
        if (!this.containsKey(key)) {
            this.items[key] = value;
            this.itemsCount++;
        }
        else
            throw "key '"+key+"' allready exists."
    }
    //覆盖添加(存在-替换值，不存在插入)
    this.overAdd = function (key, value) {
        if (!this.containsKey(key)) {
            this.items[key] = value;
            this.itemsCount++;
        }
        else {
            this.items[key] = value;
        }
    }
    this.get = function(key) {
        if (this.containsKey(key))
            return this.items[key];
        else
            return null;
    }
    this.remove = function(key) {
        if (this.containsKey(key)) {
            delete this.items[key];
            this.itemsCount--;
        }
        else
            throw "key '"+key+"' does not exists."
    }
    //安全移除(存在-移除，不存在则不移除)
    this.selfremove = function (key) {
        if (this.containsKey(key)) {
            delete this.items[key];
            this.itemsCount--;
        }
        else
        {

        }
    }
    this.containsKey = function(key) {
        return typeof (this.items[key]) != "undefined";
    }
    this.containsValue = function containsValue(value) {
        for (var item in this.items) {
            if (this.items[item] == value)
                return true;
        }
        return false;
    }
    this.contains = function(keyOrValue) {
        return this.containsKey(keyOrValue) || this.containsValue(keyOrValue);
    }
    this.clear = function() {
        this.items = new Array();
        itemsCount = 0;
    }
    this.size = function() {
        return this.itemsCount;
    }
    this.isEmpty = function() {
        return this.size() == 0;
    }
};

Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
    (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
        RegExp.$1.length == 1 ? o[k] :
        ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}