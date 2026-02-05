
package com.lab.order;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;

@RestController
@RequestMapping("/api/customers")
public class OrderController {
  private final OrderService svc;
  public OrderController(OrderService svc) { this.svc = svc; }

  public record PlaceOrderReq(@NotNull List<@Valid Line> lines) { }
  public record Line(@NotNull Long productId, @Min(1) int qty) {}

  @PostMapping("/{customerId}/orders")
  @ResponseStatus(HttpStatus.CREATED)
  public Map<String,Object> place(@PathVariable Long customerId, @Valid @RequestBody PlaceOrderReq req) {
    // TODO: delegate to service and return {id,total}
    throw new ResponseStatusException(HttpStatus.NOT_IMPLEMENTED, "Place order");
  }
}
