
package com.lab.product;

import com.lab.shop.Shop;
import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
public class Product {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @ManyToOne(optional = false, fetch = FetchType.LAZY)
  private Shop shop;
  @Column(nullable = false)
  private String name;
  @Column(nullable = false)
  private BigDecimal price;

  public Long getId() { return id; }
  public Shop getShop() { return shop; }
  public void setShop(Shop shop) { this.shop = shop; }
  public String getName() { return name; }
  public void setName(String name) { this.name = name; }
  public BigDecimal getPrice() { return price; }
  public void setPrice(BigDecimal price) { this.price = price; }
}
