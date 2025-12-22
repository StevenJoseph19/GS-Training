package com.cert.study.collections;

import java.util.function.*;

/**
 * OBJECTIVE: Implement the 4 core Functional Interfaces.
 */
public class LambdaBasics {
    public static void main(String[] args) {

        // TODO: Implement a Predicate<String> that checks if a string starts with "J".
        // Signature: (T) -> boolean
        Predicate<String> startsWithJ = null;

        // TODO: Implement a Consumer<String> that prints a string in Uppercase.
        // Signature: (T) -> void
        Consumer<String> printer = null;

        // TODO: Implement a Function<String, Integer> that returns the length of a string.
        // Signature: (T) -> R
        Function<String, Integer> lengthFinder = null;

        // TODO: Implement a Supplier<Double> that returns a random number.
        // Signature: () -> T
        Supplier<Double> randomGen = null;

        /* CERT TIPS TO REMEMBER:
         * 1. If the lambda body has {} and a return type, the 'return' keyword is MANDATORY.
         * 2. (s) -> s.length() is valid.
         * 3. s -> { s.length(); } is INVALID (missing return).
         */
    }
}