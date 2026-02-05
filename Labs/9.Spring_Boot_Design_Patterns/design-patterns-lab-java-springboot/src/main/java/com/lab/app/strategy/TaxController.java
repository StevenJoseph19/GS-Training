
package com.lab.app.strategy;

import com.lab.behavioral.strategy.TaxCalculator;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.util.Map;

@RestController
public class TaxController {
    private final TaxCalculator calculator;
    public TaxController(TaxCalculator calculator) { this.calculator = calculator; }

    @GetMapping("/api/tax")
    public Map<String, Object> tax(@RequestParam String region, @RequestParam BigDecimal amount) {
        // TODO: After implementing strategies & calculator, replace with real call:
        // var tax = calculator.taxFor(region, amount);
        // return Map.of("region", region, "amount", amount, "tax", tax);
        throw new ResponseStatusException(HttpStatus.NOT_IMPLEMENTED, "TODO: implement strategies and wire controller");
    }
}
