package com.niit.PizzaService.services;

import com.niit.PizzaService.domain.Pizza;
import com.niit.PizzaService.domain.User;
import com.niit.PizzaService.exception.UserAlreadyExistsException;
import com.niit.PizzaService.exception.UserNotFoundException;
import com.niit.PizzaService.proxy.UserAuthProxy;
import com.niit.PizzaService.repository.PizzaRepository;
import com.niit.PizzaService.repository.PizzaRepository2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class PizzaServiceImpl implements PizzaService {

    private PizzaRepository pizzaRepository;
    private UserAuthProxy userAuthProxy;
    private PizzaRepository2 pizzaRepository2;

    @Autowired
    public PizzaServiceImpl(PizzaRepository pizzaRepository,UserAuthProxy userAuthProxy)
    {
        this.pizzaRepository=pizzaRepository;
        this.userAuthProxy=userAuthProxy;
    }

    @Override
    public User registerUser(User user) throws UserAlreadyExistsException
    {
        if(pizzaRepository.findById(user.getEmail()).isPresent())
        {
            throw new UserAlreadyExistsException();
        }
        ResponseEntity<?> response=userAuthProxy.saveUser(user);
        if (response.getStatusCodeValue()==201)
        {
            System.out.println("service working");
            return pizzaRepository.save(user);
        }
        else
        {
            System.out.println("null");
               return null;
        }

    }
    @Override
    public User saveUserPizzaToList(Pizza pizza, String email) throws UserNotFoundException
    {
        if (pizzaRepository.findById(email).isEmpty())
        {
            throw new UserNotFoundException();
        }
        User user= pizzaRepository.findByEmail(email);
        if (user.getPizzaList()==null)
        {
            user.setPizzaList(Arrays.asList(pizza));
        }
        else
        {
            List<Pizza> pizzas = user.getPizzaList();
            pizzas.add(pizza);
            user.setPizzaList(pizzas);
        }
        return pizzaRepository.save(user);
    }

//    @Override
//    public User deletePizzaFromList(String email, String pizzaName) throws UserNotFoundException {
//        return null;
//    }

//    @Override
//    public User deletePizzaFromList(String email, String pizzaName) throws UserNotFoundException{
//
//        if(pizzaRepository.findById(email).isEmpty())
//        {
//            throw new UserNotFoundException();
//        }
//        else{
//            User user1=new User();
//            user1=pizzaRepository.findById(email).get();
//            user1.getPizzaList().removeIf(p -> p.getPizzaName().equals(pizzaName));
//            return pizzaRepository.save(user1);
//        }
//    }

//    public Pizza addVehicle(Pizza pizza) {
//        return pizzaRepository2.save(pizza);
//    }
//
//
//    public void deletePizza(String pizzaName) {
//        pizzaRepository2.deleteById(pizzaName);
//    }


    public User deleteFromPizzaList(String email, String pizzaName) {
        User user = pizzaRepository.findById(email).get();
        user.getPizzaList().removeIf(a -> a.getPizzaName().equals(pizzaName));

        return pizzaRepository.save(user);
    }

//    @Override
//    public User removePizza(String email, String pizzaName) throws UserNotFoundException, PizzaNotFoundException {
//        boolean pizzaNameIsPresent = false;
//        if(pizzaRepository.findById(email).isEmpty())
//        {
//            throw new UserNotFoundException();
//        }
//        System.out.println("delete1 working");
//        User user = pizzaRepository.findById(email).get();
////        User user= pizzaRepository.findByEmail(email);
//        List<Pizza> pizzas = user.getPizzaList();
//        pizzaNameIsPresent = pizzas.removeIf(x->x.getPizzaName()==pizzaName);
//        if(!pizzaNameIsPresent)
//        {
//            throw new PizzaNotFoundException();
//        }
//        System.out.println("delete2 working");
//
//        user.setPizzaList(pizzas);
//        return pizzaRepository.save(user);
//    }

    @Override
    public List<Pizza> getOrderDetails(String email) throws UserNotFoundException {
        if(pizzaRepository.findById(email).isEmpty())
        {
            throw new UserNotFoundException();
        }
        return pizzaRepository.findById(email).get().getPizzaList();
    }
}
