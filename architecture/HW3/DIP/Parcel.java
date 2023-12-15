package DIP;

public class Parcel {
    private iShippingProvider shippingProvider;

    public Parcel(iShippingProvider shippingProvider){
        this.shippingProvider = shippingProvider;
    }
}