package com.cert.study.collections;

import java.util.*;

/**
 * PROJECT: CertStudyProject
 * PROGRAM 20: MapOperations
 * OBJECTIVE: Understand key differences between HashMap and TreeMap.
 */
public class MapOperations {

    public static void main(String[] args) {

        System.out.println("--- 1. HASHMAP TEST ---");
        // TODO: Create a HashMap of Integer keys and String values.
        // Add keys 3, 1, 4, 2 in that order.
        // Add a null key and a null value.
        // CERT TIP: HashMap is $O(1)$ for get/put. It does NOT guarantee order.


        System.out.println("\n--- 2. TREEMAP TEST ---");
        // TODO: Create a TreeMap using the same Integer/String pairs.
        // CERT TIP: TreeMap is $O(\log n)$. It sorts by "Natural Order" of keys.


        System.out.println("\n--- 3. THE NULL KEY CHALLENGE ---");
        // TODO: Attempt to put a null key into your TreeMap inside a try-catch.
        // CERT TIP: TreeMap uses compareTo(). You cannot compare anything to null.
        try {
            // Your code here
        } catch (NullPointerException e) {
            System.out.println("Caught Expected Error: TreeMap does not permit null keys!");
        }


        System.out.println("\n--- 4. IMMUTABLE MAPS (Java 9+) ---");
        // TODO: Create a map using Map.of("A", 1, "B", 2).
        // Attempt to .put("C", 3) and catch the exception.
        // CERT TIP: Map.of() returns an unmodifiable map. It also forbids nulls entirely.
        try {
            // Your code here
        } catch (UnsupportedOperationException e) {
            System.out.println("Caught Expected Error: Map.of() produces an immutable map.");
        }


        System.out.println("\n--- 5. MAP NAVIGATION ---");
        // TODO: Use the forEach() method (Lambda) to print all Key-Value pairs in your TreeMap.
        // Syntax: map.forEach((k, v) -> ... )

    }
}