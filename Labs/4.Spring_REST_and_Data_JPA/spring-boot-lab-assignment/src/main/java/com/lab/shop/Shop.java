
package com.lab.shop;

import jakarta.persistence.*;

@Entity
public class Shop {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(nullable = false, unique = true)
  private String name;

  public Long getId() { return id; }
  public String getName() { return name; }
  public void setName(String name) { this.name = name; }
}
