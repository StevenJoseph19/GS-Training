
package com.lab.inventory;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class InventoryService {
  private final InventoryRepo repo;
  public InventoryService(InventoryRepo repo) { this.repo = repo; }

  @Transactional
  public void reserve(Long productId, int qty) {
    // TODO: fetch, check onHand, decrement; rely on @Version for optimistic lock
    throw new UnsupportedOperationException("Implement reserve");
  }
}
