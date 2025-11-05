
package com.lab.wordcount;

import jakarta.persistence.*;
import java.time.Instant;
import java.util.*;

@Entity
@Table(name = "wc_submission")
public class Submission {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, updatable = false)
  private Instant createdAt = Instant.now();

  @OneToMany(mappedBy = "submission", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<WordCount> counts = new ArrayList<>();

  public Long getId() { return id; }
  public Instant getCreatedAt() { return createdAt; }
  public List<WordCount> getCounts() { return counts; }
}
