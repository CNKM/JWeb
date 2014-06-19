package com.jweb.comm;

import org.codehaus.jackson.map.DeserializationConfig;
import org.codehaus.jackson.map.ObjectMapper;

import java.io.IOException;

/**
 * Created by XDAW on 2014-06-17.
 */
public class CommHelper {

    public static ObjectMapper JacksonOM;
    public static String ToJsonString(Object ToJsonStringObject)  {
        try {
            return JacksonOM.writeValueAsString(ToJsonStringObject);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "error from object to json  string!";
    }
    static {
        JacksonOM = new ObjectMapper() {};
        JacksonOM.configure(DeserializationConfig.Feature.READ_ENUMS_USING_TO_STRING, true);
    }
}
