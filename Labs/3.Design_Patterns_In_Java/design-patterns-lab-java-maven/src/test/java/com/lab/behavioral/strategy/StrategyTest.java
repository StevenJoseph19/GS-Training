
package com.lab.behavioral.strategy;

import org.junit.jupiter.api.Test;
import java.math.BigDecimal;
import java.util.Map;
import static org.assertj.core.api.Assertions.*;

public class StrategyTest {
    @Test
    void calculatesTaxForIndia() {
        var calc = new TaxCalculator(Map.of("IN", new IndiaTaxStrategy()));
        assertThatThrownBy(() -> calc.taxFor("IN", new BigDecimal("1000")))
            .isInstanceOf(UnsupportedOperationException.class);
    }
}
