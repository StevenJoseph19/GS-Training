
package com.lab.structural.decorator;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.assertj.core.api.Assertions.*;
import java.math.BigDecimal;

public class DecoratorTest {
    @Test
    void cachingAvoidsRepeatedCalls() {
        var base = mock(PricingService.class);
        when(base.price("SKU-1")).thenReturn(new BigDecimal("100"));
        var svc = new CachingPricingDecorator(base);
        assertThatThrownBy(() -> svc.price("SKU-1")).isInstanceOf(UnsupportedOperationException.class);
        verify(base, times(1)).price("SKU-1");
    }
}
