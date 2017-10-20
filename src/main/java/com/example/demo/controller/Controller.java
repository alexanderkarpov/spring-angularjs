package com.example.demo.controller;

import java.util.UUID;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Greeting;

@RestController
public class Controller {

    @RequestMapping("/resource")
    public Greeting home() {
        return new Greeting(UUID.randomUUID().toString(), "Hello World!!!");
    }

}
