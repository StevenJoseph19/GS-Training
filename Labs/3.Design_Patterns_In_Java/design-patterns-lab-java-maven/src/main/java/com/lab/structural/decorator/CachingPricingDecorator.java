
package com.lab.structural.decorator;

import java.math.BigDecimal;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * TODO: Implement cache around delegate calls.
 */
public class CachingPricingDecorator implements PricingService {
    private final PricingService delegate;
    private final Map<String, BigDecimal> cache = new ConcurrentHashMap<>();
    public CachingPricingDecorator(PricingService delegate) { this.delegate = delegate; }
    @Override
    public BigDecimal price(String sku) {
        throw new UnsupportedOperationException("TODO");
    }
}
