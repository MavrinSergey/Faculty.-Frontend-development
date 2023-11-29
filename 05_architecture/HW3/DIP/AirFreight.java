package DIP;

public class AirFreight implements iShippingProvider{
    @Override
    public void deliverParcel() {
        System.out.println("доставка авиалиниями");
    }
}