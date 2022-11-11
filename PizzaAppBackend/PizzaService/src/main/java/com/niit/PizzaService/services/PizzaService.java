package com.niit.PizzaService.services;

import com.niit.PizzaService.domain.Pizza;
import com.niit.PizzaService.domain.User;
import com.niit.PizzaService.exception.PizzaNotFoundException;
import com.niit.PizzaService.exception.UserAlreadyExistsException;
import com.niit.PizzaService.exception.UserNotFoundException;

import java.util.List;

public interface PizzaService {

    User registerUser(User user) throws UserAlreadyExistsException;

    User saveUserPizzaToList(Pizza pizza, String email) throws UserNotFoundException;

//    User removePizza(String email, String pizzaName) throws UserNotFoundException, PizzaNotFoundException;

//    User deletePizzaFromList(String email, String pizzaName) throws UserNotFoundException;

//    Void deletePizza(String pizzaName);

    List<Pizza> getOrderDetails(String email) throws UserNotFoundException;



    User deleteFromPizzaList(String email, String pizzaName);
}
