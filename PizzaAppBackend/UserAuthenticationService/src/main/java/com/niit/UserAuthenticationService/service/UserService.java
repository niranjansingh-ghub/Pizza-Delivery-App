package com.niit.UserAuthenticationService.service;

import com.niit.UserAuthenticationService.domain.User;
import com.niit.UserAuthenticationService.exception.UserNotFoundException;

import java.util.List;

public interface UserService {

    public User saveUser(User user);

    public User findByEmailAndPassword(String email,String password) throws UserNotFoundException;

    List  <User> getAllUsers();
}
