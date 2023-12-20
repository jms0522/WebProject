package com.example.basic.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration // 스프링 설정 객체
@EnableWebSecurity // 스프링 설정 중에서 시큐리티 설정 객체
// @Controller의 메소드(Servlet)에서
// 해당 어노테이션 활성화 -> @Secured, @PreAuthorize
@EnableMethodSecurity(securedEnabled = true, prePostEnabled = true) // 컨트롤러에서 인증과 인가를 확인할 수 있는 기능 제공
public class SecurityConfig {
    // 비밀번호 암호화 (복호화 불가)
    @Bean // 해당 메소드의 Return Object(암호화 객체)를 IoC로 등록
    public BCryptPasswordEncoder encoderPwd() {
        return new BCryptPasswordEncoder();
    }

    // 인증 및 인가
    // Configuring HttpSecurity
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        // CSRF : Cross Site Request Forgery의 약자
        // 사이트 간 요청 위조
        // 개발할때만 disable, 서비스 단계에서는 able로 할 것

        http.csrf(AbstractHttpConfigurer::disable);
        // http.headers(headers -> headers.frameOptions().sameOrigin());
                // url path에 대한 접근 권한 설정
                http.authorizeHttpRequests(
                        authorize -> authorize
                                // 인증(로그인)이 성공했을 때, (인가(권한)는 확인하지 않음)
                                .requestMatchers("/user/**").authenticated()
                                // 인증(로그인) & 인가(권한) 모두 확인
                                .requestMatchers("/admin/**")
                                .hasAnyAuthority("ADMIN")
                                // 인증 & 인가 확인 X
                                .anyRequest()
                                .permitAll()

                )
                // 인증(로그인)에 대한 세부 설정
                .formLogin(formLogin -> formLogin
                        // 로그인 접속 URL Path
                        .loginPage("/loginPage")
                        // 로그인 성공했을 때
                        // PrincipalDetailsService.loadUserByUsername() 실행한 후
                        // Controller의 Method(/login)을 호출
                        .loginProcessingUrl("/login")
                        // 최종 로그인(인증)) 성공 시 접속할 URL Path
                        .defaultSuccessUrl("/index")
                        .failureUrl("/loginfail")
                        .permitAll()

                );
        return http.build();
    }

}