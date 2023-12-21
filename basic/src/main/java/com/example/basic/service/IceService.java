package com.example.basic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.basic.database.dao.IceDao;
import com.example.basic.database.entity.IceEntity;
import com.example.basic.model.repository.IceRepository;

import lombok.extern.slf4j.Slf4j;

import java.util.List;

@Slf4j
@Service
public class IceService {
    @Autowired
    private IceDao iceDao;

    @Autowired
    private IceRepository iceRepository;

    public List<IceEntity> selectTodo() {
        log.info("[TodoService][selectTodo] Start");
        return iceDao.selectTodo();
    }
}
