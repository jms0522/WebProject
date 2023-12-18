package com.example.basic.service;

import org.springframework.web.client.RestTemplate;

import com.example.basic.model.WeatherData;

public class OpenWeatherMapService {

    private final String apiKey;
    private final String apiUrl;

    public OpenWeatherMapService(String apiKey) {
        this.apiKey = apiKey;
        this.apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    }

    public WeatherData getWeatherData(String city) {
        // OpenWeatherMap API 호출 및 응답을 WeatherData 객체로 변환하는 로직

        // RestTemplate 사용
        RestTemplate restTemplate = new RestTemplate();

        // API 호출에 필요한 매개변수 설정
        String url = apiUrl + "?q=" + city + "&appid=" + apiKey;

        // API 호출 및 응답 받기
        WeatherData weatherData = restTemplate.getForObject(url, WeatherData.class);

        return weatherData;
    }
}