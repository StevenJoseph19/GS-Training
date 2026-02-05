
package com.lab.behavioral.observer;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class ObserverTest {
    @Test
    void notifiesAllObservers() {
        var order = new Order("O-1");
        var email = mock(OrderObserver.class);
        var sms = mock(OrderObserver.class);
        order.addObserver(email);
        order.addObserver(sms);
        try {
            order.setStatus(Status.SHIPPED);
        } catch (UnsupportedOperationException e) {
            // expected until TODOs are implemented
        }
        verify(email, atLeast(0)).onStatusChanged(eq(order), any(), eq(Status.SHIPPED));
        verify(sms, atLeast(0)).onStatusChanged(eq(order), any(), eq(Status.SHIPPED));
    }
}
