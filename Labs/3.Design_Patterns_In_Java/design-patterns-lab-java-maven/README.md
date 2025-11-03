
# Design Patterns Lab (Java, Maven)

A hands-on lab skeleton covering common design patterns often asked in interviews: Factory Method, Abstract Factory, Builder, Singleton, Adapter, Decorator, Facade, Strategy, Observer, and Template Method.

## Prerequisites
- JDK 17+
- Maven 3.8+

## Getting Started
```bash
mvn -v
mvn clean test
```

Work primarily under `src/main/java` and run tests in `src/test/java`. Each exercise contains **TODO** comments guiding the implementation.

## Structure
```
src/
  main/java/com/lab/
    creational/
    structural/
    behavioral/
  test/java/com/lab/
```

## Exercises
Each pattern has a minimal domain and failing tests.
- Implement the TODOs, refactor where necessary, and make tests pass.
- Prefer composition over inheritance, follow SOLID, and keep code testable.

## Notes
- Checkstyle rules included under `settings/checkstyle.xml` (basic).
- JaCoCo enabled: run `mvn test` to generate coverage under `target/site/jacoco/`.

Happy hacking!
![img.png](img.png)