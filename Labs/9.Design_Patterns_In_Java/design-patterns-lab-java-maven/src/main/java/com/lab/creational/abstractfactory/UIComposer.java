
package com.lab.creational.abstractfactory;

/**
 * Client using a family of components.
 * TODO: Implement buildLoginScreen() composing components.
 */
public class UIComposer {
    private final UIComponentFactory factory;
    public UIComposer(UIComponentFactory factory) { this.factory = factory; }
    public Screen buildLoginScreen() {
        throw new UnsupportedOperationException("TODO: compose screen using factory");
    }
}
