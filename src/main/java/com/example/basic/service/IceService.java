package com.example.basic.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.basic.database.dao.IceDao;
import com.example.basic.database.entity.IceEntity;



@Service
public class IceService {
    @Autowired
    private IceDao iceDao;
    public List<IceEntity> selectAll() {
        // dao로 부터 Entity리스트를 전달 받는다..
        List<IceEntity> entityList = iceDao.selectAll();

        return entityList;
    }
}
