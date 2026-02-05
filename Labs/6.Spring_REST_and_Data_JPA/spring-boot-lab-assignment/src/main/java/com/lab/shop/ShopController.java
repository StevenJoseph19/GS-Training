
package com.lab.shop;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/shops")
public class ShopController {
  private final ShopRepo shops;
  public ShopController(ShopRepo shops) { this.shops = shops; }

  public record ShopReq(@NotBlank String name) {}

  @PostMapping
  public Shop create(@Valid @RequestBody ShopReq req) {
    // TODO: implement create and return 201
    throw new ResponseStatusException(HttpStatus.NOT_IMPLEMENTED, "Create shop");
  }
}
