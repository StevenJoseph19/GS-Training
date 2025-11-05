
package com.lab.inventory;

import jakarta.persistence.*;

@Entity
public class Inventory {
  @Id
  private Long productId; // same id as Product

  @Version
  private Long version;

  @Column(nullable = false)
  private int onHand;

  public Long getProductId() { return productId; }
  public void setProductId(Long productId) { this.productId = productId; }
  public Long getVersion() { return version; }
  public int getOnHand() { return onHand; }
  public void setOnHand(int onHand) { this.onHand = onHand; }
}
