package ru.geekbrains.lesson1.homework.ModelElements;

import java.util.ArrayList;
import java.util.Collection;

public class PoligonalModel {

    private Collection<Poligon> poligons = new ArrayList<>();

    private Collection<Texture> textures = new ArrayList<>();

    public Collection<Poligon> getPoligons() {
        return poligons;
    }

    public Collection<Texture> getTextures() {
        return textures;
    }
}
