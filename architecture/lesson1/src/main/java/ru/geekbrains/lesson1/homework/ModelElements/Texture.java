package ru.geekbrains.lesson1.homework.ModelElements;

public class Texture {

    private static int counter = 1000;
    private int id;

    private String name;

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Texture(String name) {
        this.name = name;
        id = ++counter;
    }
}
