
package com.lab.structural.facade;

import com.lab.creational.builder.Order;

/**
 * TODO: Implement orchestration across subsystems.
 */
public class CheckoutFacade {
    private final InventoryService inv; private final PaymentService pay; private final ShippingService ship;
    public CheckoutFacade(InventoryService inv, PaymentService pay, ShippingService ship) {
        this.inv = inv; this.pay = pay; this.ship = ship;
    }
    public Receipt checkout(Order order) {
        throw new UnsupportedOperationException("TODO");
    }
}
