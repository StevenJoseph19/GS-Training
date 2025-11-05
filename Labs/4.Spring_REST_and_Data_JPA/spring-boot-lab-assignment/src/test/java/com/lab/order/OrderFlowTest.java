
package com.lab.order;

import com.lab.product.Product;
import com.lab.product.ProductRepo;
import com.lab.shop.Shop;
import com.lab.shop.ShopRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class OrderFlowTest {
  @Autowired MockMvc mvc;
  @Autowired ShopRepo shops;
  @Autowired ProductRepo products;
  @Autowired CustomerRepo customers;

  Long custId; Long p1; Long p2;

  @BeforeEach
  void seed(){
    shops.deleteAll(); products.deleteAll(); customers.deleteAll();
    Shop s1 = new Shop(); s1.setName("S1"); shops.save(s1);
    Product a = new Product(); a.setShop(s1); a.setName("A"); a.setPrice(new BigDecimal("100")); products.save(a); p1 = a.getId();
    Product b = new Product(); b.setShop(s1); b.setName("B"); b.setPrice(new BigDecimal("50")); products.save(b); p2 = b.getId();
    Customer c = new Customer(); c.setEmail("x@y.com"); c.setName("X"); customers.save(c); custId = c.getId();
  }

  @Test
  void placeOrderComputesTotal() throws Exception {
    String body = "{
  "lines": [ {"productId": "+p1+", "qty": 2 }, { "productId": "+p2+", "qty": 1 } ]
}";
    mvc.perform(post("/api/customers/"+custId+"/orders").contentType(MediaType.APPLICATION_JSON).content(body))
      .andExpect(status().isCreated())
      .andExpect(jsonPath("$.total").value(250));
  }
}
