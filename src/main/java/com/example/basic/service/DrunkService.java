package com.example.basic.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.basic.database.dao.DrunkDao;
import com.example.basic.database.entity.DrunkEntity;



@Service
public class DrunkService {
    @Autowired
    private DrunkDao drunkDao;
    public List<DrunkEntity> selectAll() {
        // dao로 부터 Entity리스트를 전달 받는다..
        List<DrunkEntity> entityList = drunkDao.selectAll();

        return entityList;
    }
}
