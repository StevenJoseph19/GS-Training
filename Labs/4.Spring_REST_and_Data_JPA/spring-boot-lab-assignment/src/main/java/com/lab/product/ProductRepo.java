
package com.lab.product;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.math.BigDecimal;

public interface ProductRepo extends JpaRepository<Product, Long> {
  Page<Product> findByShopId(Long shopId, Pageable pageable);

  @Query("""
    select p from Product p
    where (:shopId is null or p.shop.id = :shopId)
      and (:min is null or p.price >= :min)
      and (:max is null or p.price <= :max)
      and (:name is null or lower(p.name) like lower(concat('%', :name, '%')))
  """)
  Page<Product> search(@Param("shopId") Long shopId,
                       @Param("min") BigDecimal min,
                       @Param("max") BigDecimal max,
                       @Param("name") String name,
                       Pageable pageable);
}
