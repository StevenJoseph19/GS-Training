package com.example.conference.config;

/**
 * TODO: Turn this into a Spring Java configuration class that enables component scanning.
 *
 * Annotations to apply (AT CLASS LEVEL):
 * - @Configuration            // marks this as a Spring config class
 * - @ComponentScan("com.example.conference") // scans for @Service, @Repository, etc.
 *
 * Method body guidelines:
 * - No methods are required here; component scanning discovers beans from service/repository packages.
 */
public class AppConfig {
    // Intentionally empty: after annotations are added, component scan will find beans.
}
