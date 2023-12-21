package com.example.basic.database.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.basic.database.entity.TmzoneEntity;
import com.example.basic.model.repository.TmzoneRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class TmzoneDao {
    
    @Autowired
    private TmzoneRepository TmzoneRepository;
    // 전체 데이터 조회 
    public List<TmzoneEntity> selectAll() {

        log.info("[TodoDao][selectAll] Start");
        List<TmzoneEntity> entityList = TmzoneRepository.findAll();

        log.info("entityList count: "+entityList.size());
        return TmzoneRepository.findAll();
    }
}
