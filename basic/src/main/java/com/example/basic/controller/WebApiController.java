package com.example.basic.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.basic.service.WebService;

@RestController
@RequestMapping("/api")
public class WebController {
    private WebService webService;

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }
}
