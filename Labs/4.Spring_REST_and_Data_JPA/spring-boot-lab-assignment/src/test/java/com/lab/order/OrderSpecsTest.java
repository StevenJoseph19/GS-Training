
package com.lab.order;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.math.BigDecimal;
import java.time.Instant;

import static org.assertj.core.api.Assertions.*;

@DataJpaTest
class OrderSpecsTest {
  @Autowired OrderRepo orders; @Autowired CustomerRepo customers;

  @Test
  void specReturnsAllByDefault(){
    Customer c = new Customer(); c.setEmail("a@b"); customers.save(c);
    Order o = new Order(); o.setCustomer(c); o.setTotal(new BigDecimal("10")); orders.save(o);
    var spec = OrderSpecs.byFilters(null, null, null, null, null);
    var results = orders.findAll(spec);
    assertThat(results).hasSize(1);
  }
}
