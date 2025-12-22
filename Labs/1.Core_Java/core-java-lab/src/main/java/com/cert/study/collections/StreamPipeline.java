package com.cert.study.collections;

import java.util.*;
import java.util.stream.*;

/**
 * OBJECTIVE: Practice filter, map, flatMap, and terminal collectors.
 */
public class StreamPipeline {
    public static void main(String[] args) {
        List<String> tech = List.of("Java", "Python", "JavaScript", "C++", "Ruby");

        // TODO: Create a Stream pipeline that:
        // 1. Filters names longer than 3 characters.
        // 2. Maps them to Uppercase.
        // 3. Collects them into a List.
        List<String> result = tech.stream()
                // .filter(...)
                // .map(...)
                .collect(Collectors.toList());

        // TODO: Understand flatMap.
        // Given a list of lists, "flatten" them into a single stream of Strings.
        List<List<String>> nested = List.of(
                List.of("A", "B"),
                List.of("C", "D")
        );
        // Hint: nested.stream().flatMap(List::stream)...

        /* CERT TIPS TO REMEMBER:
         * 1. Streams are LAZY. Intermediate operations (filter/map) don't execute
         * until a terminal operation (collect/forEach/count) is called.
         * 2. You cannot REUSE a stream once a terminal operation has been called.
         */
    }
}