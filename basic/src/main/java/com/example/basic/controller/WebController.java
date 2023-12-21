package com.example.basic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.basic.database.entity.IceEntity;
import com.example.basic.database.entity.WebEntity;
import com.example.basic.service.IceService;
import com.example.basic.service.WebService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class WebController {

    @Autowired
    private WebService webService;

    @Autowired
    private IceService iceService;

    private boolean isAuthenticated() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || authentication instanceof AnonymousAuthenticationToken) {
            return false;
        }
        return authentication.isAuthenticated();
    }

    @GetMapping("/test2")
    public String test(Authentication authentication, Model model) {
        if (authentication != null) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            model.addAttribute("username", userDetails.getUsername());
        }
        // log.info("model : " + model);
        return "test2";
    }

    @GetMapping("/index")
    public String index(Authentication authentication, Model model) {
        log.info("[WebController][index] Start");
        List<IceEntity> iceList = iceService.selectTodo();
        model.addAttribute("iceList", iceList);

        if (authentication != null) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            model.addAttribute("username", userDetails.getUsername());
        }
        // log.info("model : " + model);
        return "index";
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request) {
        log.info("[WebController][logout] Start");

        HttpSession session = request.getSession();
        session.removeAttribute("userId");
        session.removeAttribute("userRole");

        return "redirect:/index";
    }

    @GetMapping("/loginPage")
    public String loginPage() {
        log.info("[WebController][loginPage] Start");
        if (isAuthenticated())
            return "index";

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
    public String loginfail() {
        return "loginfail";
    }
}
