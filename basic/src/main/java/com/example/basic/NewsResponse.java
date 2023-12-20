package com.example.basic;

import java.util.List;

public class NewsResponse {

    private List<NewsItem> items;

    public List<NewsItem> getItems() {
        return items;
    }

    public void setItems(List<NewsItem> items) {
        this.items = items;
    }
}
