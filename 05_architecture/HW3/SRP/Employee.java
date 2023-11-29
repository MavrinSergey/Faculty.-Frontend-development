package SRP;

import javax.xml.crypto.Data;

public class Employee {
    private String name;
    private Data dob;

    private String post;

    public Employee(String name, Data dob, String post) {
        this.name = name;
        this.dob = dob;
        this.post = post;
    }



    @Override
    public String toString() {
        return "Employee{" +
                "name='" + name + '\'' +
                ", dob=" + dob +
                ", post='" + post + '\'' +
                '}';
    }
}