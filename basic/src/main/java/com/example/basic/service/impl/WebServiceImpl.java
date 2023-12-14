package com.example.basic.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.basic.database.entity.WebEntity;
import com.example.basic.model.repository.WebRepository;
import com.example.basic.service.WebService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class WebServiceImpl implements WebService {

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private WebRepository webRepository;

    // public void joinUserDto(WebDto dto) {
    // log.info("[UserService][joinUserDto] Start");
    // // 권한 적용
    // dto.setRole("USER");
    // if (dto.getName().equals("root")) {
    // dto.setRole("ADMIN");
    // }

    // // 비밀번호 암호화 적용
    // String rawPwd = dto.getPassword();
    // String encodedPwd = bCryptPasswordEncoder.encode(rawPwd);
    // dto.setPassword(encodedPwd);

    // log.info("dto : " + dto.toString());
    // webRepository.save(dto);
    // }

    @Override
    public void joinUserDto(WebEntity entity) {
        // TODO Auto-generated method stub
        log.info("[WebServiceImpl][joinUserDto] Start");
        // 권한 적용
        entity.setRole("USER");
        if (entity.getId().equals("root")) {
            entity.setRole("ADMIN");
        }

        // 비밀번호 암호화 적용
        String rawPwd = entity.getPassword();
        String encodedPwd = bCryptPasswordEncoder.encode(rawPwd);
        entity.setPassword(encodedPwd);

        log.info("entity : " + entity.toString());
        webRepository.save(entity);

    }
}
