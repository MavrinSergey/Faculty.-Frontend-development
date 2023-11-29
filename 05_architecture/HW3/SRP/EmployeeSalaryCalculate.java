package SRP;

public class EmployeeSalaryCalculate {
    private int baseSalary;

    public EmployeeSalaryCalculate(int baseSalary) {
        this.baseSalary = baseSalry;
    }

    public int salaryCalculate() {
        return (int)(baseSalary * 1.25);
    }
}