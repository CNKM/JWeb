package com.jweb.comm.easyui;

import com.jweb.comm.CommHelper;
import org.codehaus.jackson.type.TypeReference;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;




/**
 * Created by XDAW on 2014-06-17.
 */
public class DataGridPostInfo {


    public DataGridPostInfo(HttpServletRequest req) throws IOException {
        CurrentPage = 0;
        PageSize = 0;
        String Rules="";

        if (req.getParameter("rows") !=null) {

            PageSize = Integer.parseInt(req.getParameter("rows"));
        }
        if (req.getParameter("page") != null) {
            CurrentPage = Integer.parseInt(req.getParameter("page"));
        }

        if (req.getParameter("filterRules") != null) {
            Rules= req.getParameter("filterRules");
            List<DataGridFilterRule> ruleslist= CommHelper.JacksonOM.readValue(Rules,new TypeReference<List<DataGridFilterRule>>(){});
        }
    }

    public Integer getCurrentPage() {
        return CurrentPage;
    }

    public void setCurrentPage(Integer currentPage) {
        CurrentPage = currentPage;
    }

    Integer CurrentPage;

    public Integer getPageSize() {
        return PageSize;
    }

    public void setPageSize(Integer pageSize) {
        PageSize = pageSize;
    }

    Integer PageSize;

    public List<DataGridFilterRule> getFilterRules() {
        return FilterRules;
    }

    public void setFilterRules(List<DataGridFilterRule> filterRules) {
        FilterRules = filterRules;
    }

    List<DataGridFilterRule> FilterRules;
}
