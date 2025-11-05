
package com.lab.order;

import com.lab.product.Product;
import com.lab.product.ProductRepo;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.*;

@Service
public class OrderService {
  private final OrderRepo orders; private final CustomerRepo customers; private final ProductRepo products;
  public OrderService(OrderRepo orders, CustomerRepo customers, ProductRepo products) {
    this.orders = orders; this.customers = customers; this.products = products; }

  public record LineRequest(Long productId, int qty) {}

  @Transactional
  public Order place(Long customerId, List<LineRequest> reqs) {
    // TODO: build order with lines and total; snapshot prices; validate quantities
    throw new UnsupportedOperationException("Implement order placement");
  }
}
