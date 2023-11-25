package ru.geekbrains.lesson1.Store.Models;

public class User {


    public User(String name) {
        this.name = name;
    }

    private static int counter = 100;

    {
        id = ++counter;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    private int id;
    private String name;
    private String phone;
    private String email;

}
