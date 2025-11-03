
package com.lab.behavioral.observer;

import com.lab.behavioral.observer.Status;
import com.lab.behavioral.observer.Order;

public interface OrderObserver {
    void onStatusChanged(Order order, Status oldStatus, Status newStatus);
}
