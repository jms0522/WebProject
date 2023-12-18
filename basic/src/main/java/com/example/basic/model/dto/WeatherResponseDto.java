package com.example.basic.model.dto;

import lombok.Data;

@Data
public class WeatherResponseDto {
    private String city;
    private String weatherDescription;
    private double temperature;
    private int humidity;

    // 생성자, 게터, 세터 등을 추가

    public WeatherResponseDto(String city, String weatherDescription, double temperature, int humidity) {
        this.city = city;
        this.weatherDescription = weatherDescription;
        this.temperature = temperature;
        this.humidity = humidity;
    }
}
