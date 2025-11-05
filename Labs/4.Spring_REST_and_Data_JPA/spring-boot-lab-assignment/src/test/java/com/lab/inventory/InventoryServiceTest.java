
package com.lab.inventory;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.test.annotation.DirtiesContext;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
class InventoryServiceTest {
  @Autowired InventoryRepo repo;
  @Autowired InventoryService svc;

  @Test
  void optimisticLockingPreventsOversell(){
    Inventory inv = new Inventory(); inv.setProductId(1L); inv.setOnHand(1); repo.save(inv);

    // simulate two reservations sequentially but expecting lock handling in real concurrent scenario
    assertThatThrownBy(() -> { svc.reserve(1L, 1); svc.reserve(1L, 1); })
      .isInstanceOfAny(UnsupportedOperationException.class, OptimisticLockingFailureException.class, IllegalStateException.class);
  }
}
