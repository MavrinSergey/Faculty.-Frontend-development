package ru.geekbrains.lesson1.homework.InMemoryModel;

public class Observer1 implements ModelChangedObserver{
    @Override
    public void applyUpdateModel() {
        System.out.println("Observer1 реагирует на изменения ...");
    }
}
