
package com.lab.app.facade;

import com.lab.structural.facade.CheckoutFacade;
import com.lab.structural.facade.InventoryService;
import com.lab.structural.facade.PaymentService;
import com.lab.structural.facade.ShippingService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FacadeConfig {
    // TODO: Replace stubbed services with real implementations as you progress
    @Bean
    InventoryService inventoryService() {
        return order -> {
        };
    }

    @Bean
    PaymentService paymentService() {
        return amount -> "PAY-XYZ";
    }

    @Bean
    ShippingService shippingService() {
        return order -> "TRACK-XYZ";
    }

    @Bean
    CheckoutFacade checkoutFacade(InventoryService inv, PaymentService pay, ShippingService ship) {
        return new CheckoutFacade(inv, pay, ship);
    }
}
