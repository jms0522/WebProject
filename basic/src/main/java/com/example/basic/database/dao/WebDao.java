package com.example.basic.database.dao;

import java.util.List;

import com.example.basic.database.entity.WebEntity;

public interface WebDao {
    public List<WebEntity> selectTodo();
}
