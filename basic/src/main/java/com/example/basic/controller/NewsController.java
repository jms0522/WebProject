package com.example.basic.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class NewsController {

    @GetMapping("/news")
    public ResponseEntity<Object> getNews() {
        log.info("NewsController / getNews / Start! ");
        String apiUrl = "https://openapi.naver.com/v1/search/news?query=사고";

        try {
            RestTemplate restTemplate = new RestTemplate();
            Object result = restTemplate.getForObject(apiUrl, Object.class);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            log.error("Error in getNews", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Internal Server Error: " + e.getMessage());
        }
    }
}