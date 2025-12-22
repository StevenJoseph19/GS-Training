package com.cert.study.advanced;

import java.sql.*;

/**
 * PROJECT: CertStudyProject
 * PROGRAM 26: JDBCConnection
 * CERT OBJECTIVE: Navigating Scrollable ResultSets and SQLException handling.
 */
public class JDBCConnection {
    public static void main(String[] args) {
        String url = "jdbc:derby:memory:certDB;create=true";
        String createTable = "CREATE TABLE status (id INT, code VARCHAR(10))";
        String insertData = "INSERT INTO status VALUES (1, 'OPEN'), (2, 'CLOSED')";

        // --- TASK 1: RESOURCE MANAGEMENT ---
        // TODO: Use try-with-resources to open Connection and Statement.
        // HINT: To scroll, the Statement must be TYPE_SCROLL_INSENSITIVE.
        try (Connection conn = DriverManager.getConnection(url)) {

            Statement stmt = conn.createStatement(); // Change this for scrolling!
            stmt.execute(createTable);
            stmt.execute(insertData);

            // --- TASK 2: RESULTSET SCROLLING ---
            // TODO: Execute a query to select all from 'status'.
            ResultSet rs = null; /* Execute query here */

            System.out.println("--- Navigating Backwards ---");
            // TODO: Move the cursor to the very last row.
            // TODO: Use a while loop and rs.previous() to print codes in reverse.

            // --- TASK 3: POSITIONING TRAPS ---
            // TODO: Call rs.first() and print the code.
            // TODO: Call rs.beforeFirst() and try to print a code immediately.

        } catch (SQLException e) {
            // CERT TEST: Print e.getErrorCode() and e.getSQLState().
            // Explain why rs.getString() fails if the cursor is at 'beforeFirst' position.
            e.printStackTrace();
        }
    }
}