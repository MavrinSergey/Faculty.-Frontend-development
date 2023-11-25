package ru.geekbrains.lesson1.Store.Models;

public class ProductCategory {

    private static int counter = 10;

    {
        id = ++counter;
    }

    private int id;
    private String name;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
