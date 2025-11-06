
package com.lab.category;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    private final CategoryRepo repo;

    public CategoryController(CategoryRepo repo) {
        this.repo = repo;
    }

    public record CatReq(@NotBlank String name) {
    }

    @PostMapping
    public Category create(@Valid @RequestBody CatReq req) {
        // TODO: save and return
        throw new ResponseStatusException(HttpStatus.NOT_IMPLEMENTED, "Create category");
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void softDelete(@PathVariable Long id) {
        // TODO: set active=false
        throw new ResponseStatusException(HttpStatus.NOT_IMPLEMENTED, "Soft delete");
    }

    @GetMapping
    public Page<Category> list(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        // TODO: return active categories
        throw new ResponseStatusException(HttpStatus.NOT_IMPLEMENTED, "List active");
    }
}
