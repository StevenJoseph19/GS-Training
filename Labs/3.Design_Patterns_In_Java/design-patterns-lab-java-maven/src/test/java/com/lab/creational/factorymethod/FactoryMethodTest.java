
package com.lab.creational.factorymethod;

import org.junit.jupiter.api.Test;
import java.math.BigDecimal;
import static org.assertj.core.api.Assertions.*;

public class FactoryMethodTest {
    @Test
    void createsCardProcessor() {
        var creator = new DefaultPaymentProcessorCreator();
        // Once implemented, should return method CARD
        assertThatThrownBy(() -> creator.process(PaymentType.CARD, new BigDecimal("500")))
            .isInstanceOf(UnsupportedOperationException.class);
    }
}
