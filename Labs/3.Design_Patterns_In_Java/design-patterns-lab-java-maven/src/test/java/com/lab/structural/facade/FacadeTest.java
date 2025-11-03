
package com.lab.structural.facade;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.assertj.core.api.Assertions.*;
import com.lab.creational.builder.Order;

public class FacadeTest {
    @Test
    void checkoutFlowsThroughSubsystems() {
        var inv = mock(InventoryService.class);
        var pay = mock(PaymentService.class);
        var ship = mock(ShippingService.class);
        when(pay.charge(any())).thenReturn("PAY-1");
        when(ship.dispatch(any())).thenReturn("TRACK-1");
        var facade = new CheckoutFacade(inv, pay, ship);
        var order = Order.builder().id("O-1").build();
        assertThatThrownBy(() -> facade.checkout(order)).isInstanceOf(UnsupportedOperationException.class);
        verify(inv).reserve(any());
        verify(pay).charge(any());
        verify(ship).dispatch(any());
    }
}
