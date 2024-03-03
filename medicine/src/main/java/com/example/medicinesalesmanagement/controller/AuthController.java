package com.example.medicinesalesmanagement.controller;

import com.example.medicinesalesmanagement.dto.UserDto;
import com.example.medicinesalesmanagement.model.User;
import com.example.medicinesalesmanagement.service.User.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {
    @Autowired
    private UserService userService;
    @PostMapping(value = "/login", consumes = {
            MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_FORM_URLENCODED_VALUE
    }, produces = {
            MediaType.APPLICATION_JSON_VALUE
    })
    public @ResponseBody ResponseEntity<?> login(@RequestBody UserDto user){
        System.out.println(user.getUsername() + " " + user.getPassword());
        User theUser = userService.findUser(user.getUsername());
        if(theUser == null)return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        if(!theUser.getPassword().equals(user.getPassword()))return new ResponseEntity<>( "Password wrong!!!", HttpStatus.UNAUTHORIZED);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
