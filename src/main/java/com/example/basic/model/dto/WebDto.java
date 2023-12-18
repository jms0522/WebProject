package com.example.basic.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class WebDto {
    private long uid;
    @NotBlank(message = "id is must be not blank")
    @Size(min =2, max = 15 , message = "2 ~ 15 자리로 만들어주세요!")
    private String id;
    @NotBlank(message = "password is must be not blank")
    @Size(min = 4, max  =20 , message = "4 ~ 20 자리로 만들어주세요!")
    private String password;
    @NotEmpty
    private String name;
    private String role;
}
