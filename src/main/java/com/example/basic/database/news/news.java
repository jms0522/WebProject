package com.example.basic.database.news;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import java.io.BufferedReader;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

@Component
public class news{
    
    @Value("${spring.datasource.url}")
    private String jdbcURL;

    @Value("${spring.datasource.username}")
    private String username;

    @Value("${spring.datasource.password}")
    private String password;

    @Value("${C:\\Users\\USER\\Desktop\\결빙지도\\지역별 결빙사고 뉴스}")
    private String directoryPath;

    public void processCSVFiles() {
        List<String> fileNames = new ArrayList<>();
        fileNames.add("강원_결빙사고_뉴스.csv");
        fileNames.add("경기_결빙사고_뉴스.csv");
        fileNames.add("경상_결빙사고_뉴스.csv");
        fileNames.add("광주_결빙사고_뉴스.csv");
        fileNames.add("대구_결빙사고_뉴스.csv");
        fileNames.add("대전_결빙사고_뉴스.csv");
        fileNames.add("부산_결빙사고_뉴스.csv");
        fileNames.add("서울_결빙사고_뉴스.csv");
        fileNames.add("세종_결빙사고_뉴스.csv");
        fileNames.add("울산_결빙사고_뉴스.csv");
        fileNames.add("인천_결빙사고_뉴스.csv");
        fileNames.add("전라_결빙사고_뉴스.csv");
        fileNames.add("제주_결빙사고_뉴스.csv");
        fileNames.add("충청_결빙사고_뉴스.csv");
        // ... 나머지 CSV 파일들 추가

        try (Connection connection = DriverManager.getConnection(jdbcURL, username, password)) {
            for (String fileName : fileNames) {
                String csvFile = directoryPath + fileName;
                insertDataFromCSV(connection, csvFile);
            }
            System.out.println("All data from CSV files inserted into the database successfully.");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void insertDataFromCSV(Connection connection, String csvFile) {
        String line;
        String csvSplitBy = ",";

        try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {
            String insertQuery = "INSERT INTO news (id,local1, title, url, date1) VALUES (?, ?, ?, ?)";
            PreparedStatement pstmt = connection.prepareStatement(insertQuery);

            while ((line = br.readLine()) != null) {
                String[] data = line.split(csvSplitBy);

                // CSV 파일의 각 열을 읽어와 PreparedStatement에 설정
                pstmt.setString(1, data[0]);
                pstmt.setString(2, data[1]);
                pstmt.setDate(3, java.sql.Date.valueOf(data[2])); // Date 형식으로 변환하여 삽입
                pstmt.setString(4, data[3]);

                // PreparedStatement 실행하여 데이터베이스에 삽입
                pstmt.executeUpdate();
            }
            System.out.println("Data from " + csvFile + " inserted into the database.");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
