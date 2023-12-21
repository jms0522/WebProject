package com.example.basic.database.dao.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.basic.database.dao.WebDao;
import com.example.basic.database.entity.WebEntity;
import com.example.basic.model.repository.WebRepository;

@Service
public class WebDaoImpl implements WebDao {
    private WebRepository webRepository;

    @Override
    public List<WebEntity> selectTodo() {
        return webRepository.findAll();
    }
}
