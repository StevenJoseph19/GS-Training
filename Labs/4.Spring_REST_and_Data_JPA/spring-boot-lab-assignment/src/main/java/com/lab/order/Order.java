
package com.lab.order;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.*;

@Entity
@Table(name = "orders")
public class Order {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(optional = false)
  private Customer customer;

  @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<OrderLine> lines = new ArrayList<>();

  @Column(nullable = false)
  private BigDecimal total = BigDecimal.ZERO;

  public Long getId() { return id; }
  public Customer getCustomer() { return customer; }
  public void setCustomer(Customer customer) { this.customer = customer; }
  public List<OrderLine> getLines() { return lines; }
  public BigDecimal getTotal() { return total; }
  public void setTotal(BigDecimal total) { this.total = total; }
}
