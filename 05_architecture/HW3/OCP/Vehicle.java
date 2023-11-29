package OCP;

public class Vehicle {
    private int maxSpeed;
    private String type;


    public int getMaxSpeed() {
        return maxSpeed;
    }

    public String getType() {
        return type;
    }

    public Vehicle(int maxSpeed, String type) {
        this.maxSpeed = maxSpeed;
        this.type = type;
    }

    public double calculateAllowedSpeed() {
        return maxSpeed;
    }
}
