package com.niit.UserAuthenticationService.domain;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class User {

    @Id
    private String email;
    private String password;



}
