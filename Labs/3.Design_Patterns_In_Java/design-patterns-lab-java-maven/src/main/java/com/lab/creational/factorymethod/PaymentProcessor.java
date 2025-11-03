
package com.lab.creational.factorymethod;

import java.math.BigDecimal;

public interface PaymentProcessor {
    Receipt pay(BigDecimal amount);
}
