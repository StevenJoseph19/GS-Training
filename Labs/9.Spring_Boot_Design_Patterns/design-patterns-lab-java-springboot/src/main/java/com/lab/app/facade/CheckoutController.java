
package com.lab.app.facade;

import com.lab.structural.facade.CheckoutFacade;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@RestController
public class CheckoutController {
    private final CheckoutFacade facade;
    public CheckoutController(CheckoutFacade facade) { this.facade = facade; }

    @PostMapping("/api/checkout")
    public Map<String, Object> checkout(@RequestBody Map<String, Object> orderPayload) {
        // TODO: Map payload -> Order (Builder exercise), then call facade.checkout(order)
        throw new ResponseStatusException(HttpStatus.NOT_IMPLEMENTED, "TODO: implement Order builder and facade orchestration");
    }
}
