
package com.lab.product;

import com.lab.shop.ShopRepo;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.util.Map;

@RestController
@RequestMapping("/api/products")
public class ProductController {
  private final ProductRepo products; private final ShopRepo shops;
  public ProductController(ProductRepo products, ShopRepo shops) { this.products = products; this.shops = shops; }

  public record CreateReq(@NotNull Long shopId, @NotBlank String name, @NotNull @DecimalMin("0.00") BigDecimal price) {}

  @PostMapping
  public Product create(@Valid @RequestBody CreateReq req) {
    // TODO: create product under existing shop; 404 if shop not found
    throw new ResponseStatusException(HttpStatus.NOT_IMPLEMENTED, "Create product");
  }

  @GetMapping("/shop/{shopId}")
  public Page<Product> byShop(@PathVariable Long shopId, @RequestParam(defaultValue = "0") int page,
                              @RequestParam(defaultValue = "10") int size,
                              @RequestParam(defaultValue = "price,asc") String sort) {
    // TODO: return paged products for shop with sorting
    throw new ResponseStatusException(HttpStatus.NOT_IMPLEMENTED, "List by shop");
  }

  public record PatchReq(@Size(min=2,max=100) String name, @DecimalMin("0.00") BigDecimal price) {}

  @PatchMapping("/{id}")
  public Product patch(@PathVariable Long id, @RequestBody PatchReq patch) {
    // TODO: partial update fields present in JSON
    throw new ResponseStatusException(HttpStatus.NOT_IMPLEMENTED, "Patch product");
  }

  @PostMapping(value = "/import", consumes = "multipart/form-data")
  public Map<String,Object> importCsv(@RequestPart("file") MultipartFile file) {
    // TODO: parse CSV with columns: shopId,name,price ; create in batch; return counts
    throw new ResponseStatusException(HttpStatus.NOT_IMPLEMENTED, "CSV import");
  }

  @GetMapping("/search")
  public Page<Product> search(@RequestParam(required=false) Long shopId,
                              @RequestParam(required=false) String name,
                              @RequestParam(required=false) BigDecimal min,
                              @RequestParam(required=false) BigDecimal max,
                              @RequestParam(defaultValue="0") int page,
                              @RequestParam(defaultValue="10") int size) {
    // TODO: delegate to ProductRepo.search
    throw new ResponseStatusException(HttpStatus.NOT_IMPLEMENTED, "Search");
  }
}
