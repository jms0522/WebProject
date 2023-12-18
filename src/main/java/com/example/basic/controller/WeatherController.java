package com.example.basic.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

public class WeatherController {
    @GetMapping("/getWeather")
    public String getWeather(@RequestParam String city, @RequestParam String apiKey) {
        String lang = "kr";
        String api = String.format("http://api.openweathermap.org/data/2.5/weather?q=%s&appid=%s&lang=%s&units=metric", city, apiKey, lang);
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(api, String.class);
        return result;
    }
}
