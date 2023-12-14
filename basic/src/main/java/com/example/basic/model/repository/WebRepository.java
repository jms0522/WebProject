package com.example.basic.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.basic.database.entity.WebEntity;
import com.example.basic.model.dto.WebDto;

public interface WebRepository extends JpaRepository<WebEntity, Long> {
    @Query(value = "SELECT u.* FROM account u WHERE a.name = :name", nativeQuery = true)
    WebDto getUserDtoByUserId(@Param(value = "name") String name);
}
