
package com.lab.behavioral.observer;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * Subject notifying observers on status changes.
 * TODO: Implement observer registration and notifications.
 */
public class Order {
    private final String id;
    private Status status = Status.NEW;
    private final List<OrderObserver> observers = new CopyOnWriteArrayList<>();

    public Order(String id) { this.id = id; }
    public String getId() { return id; }
    public Status getStatus() { return status; }

    public void addObserver(OrderObserver o) { throw new UnsupportedOperationException("TODO"); }
    public void removeObserver(OrderObserver o) { throw new UnsupportedOperationException("TODO"); }

    public void setStatus(Status newStatus) {
        throw new UnsupportedOperationException("TODO: notify observers");
    }
}
