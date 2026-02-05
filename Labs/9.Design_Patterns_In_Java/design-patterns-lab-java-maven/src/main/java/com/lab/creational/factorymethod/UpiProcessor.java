
package com.lab.creational.factorymethod;

import java.math.BigDecimal;

/**
 * TODO: Implement pay() returning a Receipt with method "UPI".
 */
public class UpiProcessor implements PaymentProcessor {
    @Override
    public Receipt pay(BigDecimal amount) {
        throw new UnsupportedOperationException("TODO");
    }
}
