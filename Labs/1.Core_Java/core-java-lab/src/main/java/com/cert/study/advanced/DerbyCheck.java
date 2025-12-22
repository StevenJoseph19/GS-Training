package com.cert.study.advanced;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DerbyCheck {
    public static void main(String[] args) {
        // --- TASK: VERIFY DRIVER AND CONNECTION ---
        String url = "jdbc:derby:memory:configTest;create=true";

        // TODO: Try to connect to the URL above.
        // TODO: Print the Database Product Name and Version from conn.getMetaData().

        try (Connection conn = DriverManager.getConnection(url)) {
            DatabaseMetaData meta = conn.getMetaData();
            System.out.println("Connection Success!");
            System.out.println("DB Product: " + meta.getDatabaseProductName());
        } catch (SQLException e) {
            System.err.println("CONFIGURATION ERROR: Derby JAR is not in the classpath!");
            e.printStackTrace();
        }
    }
}