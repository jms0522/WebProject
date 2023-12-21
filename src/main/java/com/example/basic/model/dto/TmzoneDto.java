package com.example.basic.model.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TmzoneDto {
    private Long id;

    private String local1;
    private String title;
    private String url;
    private Date date1;
}
