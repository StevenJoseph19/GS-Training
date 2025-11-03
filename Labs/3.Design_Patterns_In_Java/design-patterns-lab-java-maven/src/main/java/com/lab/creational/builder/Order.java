
package com.lab.creational.builder;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Immutable-like Order with Builder.
 * TODO: Complete builder methods, validations, and total() calculation.
 */
public final class Order {
    private final String id;
    private final List<OrderLine> lines;
    private final BigDecimal discount;
    private final String shippingMethod;

    private Order(String id, List<OrderLine> lines, BigDecimal discount, String shippingMethod) {
        this.id = id; this.lines = Collections.unmodifiableList(new ArrayList<>(lines));
        this.discount = discount; this.shippingMethod = shippingMethod;
    }

    public String getId() { return id; }
    public List<OrderLine> getLines() { return lines; }

    public BigDecimal total() {
        throw new UnsupportedOperationException("TODO: compute total with discount");
    }

    public static Builder builder() { return new Builder(); }

    public static class Builder {
        private String id;
        private final List<OrderLine> lines = new ArrayList<>();
        private BigDecimal discount = BigDecimal.ZERO;
        private String shippingMethod;

        public Builder id(String id) { /* TODO */ return this; }
        public Builder addLine(String sku, int qty, BigDecimal unitPrice) { /* TODO */ return this; }
        public Builder discount(BigDecimal discount) { /* TODO */ return this; }
        public Builder shippingMethod(String method) { /* TODO */ return this; }
        public Order build() { throw new UnsupportedOperationException("TODO: validate and build"); }
    }
}
