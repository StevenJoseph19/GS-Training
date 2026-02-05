
package com.lab.structural.adapter;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.*;

public class AdapterTest {
    @Test
    void adaptsSoapResponse() {
        var soap = mock(LegacySoapClient.class);
        when(soap.getCustomerXml("123")).thenReturn("<customer><id>123</id></customer>");
        var svc = new SoapCustomerAdapter(soap);
        assertThatThrownBy(() -> svc.fetchById("123")).isInstanceOf(UnsupportedOperationException.class);
    }
}
