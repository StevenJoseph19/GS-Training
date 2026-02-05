
package com.lab.behavioral.strategy;

import org.springframework.stereotype.Component;

import java.math.BigDecimal;

/** TODO: Return amount * 0.20 */
@Component("EU")
public class EuTaxStrategy implements TaxStrategy {
    @Override
    public BigDecimal calculate(BigDecimal amount) {
        throw new UnsupportedOperationException("TODO");
    }
}
