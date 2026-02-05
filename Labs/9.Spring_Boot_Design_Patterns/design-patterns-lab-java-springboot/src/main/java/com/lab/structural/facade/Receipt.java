
package com.lab.structural.facade;

public class Receipt {
    private final String paymentRef;
    private final String trackingId;
    public Receipt(String paymentRef, String trackingId) {
        this.paymentRef = paymentRef; this.trackingId = trackingId;
    }
    public String getPaymentRef() { return paymentRef; }
    public String getTrackingId() { return trackingId; }
}
