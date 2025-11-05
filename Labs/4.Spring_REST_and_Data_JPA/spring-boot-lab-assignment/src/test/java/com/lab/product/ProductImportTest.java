
package com.lab.product;

import com.lab.shop.Shop;
import com.lab.shop.ShopRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class ProductImportTest {
  @Autowired MockMvc mvc; @Autowired ShopRepo shops;

  @Test
  void importCsv() throws Exception {
    Shop s = new Shop(); s.setName("CSV"); shops.save(s);
    String csv = "shopId,name,price
"+s.getId()+",X,10
"+s.getId()+",Y,20
";
    MockMultipartFile file = new MockMultipartFile("file", "p.csv", "text/csv", csv.getBytes());
    mvc.perform(multipart("/api/products/import").file(file))
      .andExpect(status().isOk())
      .andExpect(jsonPath("$.created").value(2));
  }
}
