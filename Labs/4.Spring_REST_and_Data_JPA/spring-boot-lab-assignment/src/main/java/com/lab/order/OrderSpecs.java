
package com.lab.order;

import org.springframework.data.jpa.domain.Specification;

import java.math.BigDecimal;
import java.time.Instant;

public class OrderSpecs {
  public static Specification<Order> byFilters(Instant from, Instant to, BigDecimal minTotal, String email, Long shopId) {
    // TODO: build predicates and joins to filter by customer email and product.shop.id
    return (root, q, cb) -> cb.conjunction();
  }
}
