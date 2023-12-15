package DIP;

public class SeaFreight implements iShippingProvider{

    @Override
    public void deliverParcel() {
        System.out.println("доставка морем");
    }
}