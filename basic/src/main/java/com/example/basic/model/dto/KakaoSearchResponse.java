package com.example.basic.model.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;


public class KakaoSearchResponse {
    @JsonProperty("documents")
    private List<NewsDocument> documents;


    public static class NewsDocument {
        private String title;
        private String contents;
        private String url;

    }
    public List<NewsDocument> getDocuments() {
        return documents;
    }

}
