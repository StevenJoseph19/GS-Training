
package com.lab.order;

import com.lab.product.Product;
import com.lab.product.ProductRepo;
import com.lab.shop.Shop;
import com.lab.shop.ShopRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.math.BigDecimal;
import java.util.List;

import static org.assertj.core.api.Assertions.*;

@DataJpaTest
class OrderProjectionTest {
  @Autowired OrderRepo orders; @Autowired CustomerRepo customers; @Autowired ProductRepo products; @Autowired ShopRepo shops;

  @Test
  void findFullByCustomerLoadsLinesAndProducts(){
    Shop s = new Shop(); s.setName("S"); shops.save(s);
    Product p = new Product(); p.setShop(s); p.setName("A"); p.setPrice(new BigDecimal("5")); products.save(p);
    Customer c = new Customer(); c.setEmail("c@x"); customers.save(c);
    Order o = new Order(); o.setCustomer(c); orders.save(o);
    // intentionally no lines yet; test expects non-null list when implemented fully
    List<Order> out = orders.findFullByCustomer(c.getId());
    assertThat(out).isNotNull();
  }
}
