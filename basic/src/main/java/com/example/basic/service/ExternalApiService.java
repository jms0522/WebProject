package com.example.basic.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class ExternalApiService {
    private final String apiUrl = "https://opendata.koroad.or.kr/data/rest/road/dgdgr/highway";
    private final String authKey = "0ouvUnA8fhWxpZhqjEuCpe5UTTIWXcNnQz5kIYid0Gj%2Fd3DYo2A8zRg6gVt%2FQgUe";
    private final String frwyNm = "경부고속도로";
    private final String frwySctnNm = "판교IC-신갈JC";
    private final String vhctyCd = "01";

    public void callExternalApi() {
        // RestTemplate 생성
        RestTemplate restTemplate = new RestTemplate();

        // API 호출 URL 생성
        String fullUrl = apiUrl + "?authKey=" + authKey + "&frwyNm=" + frwyNm + "&frwySctnNm=" + frwySctnNm + "&vhctyCd=" + vhctyCd;

        // API 호출 및 응답 수신
        ResponseEntity<String> response = restTemplate.getForEntity(fullUrl, String.class);

        // 응답 출력
        System.out.println("Response: " + response.getBody());
    }

    public static void main(String[] args) {
        ExternalApiService externalApiService = new ExternalApiService();
        externalApiService.callExternalApi();
    }
}
