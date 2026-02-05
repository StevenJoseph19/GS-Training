
package com.lab.category;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category, Long> {
  Page<Category> findByActiveTrue(Pageable pageable);
}
