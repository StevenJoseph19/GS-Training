
package com.lab.creational.abstractfactory;

/**
 * Simple DTO representing a composed screen.
 */
public class Screen {
    private final String theme;
    public Screen(String theme) { this.theme = theme; }
    public String getTheme() { return theme; }
}
