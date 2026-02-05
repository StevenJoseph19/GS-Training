
package com.lab.creational.factorymethod;

import java.util.Objects;

/**
 * TODO: Implement create() to return specific processors per PaymentType.
 */
public class DefaultPaymentProcessorCreator extends PaymentProcessorCreator {
    @Override
    protected PaymentProcessor create(PaymentType type) {
        Objects.requireNonNull(type, "type");
        // TODO: replace with real implementations using switch or map
        throw new UnsupportedOperationException("TODO: create processor for " + type);
    }
}
