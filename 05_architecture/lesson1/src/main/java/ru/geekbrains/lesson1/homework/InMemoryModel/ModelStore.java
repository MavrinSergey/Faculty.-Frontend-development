package ru.geekbrains.lesson1.homework.InMemoryModel;

import ru.geekbrains.lesson1.homework.ModelElements.PoligonalModel;

import java.util.ArrayList;
import java.util.Collection;

/**
 * Хранилище 3D-элементов
 * TODO: Доработать самостоятельно в рамках домашней работы
 */
public class ModelStore implements ModelChanger {

    private Collection<ModelChangedObserver> observers = new ArrayList<>();

    @Override
    public void registerModelChanger(ModelChangedObserver o) {
        observers.add(o);
    }

    @Override
    public void removeModelChanger(ModelChangedObserver o) {
        observers.remove(o);
    }

    /**
     * Нотификация изменений на уровне хранилища
     */
    private void notifyChange(){
        for (ModelChangedObserver observer : observers){
            observer.applyUpdateModel();
        }
    }

    public void addModel(PoligonalModel poligonalModel){
        notifyChange();
    }

}
