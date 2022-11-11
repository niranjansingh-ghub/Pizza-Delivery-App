package com.niit.PizzaService.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@NoArgsConstructor
@ToString
@AllArgsConstructor
@Document
public class Pizza {



    @Id
    private String pizzaName;
    private String topping;
    private String size;
    private String quantity;
    private String price;
    private String details;
    private String image;
}
