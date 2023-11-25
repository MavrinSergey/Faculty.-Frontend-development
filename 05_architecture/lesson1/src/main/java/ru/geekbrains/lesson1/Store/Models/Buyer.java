package ru.geekbrains.lesson1.Store.Models;

import java.util.Date;

public class Buyer extends User {

    public Buyer(String name) {
        super(name);
    }

    private Date birthday;

    private String address;




    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }



}
