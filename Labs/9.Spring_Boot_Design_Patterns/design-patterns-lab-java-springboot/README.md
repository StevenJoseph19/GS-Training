
# Design Patterns Lab (Java, Maven + Spring Boot)

This is a **hands-on lab skeleton** for common design patterns in Java with a 
small **Spring Boot** layer to try patterns via HTTP.

## Prerequisites
- JDK 17+
- Maven 3.8+

## Quick Start
```bash
mvn spring-boot:run
# Try (after you implement the TODOs):
# curl 'http://localhost:8080/api/tax?region=IN&amount=1000'
```

> Many classes contain `// TODO` markers. Unit tests are provided to guide your implementation.
> The REST endpoints are present but return **501 Not Implemented** until you implement the exercises and wire them in the controllers.

## Project Layout
- **Spring Boot app** under `com.lab.app` (controllers & configuration)
- **Pattern exercises** under `com.lab.creational|structural|behavioral`
- **Tests** under `src/test/java` (use them to drive your implementation)

## Coverage & Quality
- JaCoCo coverage report: `target/site/jacoco/index.html`
- Checkstyle rules: `settings/checkstyle.xml`

Good luck & have fun!
