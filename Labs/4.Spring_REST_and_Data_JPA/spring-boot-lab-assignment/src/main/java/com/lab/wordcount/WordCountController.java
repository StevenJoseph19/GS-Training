
package com.lab.wordcount;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;

@RestController
@RequestMapping("/api")
public class WordCountController {
  private final SubmissionRepo repo;
  public WordCountController(SubmissionRepo repo) { this.repo = repo; }

  public record LinesRequest(@NotNull List<@NotBlank String> lines) {}

  @PostMapping("/wordcount")
  public Map<String,Integer> count(@Valid @RequestBody LinesRequest req) {
    // TODO: implement word counting + persist Submission with WordCount rows
    throw new ResponseStatusException(HttpStatus.NOT_IMPLEMENTED, "Implement word count and persistence");
  }
}
