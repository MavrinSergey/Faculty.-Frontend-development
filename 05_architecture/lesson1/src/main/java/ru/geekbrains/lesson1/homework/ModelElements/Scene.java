package ru.geekbrains.lesson1.homework.ModelElements;

/**
 * Сцена
 * TODO: Доработать самостоятельно в рамках домашней работы
 */

public class Scene(int id, List<PolygonalModel> models, List<Flash> flashes, List<Camera> cameras) {
    this.id = id;
    if (models.size() > 0) {
        this.models = models;
    } else {
        throw new Exception("Должна быть одна модель");
    }
    this.flashes = flashes;
    if (cameras.size() > 0) {
        this.cameras = cameras;
    } else {
        throw new Exception("Должна быть одна модель");
    }

    public Flash method1(Flash flash) {
        return flash;
    }
    
    public Flash method2(Flash flash, Camera camera) {
        return flash;
    }
}

