
package com.lab.behavioral.strategy;

import java.math.BigDecimal;
import java.util.Map;

/**
 * Context selecting a strategy by region code.
 * TODO: Implement taxFor with validation.
 */
public class TaxCalculator {
    private final Map<String, TaxStrategy> strategies;
    public TaxCalculator(Map<String, TaxStrategy> strategies) { this.strategies = strategies; }
    public BigDecimal taxFor(String regionCode, BigDecimal amount) {
        throw new UnsupportedOperationException("TODO");
    }
}
