
package com.lab.category;

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
class CategoryControllerTest {
  @Autowired MockMvc mvc;

  @Test
  void createListAndSoftDelete() throws Exception {
    mvc.perform(post("/api/categories").contentType(MediaType.APPLICATION_JSON).content("{"name":"Cat"}"))
      .andExpect(status().isOk())
      .andExpect(jsonPath("$.id").exists())
      .andExpect(jsonPath("$.createdAt").exists());

    mvc.perform(get("/api/categories"))
      .andExpect(status().isOk())
      .andExpect(jsonPath("$.content[0].name").value("Cat"));

    mvc.perform(delete("/api/categories/1"))
      .andExpect(status().isNoContent());

    mvc.perform(get("/api/categories"))
      .andExpect(status().isOk())
      .andExpect(jsonPath("$.content").isEmpty());
  }
}
