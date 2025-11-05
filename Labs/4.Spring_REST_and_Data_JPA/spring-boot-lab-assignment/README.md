
# Spring Boot Lab Assignment – REST + Spring Data JPA

**Duration:** ~6 hours | **Java 17** | **Spring Boot 3.3.x**

This lab contains **10 tasks**. Each task has failing tests (red). Your job is to implement the code to make them pass (green).

Run all tests:
```bash
mvn -q -DskipTests=false test
```
Run the app:
```bash
mvn spring-boot:run
```

**Hints**
- Use transactional services where appropriate.
- Write validation (`jakarta.validation`) and return proper HTTP status codes.
- Prefer DTOs over exposing entities from controllers.
- Keep N+1 in mind; use `@EntityGraph` or projections where asked.

Tasks overview:
1. **Word Count REST + persistence** – `POST /api/wordcount` → word frequency JSON; persist snapshot.
2. **Shop & Product CRUD** – Products belong to Shops. Pagination & sorting.
3. **Search/Filter** – Derived queries + `@Query` with optional params.
4. **Customer/Order/OrderLine** – Place an order across products from multiple shops.
5. **Inventory Optimistic Locking** – `@Version` to prevent oversell.
6. **Auditing & Soft Delete** – `@CreatedDate`, `@LastModifiedDate`, `active` flag.
7. **PATCH Partial Update** – Update only provided Product fields.
8. **Bulk CSV Import** – Multipart upload of products.
9. **N+1 Avoidance** – `@EntityGraph` + projections to fetch Orders with Lines.
10. **Specifications** – Dynamic search for Orders with pagination & sorting.

> Many controllers currently return **501 Not Implemented**. Implement the TODOs to satisfy tests.
