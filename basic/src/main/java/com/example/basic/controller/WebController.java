package com.example.basic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.basic.database.entity.WebEntity;
import com.example.basic.service.WebService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class WebController {

    @Autowired
    private WebService webService;

    @GetMapping("/index")
    public String index() {
        log.info("[WebController][index] Start");
        return "index";
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request) {
        log.info("[WebController][logout] Start");

        HttpSession session = request.getSession();
        session.removeAttribute("userId");
        session.removeAttribute("userRole");

        return "redirect:/loginPage";
    }

    @GetMapping("/loginPage")
    public String loginPage() {
        log.info("[WebController][loginPage] Start");
        return "login";
    }

    @GetMapping("/join")
    public String join() {
        log.info("[WebController][join] Start");
        return "join";
    }

    @PostMapping("/join")
    public String join(@ModelAttribute WebEntity entity) {

        webService.joinUserDto(entity);
        return "redirect:/loginPage";
    }

    @GetMapping("/user")
    public String user() {
        log.info("[WebController][user] Start");
        return "user";
    }

    @GetMapping("/admin")
    public String admin() {
        log.info("[WebController][admin] Start");
        return "admin";
    }

    @GetMapping("/home")
    public String css() {
        return "css";
    }

    @GetMapping("/loginfail")
    public String loginFail() {
        return "loginfail";
    }

    @GetMapping("/test")
    public String test() {
        log.info("[WebController][loginPage] Start");
        return "test";
    }

    @GetMapping("/frozen")
    public String frozen() {
        return "frozen";
    }

    @GetMapping("/drunk")
    public String drunk(){
        return "drunk";
    }

    @GetMapping("total")
    public String total() {
        return "total";
    }

}

