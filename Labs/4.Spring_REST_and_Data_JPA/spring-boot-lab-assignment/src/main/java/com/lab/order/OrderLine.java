
package com.lab.order;

import com.lab.product.Product;
import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
public class OrderLine {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @ManyToOne(optional = false) private Order order;
  @ManyToOne(optional = false) private Product product;
  @Column(nullable = false) private int quantity;
  @Column(nullable = false) private BigDecimal unitPriceSnapshot;

  public Long getId() { return id; }
  public Order getOrder() { return order; }
  public void setOrder(Order order) { this.order = order; }
  public Product getProduct() { return product; }
  public void setProduct(Product product) { this.product = product; }
  public int getQuantity() { return quantity; }
  public void setQuantity(int quantity) { this.quantity = quantity; }
  public BigDecimal getUnitPriceSnapshot() { return unitPriceSnapshot; }
  public void setUnitPriceSnapshot(BigDecimal unitPriceSnapshot) { this.unitPriceSnapshot = unitPriceSnapshot; }
}
