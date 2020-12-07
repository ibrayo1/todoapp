package com.todosapp.rest.webservices.restfulwebservices.basic.auth;

public class AuthenticationBean {

    private String message;

    public AuthenticationBean(String message) {
        this.message = message;
    }

    // setter method: sets message
    public void setMessage(String msg){
        this.message = msg;
    }

    // getter method: returns message
    public String getMessage(){
        return this.message;
    }

    @Override
    public String toString(){
        return String.format("AuthenticationBean [message=%s]", message);
    }
}
