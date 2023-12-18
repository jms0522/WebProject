package com.example.basic.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.basic.model.WeatherData;
import com.example.basic.model.dto.WeatherResponseDto;
import com.example.basic.service.OpenWeatherMapService;

@RestController
public class WeatherController {

    @GetMapping("/getWeather")
    public String getWeather(@RequestParam String city, @RequestParam String apiKey) {
        String lang = "kr";
        String api = String.format("http://api.openweathermap.org/data/2.5/weather?q=%s&appid=%s&lang=%s&units=metric", city, apiKey, lang);

        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(api, String.class);

        return result;
    }

    private static final String API_KEY = "2f40a6b63771f57f788b6387e107c062";

    @GetMapping("/getWeather")
    public WeatherResponseDto getWeather() {
        // 회원정보에서 지역 정보 가져오기 (임의로 Seoul로 가정)
        String city = "Seoul";

        // OpenWeatherMap API 호출
        OpenWeatherMapService weatherService = new OpenWeatherMapService(API_KEY);
        WeatherData weatherData = weatherService.getWeatherData(city);

        // WeatherResponseDTO로 변환하여 반환
        return new WeatherResponseDto(city, weatherData.getWeatherDescription(),
                weatherData.getTemperature(), weatherData.getHumidity());
    }
}