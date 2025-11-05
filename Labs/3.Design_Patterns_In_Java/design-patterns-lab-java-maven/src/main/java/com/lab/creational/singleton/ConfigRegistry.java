
package com.lab.creational.singleton;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Initialization-on-demand holder idiom.
 * TODO: add get/set methods and discuss testability.
 */
public class  ConfigRegistry {
    private final Map<String, String> store = new ConcurrentHashMap<>();
    private ConfigRegistry() {}
    private static class Holder { private static final ConfigRegistry INSTANCE = new ConfigRegistry(); }
    public static ConfigRegistry getInstance() { return Holder.INSTANCE; }

    public String get(String key) { throw new UnsupportedOperationException("TODO"); }
    public void set(String key, String value) { throw new UnsupportedOperationException("TODO"); }
}
