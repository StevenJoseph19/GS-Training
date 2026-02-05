
package com.lab.creational.factorymethod;

import java.math.BigDecimal;

public class Receipt {
    private final String method;
    private final BigDecimal amount;

    public Receipt(String method, BigDecimal amount) {
        this.method = method;
        this.amount = amount;
    }

    public String getMethod() { return method; }
    public BigDecimal getAmount() { return amount; }
}
