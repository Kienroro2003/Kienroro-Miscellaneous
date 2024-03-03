package com.example.medicinesalesmanagement.service.User;

import com.example.medicinesalesmanagement.dto.UserDto;
import com.example.medicinesalesmanagement.model.User;
import com.example.medicinesalesmanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public User findUser(String username) {
        return userRepository.findById(username).orElse(null);
    }
}
