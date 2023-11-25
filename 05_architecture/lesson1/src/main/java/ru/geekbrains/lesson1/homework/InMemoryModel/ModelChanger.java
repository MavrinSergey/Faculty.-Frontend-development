package ru.geekbrains.lesson1.homework.InMemoryModel;

public interface ModelChanger {

    void registerModelChanger(ModelChangedObserver o);
    void removeModelChanger(ModelChangedObserver o);

}
