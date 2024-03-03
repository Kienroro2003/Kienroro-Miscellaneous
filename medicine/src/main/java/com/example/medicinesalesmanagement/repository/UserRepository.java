package com.example.medicinesalesmanagement.repository;

import com.example.medicinesalesmanagement.dto.UserDto;
import com.example.medicinesalesmanagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
}
