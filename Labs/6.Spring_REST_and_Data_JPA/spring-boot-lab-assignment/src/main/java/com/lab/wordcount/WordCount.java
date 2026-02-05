
package com.lab.wordcount;

import jakarta.persistence.*;

@Entity
@Table(name = "wc_word_count", uniqueConstraints = @UniqueConstraint(columnNames = {"submission_id","word"}))
public class WordCount {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(optional = false, fetch = FetchType.LAZY)
  @JoinColumn(name = "submission_id")
  private Submission submission;

  @Column(nullable = false)
  private String word;

  @Column(nullable = false)
  private Integer count;

  public Long getId() { return id; }
  public Submission getSubmission() { return submission; }
  public void setSubmission(Submission submission) { this.submission = submission; }
  public String getWord() { return word; }
  public void setWord(String word) { this.word = word; }
  public Integer getCount() { return count; }
  public void setCount(Integer count) { this.count = count; }
}
