package com.cert.study.advanced;

/**
 * PROJECT: CertStudyProject
 * PROGRAM 23: MultithreadingBasics
 * CERT OBJECTIVE: Differentiate between thread execution and method calls.
 */
public class MultithreadingBasics {
    public static void main(String[] args) {

        Runnable task = () -> {
            System.out.println("Current Thread: " + Thread.currentThread().getName());
        };

        Thread myThread = new Thread(task, "Worker-Thread");

        // TODO: Call myThread.run().
        // Observe which thread name prints (it will be "main").

        // TODO: Call myThread.start().
        // Observe which thread name prints (it will be "Worker-Thread").

        // TODO: Add a print statement here: "End of Main".
        // Note: Does "End of Main" always print last? (Answer: No, execution order is non-deterministic).

        // TODO: Try to call myThread.start() a second time after it has finished.
        // Wrap it in a try-catch for IllegalThreadStateException.
    }
}