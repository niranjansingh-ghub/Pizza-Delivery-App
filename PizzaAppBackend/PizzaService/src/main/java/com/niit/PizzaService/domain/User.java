package com.niit.PizzaService.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document
public class User {

    @Id
    private String email;
    private String username;
    private String password;
    private String phoneNumber;
    private String address;
    private List<Pizza> pizzaList;
}
