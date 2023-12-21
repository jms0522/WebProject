package com.example.basic.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.basic.database.entity.DrunkEntity;

public interface DrunkRepository extends JpaRepository<DrunkEntity, Long>{
    
}
