package com.example.basic.database.dao;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.basic.database.entity.IceEntity;
import com.example.basic.model.repository.IceRepository;

import lombok.extern.slf4j.Slf4j;
@Slf4j
@Service
public class IceDao {
    
    @Autowired
    private IceRepository iceRepository;
    // 전체 데이터 조회 
    public List<IceEntity> selectAll() {

        log.info("[TodoDao][selectAll] Start");
        List<IceEntity> entityList = iceRepository.findAll();

        log.info("entityList count: "+entityList.size());
        return iceRepository.findAll();
    }
}
