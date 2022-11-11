package com.niit.UserAuthenticationService.controller;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixProperty;
import com.niit.UserAuthenticationService.domain.User;
import com.niit.UserAuthenticationService.exception.UserNotFoundException;
import com.niit.UserAuthenticationService.service.SecurityTokenGenerator;
import com.niit.UserAuthenticationService.service.UserService;
import com.niit.UserAuthenticationService.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class UserController {

    private UserService userService;
    private ResponseEntity responseEntity;
    private SecurityTokenGenerator securityTokenGenerator;

    @Autowired
    public UserController(UserService userService,SecurityTokenGenerator securityTokenGenerator)
    {
        this.userService=userService;
        this.securityTokenGenerator=securityTokenGenerator;
    }
    @PostMapping("/login")
      @HystrixCommand(fallbackMethod="fallbackLogin",commandKey="loginKey",groupKey="login")
      @HystrixProperty(name="execution.isolation.thread.timeoutInMilliseconds",value="60000")
    public ResponseEntity loginUser(@RequestBody User user) throws UserNotFoundException {
        System.out.println("");
        Map<String, String> map = null;
        try {
            User userObj = userService.findByEmailAndPassword(user.getEmail(), user.getPassword());
//            Thread.sleep(70000);
            if (userObj.getEmail().equals(user.getEmail())) {
                map = securityTokenGenerator.generateToken(user);
            }
            responseEntity = new ResponseEntity<>(map, HttpStatus.OK);
        } catch (UserNotFoundException e) {
            throw new UserNotFoundException();
        } catch (Exception e) {
            responseEntity = new ResponseEntity("Try after sometime !!!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
        public ResponseEntity<?> fallbackLogin(@RequestBody User user)
            throws UserNotFoundException{
        String msg = "login failed";
        return new ResponseEntity<>(msg,HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/register")
    public ResponseEntity saveUser(@RequestBody User user)
    {
        User createdUser=userService.saveUser(user);
        return responseEntity = new ResponseEntity("User Created", HttpStatus.CREATED);
    }
    @GetMapping("/userservice/users")
    public ResponseEntity getAllUsers(HttpServletRequest request)
    {
        List<User> list=userService.getAllUsers();
        return responseEntity=new ResponseEntity(list,HttpStatus.OK);
    }

}
