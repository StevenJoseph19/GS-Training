
package com.lab.product;

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

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class ProductPatchTest {
  @Autowired MockMvc mvc;
  @Autowired ShopRepo shops; @Autowired ProductRepo products;
  Long pid; Long shopId;

  @BeforeEach
  void seed() throws Exception {
    Shop s = new Shop(); s.setName("P-S"); shops.deleteAll(); shops.save(s); shopId = s.getId();
    mvc.perform(post("/api/products").contentType(MediaType.APPLICATION_JSON)
      .content("{"+""shopId":"+shopId+","name":"P","price":100}"))
      .andExpect(status().isCreated());
    pid = products.findAll().get(0).getId();
  }

  @Test
  void patchOnlyProvidedFields() throws Exception {
    mvc.perform(patch("/api/products/"+pid).contentType(MediaType.APPLICATION_JSON)
      .content("{"price":199.99}"))
      .andExpect(status().isOk())
      .andExpect(jsonPath("$.price").value(199.99))
      .andExpect(jsonPath("$.name").value("P"));
  }
}
