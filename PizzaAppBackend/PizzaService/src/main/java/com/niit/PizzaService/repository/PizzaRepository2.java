package com.niit.PizzaService.repository;

import com.niit.PizzaService.domain.Pizza;
import com.niit.PizzaService.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PizzaRepository2 extends MongoRepository<Pizza,String> {
}
