
package com.lab.behavioral.strategy;

import org.springframework.stereotype.Component;

import java.math.BigDecimal;

/** TODO: Return amount * 0.18 */
@Component("IN")
public class IndiaTaxStrategy implements TaxStrategy {
    @Override
    public BigDecimal calculate(BigDecimal amount) {
        throw new UnsupportedOperationException("TODO");
    }
}
