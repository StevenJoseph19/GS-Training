
package com.lab.wordcount;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class WordCountControllerTest {
  @Autowired MockMvc mvc;
  @Autowired SubmissionRepo repo;

  @Test
  void countsWordsAndPersists() throws Exception {
    String body = "{
  "lines": ["Hello world", "Hello friend"]
}";

    String json = mvc.perform(post("/api/wordcount").contentType(MediaType.APPLICATION_JSON).content(body))
      .andExpect(status().isOk())
      .andExpect(jsonPath("$.hello").value(2))
      .andExpect(jsonPath("$.world").value(1))
      .andExpect(jsonPath("$.friend").value(1))
      .andReturn().getResponse().getContentAsString();

    assertThat(repo.count()).isEqualTo(1);
    assertThat(repo.findAll().get(0).getCounts()).hasSize(3);
  }
}
