package com.example.medicinesalesmanagement.dto;

public class UserDto {
    private String username;
    private String password;
    private boolean enable;

    public UserDto() {
    }

    public UserDto(String username, String password, boolean enable) {
        this.username = username;
        this.password = password;
        this.enable = enable;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isEnable() {
        return enable;
    }

    public void setEnable(boolean enable) {
        this.enable = enable;
    }


}
