package com.example.basic.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.basic.database.entity.IceEntity;

public interface IceRepository extends JpaRepository<IceEntity, Long>{
    
}
