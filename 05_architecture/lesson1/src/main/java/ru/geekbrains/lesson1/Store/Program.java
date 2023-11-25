package ru.geekbrains.lesson1.Store;

import ru.geekbrains.lesson1.Store.InMemory.StoreService;
import ru.geekbrains.lesson1.Store.Models.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;

public class Program {

    public static void main(String[] args) throws ParseException {

        Product product1 = new Product("Product #1", 200);
        Product product2 = new Product("Product #2", 300);
        Product product3 = new Product("Product #3", 400);
        Product product4 = new Product("Product #4", 500);

        Buyer buyer1 = new Buyer("Buyer #1");
        Buyer buyer2 = new Buyer("Buyer #2");

        Collection<OrderItem> orderItems = new ArrayList<>();
        orderItems.add(new OrderItem(product2, 2));
        orderItems.add(new OrderItem(product1, 1));
        orderItems.add(new OrderItem(product3, 3));

        Order order = new Order(
                buyer2,
                new SimpleDateFormat("yyyy-MM-dd").parse("2023-11-21"),
                "Address #1",
                "Phone #1",
                orderItems);

        Collection<OrderEntity> orders = new ArrayList<>();
        orders.add(order);

        StoreService.processOrders(orders);



    }

}
