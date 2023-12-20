package com.example.basic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.reactive.function.client.WebClient;

import com.example.basic.model.dto.KakaoSearchResponse;

@Controller
public class NewsController {

    private static final String KAKAO_API_URL = "https://dapi.kakao.com/v2/search/web";
    private static final String KAKAO_API_KEY = "20ca49760ce6d19f9af63314727bb194"; 

    @GetMapping("/news")
    public String getNews(Model model) {
        WebClient webClient = WebClient.create();

        // 카카오 웹 검색 API 호출
        KakaoSearchResponse response = webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path(KAKAO_API_URL)
                        .queryParam("query", "교통사고") // 검색어
                        .build())
                .header("Authorization", "KakaoAK " + KAKAO_API_KEY)
                .retrieve()
                .bodyToMono(KakaoSearchResponse.class)
                .block();

        if (response != null) {
            model.addAttribute("documents",response.getDocuments());
        }

        return "news";
    }
}