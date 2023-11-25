package ru.geekbrains.lesson1.Store.Models;

public class OrderItem {

    private static int counter = 600;

    {
        id = ++counter;
    }
    public OrderItem(Product product, int quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    private int id;

    private final Product product;

    private final int quantity;

    public int getId() {
        return id;
    }

    public Product getProduct() {
        return product;
    }

    public int getQuantity() {
        return quantity;
    }

}
