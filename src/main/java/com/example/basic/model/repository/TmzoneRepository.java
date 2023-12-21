package com.example.basic.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.basic.database.entity.TmzoneEntity;

public interface TmzoneRepository extends JpaRepository<TmzoneEntity, Long>{
    
}
