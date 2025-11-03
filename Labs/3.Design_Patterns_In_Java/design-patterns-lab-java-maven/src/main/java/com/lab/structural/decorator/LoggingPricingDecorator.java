
package com.lab.structural.decorator;

import java.math.BigDecimal;

/**
 * TODO: Implement logging around delegate call.
 */
public class LoggingPricingDecorator implements PricingService {
    private final PricingService delegate;
    public LoggingPricingDecorator(PricingService delegate) { this.delegate = delegate; }
    @Override
    public BigDecimal price(String sku) {
        throw new UnsupportedOperationException("TODO");
    }
}
