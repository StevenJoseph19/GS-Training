
package com.lab.creational.factorymethod;

import java.math.BigDecimal;

/**
 * Factory Method base class.
 * TODO: Implement concrete creator and product types.
 */
public abstract class PaymentProcessorCreator {
    public Receipt process(PaymentType type, BigDecimal amount) {
        return create(type).pay(amount);
    }

    protected abstract PaymentProcessor create(PaymentType type);
}
