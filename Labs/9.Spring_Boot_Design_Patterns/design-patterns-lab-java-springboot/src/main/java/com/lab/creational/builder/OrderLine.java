
package com.lab.creational.builder;

import java.math.BigDecimal;

public class OrderLine {
    private final String sku;
    private final int qty;
    private final BigDecimal unitPrice;

    public OrderLine(String sku, int qty, BigDecimal unitPrice) {
        this.sku = sku; this.qty = qty; this.unitPrice = unitPrice;
    }
    public BigDecimal lineTotal() { return unitPrice.multiply(BigDecimal.valueOf(qty)); }
}
