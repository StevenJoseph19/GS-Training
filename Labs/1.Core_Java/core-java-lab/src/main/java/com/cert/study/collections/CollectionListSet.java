// 1. The package declaration must ALWAYS be the first non-comment line.
package com.cert.study.collections;

// 2. Imports come after the package declaration.
import java.util.*;

/**
 * PROJECT: CertStudyProject
 * PROGRAM 19: CollectionListSet
 * OBJECTIVE: Understand the behavioral differences between List and Set implementations.
 */
public class CollectionListSet {

    public static void main(String[] args) {

        System.out.println("--- 1. ARRAYLIST TEST ---");
        // TODO: Create an ArrayList of Strings.
        // Add "A", "B", "A" (a duplicate), and "C".
        // CERT TIP: ArrayList allows duplicates and maintains insertion order.

        System.out.println("\n--- 2. LINKEDLIST TEST ---");
        // TODO: Create a LinkedList of Strings.
        // Add "Middle", then use addFirst("Start") and addLast("End").
        // CERT TIP: Notice how you might need to cast to LinkedList to see Deque methods.

        System.out.println("\n--- 3. HASHSET TEST ---");
        // TODO: Create a HashSet of Strings.
        // Add "Java", "Python", "Java" (duplicate), and null.
        // CERT TIP: HashSet provides NO guarantee of iteration order.

        System.out.println("\n--- 4. TREESET TEST ---");
        // TODO: Create a TreeSet of Strings.
        // Add "Zebra", "Apple", "Mango".
        // CERT TIP: TreeSet is a SortedSet. Elements are stored in "Natural Order".

        System.out.println("\n--- 5. THE NULL CHALLENGE ---");
        // TODO: Try to add a null value to your TreeSet inside a try-catch block.
        try {
            // Your code here
        } catch (NullPointerException e) {
            System.out.println("Caught Expected Error: TreeSet does not permit null!");
        }

        System.out.println("\n--- 6. CONVERSION TEST ---");
        // TODO: Create a List with duplicates, then convert it to a Set to "filter" it.
        // Hint: Set<String> mySet = new HashSet<>(myList);
    }
}