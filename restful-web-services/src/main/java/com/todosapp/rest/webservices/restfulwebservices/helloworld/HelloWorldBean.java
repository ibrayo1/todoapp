package com.todosapp.rest.webservices.restfulwebservices.helloworld;

public class HelloWorldBean {

    private String message;

    public HelloWorldBean(String message) {
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
        return String.format("HelloWorldBean [message=%s]", message);
    }
}
