package ru.geekbrains.lesson1.Store.Models;

import java.util.ArrayList;
import java.util.Collection;

public class Product {

    private static int counter = 10000;

    {
        id = ++counter;
    }

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    private int id;

    private String name;

    private double price;

    private final Collection<ProductCategory> categories = new ArrayList<>();

    public Collection<ProductCategory> getCategories() {
        return categories;
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

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
