package com.example.basic.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.basic.database.dao.TmzoneDao;
import com.example.basic.database.entity.TmzoneEntity;

@Service
public class TmzoneService {
    @Autowired
    private TmzoneDao tmzoneDao;
    public List<TmzoneEntity> selectAll() {
        // dao로 부터 Entity리스트를 전달 받는다..
        List<TmzoneEntity> entityList = tmzoneDao.selectAll();

        return entityList;
    }
}
