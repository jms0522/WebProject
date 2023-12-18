package com.example.basic.model;

import lombok.Data;

@Data
public class WeatherData {

    private String weatherDescription;
    private double temperature;
    private int humidity;

    // 생성자, 게터, 세터 등을 추가

    public WeatherData(String weatherDescription, double temperature, int humidity) {
        this.weatherDescription = weatherDescription;
        this.temperature = temperature;
        this.humidity = humidity;
    }
    
}

