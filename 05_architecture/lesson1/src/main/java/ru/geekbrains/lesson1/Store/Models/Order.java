package ru.geekbrains.lesson1.Store.Models;

import java.util.Collection;
import java.util.Date;

public class Order implements OrderEntity {

    private static int counter = 1000;

    public Order(Buyer buyer, Date orderDate, String address, String phone, Collection<OrderItem> items) {
        id = ++counter;
        this.buyer = buyer;
        this.orderDate = orderDate;
        this.address = address;
        this.phone = phone;
        this.items = items;
    }

    private final int id;

    private final Buyer buyer;

    private final Date orderDate;

    private final String address;

    private final String phone;

    private final Collection<OrderItem> items;

    public Buyer getBuyer() {
        return buyer;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public String getAddress() {
        return address;
    }

    public String getPhone() {
        return phone;
    }

    public Collection<OrderItem> getItems() {
        return items;
    }
}
