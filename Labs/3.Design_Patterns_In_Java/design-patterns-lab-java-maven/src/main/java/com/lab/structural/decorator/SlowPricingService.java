
package com.lab.structural.decorator;

import java.math.BigDecimal;

/**
 * Base service simulating a slow call.
 */
public class SlowPricingService implements PricingService {
    @Override
    public BigDecimal price(String sku) {
        // TODO: return deterministic price; avoid real sleep
        throw new UnsupportedOperationException("TODO");
    }
}
