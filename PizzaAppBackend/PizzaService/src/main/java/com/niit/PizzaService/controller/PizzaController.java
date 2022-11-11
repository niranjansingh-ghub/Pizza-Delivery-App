package com.niit.PizzaService.controller;

import com.niit.PizzaService.domain.Pizza;
import com.niit.PizzaService.domain.User;
import com.niit.PizzaService.exception.PizzaNotFoundException;
import com.niit.PizzaService.exception.UserAlreadyExistsException;
import com.niit.PizzaService.exception.UserNotFoundException;
import com.niit.PizzaService.repository.PizzaRepository2;
import com.niit.PizzaService.services.PizzaService;
import com.niit.PizzaService.services.PizzaServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v2")
public class PizzaController {

    private PizzaService pizzaService;
    private ResponseEntity responseEntity;
    private PizzaServiceImpl pizzaServiceImpl;
    private PizzaRepository2 pizzaRepository2;

    @Autowired
    public PizzaController(PizzaService pizzaService, PizzaServiceImpl pizzaServiceImpl, PizzaRepository2 pizzaRepository2) {
        this.pizzaService = pizzaService;
        this.pizzaServiceImpl = pizzaServiceImpl;
        this.pizzaRepository2 = pizzaRepository2;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) throws UserAlreadyExistsException {
        try {
            System.out.println("register working");

            responseEntity = new ResponseEntity<>(pizzaService.registerUser(user), HttpStatus.CREATED);
        } catch (UserAlreadyExistsException userAlreadyExistsException) {
            throw new UserAlreadyExistsException();
        }
        return responseEntity;
    }

    @PostMapping("/user/{email}/pizzaList")
    public ResponseEntity<?> saveUserPizzaToList(@RequestBody Pizza pizza, @PathVariable String email) throws UserNotFoundException {
        System.out.printf("post running");
        try {
            responseEntity = new ResponseEntity<>(pizzaService.saveUserPizzaToList(pizza, email), HttpStatus.CREATED);
        } catch (UserNotFoundException userNotFoundException) {
            throw new UserNotFoundException();
        }
        System.out.println();
        return responseEntity;
    }

    @GetMapping("/order/{email}")
    public ResponseEntity<?> getAllPizzaOrdered(@PathVariable String email) throws UserNotFoundException {
        try {
            System.out.println("get pizza running");
            responseEntity = new ResponseEntity<>(pizzaService.getOrderDetails(email), HttpStatus.OK);
        } catch (UserNotFoundException e) {
            throw new UserNotFoundException();
        }
        return responseEntity;
    }


    @DeleteMapping("/delete/{email}/{pizzaName}")
    public ResponseEntity<?> deleteFromPizzaList(@PathVariable String email, @PathVariable String pizzaName) {
        return new ResponseEntity<>(pizzaService.deleteFromPizzaList(email, pizzaName), HttpStatus.OK);
    }

}


//    @DeleteMapping("/order/{email}/{pizzaName}")
//    public ResponseEntity<?> deletePizzaFromList(@PathVariable String email,@PathVariable String pizzaName)
//            throws UserNotFoundException, PizzaNotFoundException
//    {
//        try {
//            System.out.println("delete working");
//            responseEntity = new ResponseEntity<>(pizzaService.removePizza(email, pizzaName), HttpStatus.OK);
//        } catch (UserNotFoundException | PizzaNotFoundException m) {
//            throw new PizzaNotFoundException();
//        }
//        return responseEntity;
//    }

    //    @DeleteMapping("/deletefromcart/{email}/{pizzaName}")
//    public ResponseEntity<?> deleteFromList(@PathVariable String pizzaName, @PathVariable String email) throws UserNotFoundException {
//        try{
//            responseEntity = new ResponseEntity<>(pizzaService.deletePizzaFromList(pizzaName,email),HttpStatus.OK);
//        }catch(UserNotFoundException e)
//        {
//            throw new UserNotFoundException();
//        }
//        return responseEntity;
//    }

//@PutMapping("/addpizza")
//public ResponseEntity<Pizza> addPizza(@RequestBody Pizza pizza) {
//    return new ResponseEntity<>(pizzaServiceImpl.addVehicle(pizza), HttpStatus.OK);
//}

//    @DeleteMapping("/delete/{pizzaName}")
//    public ResponseEntity<?> deletePizza(@PathVariable String pizzaName) {
//        pizzaServiceImpl.deletePizza(pizzaName);
//        return new ResponseEntity<>("deleted",HttpStatus.OK);
//
//    }



