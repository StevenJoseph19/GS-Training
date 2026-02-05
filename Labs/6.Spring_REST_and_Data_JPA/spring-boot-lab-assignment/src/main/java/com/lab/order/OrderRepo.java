
package com.lab.order;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.jpa.repository.EntityGraph;
import java.util.*;

public interface OrderRepo extends JpaRepository<Order, Long>, JpaSpecificationExecutor<Order> {
  @EntityGraph(attributePaths = {"lines", "lines.product"})
  @Query("select o from Order o where o.customer.id = :cid")
  List<Order> findFullByCustomer(Long cid);
}
