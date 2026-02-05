
package com.lab.app.strategy;

import com.lab.behavioral.strategy.TaxCalculator;
import com.lab.behavioral.strategy.TaxStrategy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

@Configuration
public class StrategyConfig {
    /**
     * Creates a TaxCalculator by injecting all TaxStrategy beans as a map where keys are bean names.
     * TODO (optional): replace bean names with a registry mapping of region codes.
     */
    @Bean
    public TaxCalculator taxCalculator(Map<String, TaxStrategy> strategies) {
        return new TaxCalculator(strategies);
    }
}
