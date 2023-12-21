package com.example.basic.database.dao;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.basic.database.entity.DrunkEntity;
import com.example.basic.model.repository.DrunkRepository;

import lombok.extern.slf4j.Slf4j;
@Slf4j
@Service
public class DrunkDao {
    
    @Autowired
    private DrunkRepository DrunkRepository;
    // 전체 데이터 조회 
    public List<DrunkEntity> selectAll() {

        log.info("[TodoDao][selectAll] Start");
        List<DrunkEntity> entityList = DrunkRepository.findAll();

        log.info("entityList count: "+entityList.size());
        return DrunkRepository.findAll();
    }
}
