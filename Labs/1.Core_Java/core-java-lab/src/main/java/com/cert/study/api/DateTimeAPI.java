package com.cert.study.api;

import java.time.*;
import java.time.temporal.UnsupportedTemporalTypeException;

/**
 * PROJECT: CertStudyProject
 * PROGRAM 12: DateTimeAPI
 * ASSIGNMENT OBJECTIVE: Implement Date/Time math and identify invalid type operations.
 */
public class DateTimeAPI {
    public static void main(String[] args) {

        // --- TASK 1: DATE-BASED MATH (PERIOD) ---
        // Requirement: Use LocalDate.now() as a base.
        // Requirement: Create a Period representing 1 Month and 15 Days.
        // Requirement: Apply the period to the date and print the "Exam Date".

        // TODO: Initialize LocalDate 'today'
        // TODO: Initialize Period 'p'
        // TODO: Calculate and print 'examDate'


        // --- TASK 2: TIME-BASED MATH (DURATION) ---
        // Requirement: Use LocalTime.of() to set a start time at 09:00:00.
        // Requirement: Create a Duration representing 2 Hours and 30 Minutes.
        // Requirement: Calculate the end time and extract total minutes from the Duration.

        // TODO: Initialize LocalTime 'startTime'
        // TODO: Initialize Duration 'd'
        // TODO: Calculate 'endTime' and print it along with d.toMinutes()


        // --- TASK 3: THE IMMUTABILITY TRAP ---
        // Requirement: Prove that LocalDate is immutable.
        // Requirement: Perform an addition (e.g., plusDays(5)) without reassignment.

        // TODO: Call a manipulation method on 'today'
        // TODO: Print 'today' immediately after.
        // Logic Check: Did the value change? Why or why not?


        // --- TASK 4: THE CROSS-TYPE TRAP ---
        // Requirement: Attempt to add a Duration (time-based) to a LocalDate (date-only).
        // Requirement: Catch the specific exception thrown by the JVM.

        // TODO: Try today.plus(d) inside a try-catch block.
        // TODO: Print the name of the caught Exception.


        /* * CERTIFICATION LOGIC CHECK (Self-Study):
         * 1. If you write: Period p = Period.ofYears(1).ofMonths(2);
         * What is the value of 'p'? (Hint: Static methods are not builders).
         * 2. Can you calculate the Duration between two LocalDate objects?
         * (Hint: Duration requires a time component like LocalDateTime).
         */
    }
}