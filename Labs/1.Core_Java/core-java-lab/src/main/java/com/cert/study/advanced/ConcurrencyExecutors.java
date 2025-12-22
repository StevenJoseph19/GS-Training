package com.cert.study.advanced;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;

public class ConcurrencyExecutors {
    private static int sharedCounter = 0;
    private static AtomicInteger atomicCounter = new AtomicInteger(0);

    public static void main(String[] args) throws InterruptedException {
        // Initial values: 10 threads, 1000 tasks
        ExecutorService service = Executors.newFixedThreadPool(10);

        // TODO: Submit 1000 tasks to the service.
        // TODO: Inside each task, increment 'sharedCounter' and 'atomicCounter'.

        // TODO: Properly shut down the executor service.
        // TODO: Use awaitTermination to wait for tasks to finish.

        // CERT TEST: Print both counters.
        // Explain why sharedCounter is non-deterministic (Race Condition).
    }
}