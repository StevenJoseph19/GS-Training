
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

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class ProductControllerTest {
  @Autowired MockMvc mvc;
  @Autowired ShopRepo shops;

  Long shopId;

  @BeforeEach
  void setup(){
    Shop s = new Shop(); s.setName("A"); shops.deleteAll(); shops.save(s); shopId = s.getId();
  }

  @Test
  void createAndListByShopWithSorting() throws Exception {
    mvc.perform(post("/api/products").contentType(MediaType.APPLICATION_JSON)
        .content("{"+""shopId":"+shopId+","name":"P1","price":10}"))
      .andExpect(status().isCreated());
    mvc.perform(post("/api/products").contentType(MediaType.APPLICATION_JSON)
        .content("{"+""shopId":"+shopId+","name":"P2","price":20}"))
      .andExpect(status().isCreated());

    mvc.perform(get("/api/products/shop/"+shopId+"?page=0&size=10&sort=price,desc"))
      .andExpect(status().isOk())
      .andExpect(jsonPath("$.content[0].name").value("P2"));
  }
}
