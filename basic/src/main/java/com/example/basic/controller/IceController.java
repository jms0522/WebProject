package com.example.basic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.basic.database.entity.IceEntity;
import com.example.basic.service.IceService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class IceController {

    @Autowired
    private IceService iceService;

    @GetMapping("/test")
    public String getIceEntity(Model model) {
        List<IceEntity> iceList = iceService.selectTodo();
        model.addAttribute("iceList", iceList);
        log.info("model : " + model);
        return "test";
    }
}
