package com.example.basic.service.impl;

import org.springframework.stereotype.Service;

import com.example.basic.database.dao.WebDao;
import com.example.basic.service.WebService;

@Service
public class WebServiceImpl implements WebService {
    private WebDao webDao;
}
