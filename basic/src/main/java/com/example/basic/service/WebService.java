package com.example.basic.service;

import java.util.List;

import com.example.basic.database.entity.WebEntity;

public interface WebService {
    public void joinUserDto(WebEntity entity);

    public List<WebEntity> selectWeb();

    public void updateIsLoginByName(String name, Boolean isLogin);
}
