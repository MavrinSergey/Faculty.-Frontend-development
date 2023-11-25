package ru.geekbrains.lesson1.homework.InMemoryModel;

public class Observer2 implements ModelChangedObserver{
    @Override
    public void applyUpdateModel() {
        System.out.println("Observer2 реагирует на изменения ...");
    }
}