package com.example.basic.database.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.basic.database.entity.IceEntity;
import com.example.basic.model.repository.IceRepository;

import java.util.List;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class IceDao {
    @Autowired
    private IceRepository iceRepository;

    public List<IceEntity> selectTodo() {
        log.info("[TodoDao][selectTodo] Start");
        return iceRepository.findAll();
    }
}
