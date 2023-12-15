package OCP;

public class Bus extends Vehicle {
    public Bus(int maxSpeed) {
        super(maxSpeed, "Bus");
    }
    @Override
    public double calculateAllowedSpeed(){
        return super.getMaxSpeed() * 0.5;
    }
}