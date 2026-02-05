
package com.lab.creational.builder;

import org.junit.jupiter.api.Test;
import java.math.BigDecimal;
import static org.assertj.core.api.Assertions.*;

public class BuilderTest {
    @Test
    void buildsOrderWithLinesAndDiscount() {
        var order = Order.builder()
            .id("O-1")
            .addLine("SKU-1", 2, new BigDecimal("100"))
            .discount(new BigDecimal("10"))
            .shippingMethod("EXPRESS")
            .build();
        assertThatThrownBy(order::total).isInstanceOf(UnsupportedOperationException.class);
    }
}
