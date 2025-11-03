
package com.lab.creational.abstractfactory;

public interface UIComponentFactory {
    Button button();
    TextField textField();
    Dialog dialog();
    String theme();
}
