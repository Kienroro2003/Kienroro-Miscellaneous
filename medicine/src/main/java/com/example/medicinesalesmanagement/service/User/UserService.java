package com.example.medicinesalesmanagement.service.User;

import com.example.medicinesalesmanagement.dto.UserDto;
import com.example.medicinesalesmanagement.model.User;

public interface UserService {
    User findUser(String username);
}
