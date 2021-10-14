import java.lang.Math.*;
import java.lang.Number.*;
import java.util.Scanner;

class Number {
    private double db1;
    private long lg;

    public Number(double d) {
        db1 = d;
        lg = (long) d;
    }

    public boolean isZero() {
        if (db1 == 0.0)
            return true;
        else
            return false;
    }

    public boolean isPositive() {
        if (db1 > 0.0)
            return true;
        else
            return false;
    }

    public boolean isNegative() {
        if (db1 < 0.0)
            return true;
        else
            return false;
    }

    public boolean isodd() {
        return !isEven();
    }

    public boolean isEven(){
        if(db1 - lg != 0){
            char[] s = Double.toString(db1).toCharArray();
            int n = s.length;
            int l = (s[n-1] - '0');
            return (l%2 == 0);
        }
        else{
            return ((db1)%2 == 0);
        }
    }

    public boolean isPrime() {
        int i, lastn;
        if(lg != db1 || lg<0){
            return false;
        }  
        double a;
        boolean flag;
        a = Math.sqrt(lg);
        lastn = (int) a;
        flag = true;
        for (i = 2; i < lastn; i++) {
            if (lg != i) {
                if (lg % i == 0) {
                    flag = false;
                    break;
                }
            }
        }
        if (flag)
            return true;
        else
            return false;
    }

    public boolean isAmstrong() {
        long temp=lg;
        long ans=0;
        while(temp!=0) {
            long x= temp%10;
            ans+=(long)Math.pow(x,3);
            temp/=10;
        }
        return (ans==lg);
    }

    public double getFactorial() {
        if(lg<0){
            System.out.println("Factorial of negative number cannot be calculated");
            return -1.0;
        }
        if (lg >= 20) {
            System.out.println("Factorial of numbers, greater than 20, cannot be calculated in long data type");
            return -1.0;
        }
        double d = 1;
        for (int i = 1; i < lg; i++)
            d *= i;
        return d;
    }

    public double getSqrt() {
        double d;
        d = (double) lg;
        if(d<0) {
            System.out.println("Sqrt of negative number cannot be calculated");
            return -1;
        }
        d = Math.sqrt(d);
        return d;
    }

    public double getSqr() {
        double d;
        d = (double) lg;
        d = d * d;
        return d;
    }

    public double sumDigits() {
        double d = 0;
        long temp=lg;
        while (temp!=0) {
            d += temp % 10;
            temp = temp / 10;
        }  
        return d;
    }

    public double getReverse() {
        double d = 0;
        long temp1=lg;
        long temp;
        while (temp1 !=0) {
            temp = temp1 % 10;
            d = d * 10 + temp;
            temp1 = temp1 / 10;
        }
        return d;
    }

    public void listFactor(){
        long m = lg;
        System.out.println("\nThe factors are: ");
        for(long i=1; i<m; i++){
            if(m%i == 0)
                System.out.print(i+" ");
        }
    }

    public void dispBinary() {
        System.out.println("ByteValue of lg :" + Long.toBinaryString(lg));
    }

    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number:");
        double num = scanner.nextDouble();
        Number mynum = new Number(num);
        System.out.println("isZero - " + mynum.isZero());
        System.out.println("isPositive - " + mynum.isPositive());
        System.out.println("isNegative - " + mynum.isNegative());
        System.out.println("isOdd - " + mynum.isodd());
        System.out.println("isEven - " + mynum.isEven());
        System.out.println("isPrime - " + mynum.isPrime());
        System.out.println("isArmstrong - " + mynum.isAmstrong());
        System.out.println("getFactorial - " + mynum.getFactorial());
        System.out.println("getSqrt - " + mynum.getSqrt());
        System.out.println("getSqr - " + mynum.getSqr());
        System.out.println("sumDigits - " + mynum.sumDigits());
        System.out.println("getReverse - " + mynum.getReverse());
        mynum.dispBinary();
        mynum.listFactor();
        scanner.close();
    }
}