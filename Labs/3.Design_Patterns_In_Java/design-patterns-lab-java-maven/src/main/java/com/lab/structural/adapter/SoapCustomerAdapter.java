
package com.lab.structural.adapter;

/**
 * Adapter translating LegacySoapClient to CustomerService.
 */
public class SoapCustomerAdapter implements CustomerService {
    private final LegacySoapClient soap;
    public SoapCustomerAdapter(LegacySoapClient soap) { this.soap = soap; }
    @Override
    public Customer fetchById(String id) {
        var xml = soap.getCustomerXml(id);
        return XmlMapper.map(xml); // TODO: ensure exception translation if needed
    }
}
