package com.niit.PizzaService.proxy;

import com.niit.PizzaService.domain.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "AUTH-SERVICE")
public interface UserAuthProxy {
    @PostMapping("api/v1/register")
    public ResponseEntity saveUser(@RequestBody User user) ;
}
