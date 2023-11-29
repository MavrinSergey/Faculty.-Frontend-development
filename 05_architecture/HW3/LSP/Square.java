package LSP;

public class Square extends QuadRangle{
    private int length;

    @Override
    public int area() {
        return length*length;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public Square(int length) {
        this.length = length;
    }
}