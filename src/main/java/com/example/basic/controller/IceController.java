package com.example.basic.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.basic.database.entity.IceEntity;
import com.example.basic.service.IceService;

import lombok.extern.slf4j.Slf4j;

import org.springframework.ui.Model;




@Controller
@Slf4j
@RequestMapping("/ice")
public class IceController {
    
    @Autowired
    private IceService iceService;

    @GetMapping("/test")
    public String selectAll(Model model) {
        List<IceEntity> iceList = iceService.selectAll();

        model.addAttribute("iceList", iceList);
        log.info("model"+ model);
        return "test";
    }
}
