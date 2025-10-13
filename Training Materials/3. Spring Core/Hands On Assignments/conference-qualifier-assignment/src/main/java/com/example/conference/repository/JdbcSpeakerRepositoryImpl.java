package com.example.conference.repository;

import com.example.conference.model.Speaker;
import java.util.List;

/**
 * TODO: Provide a repository implementation that simulates a JDBC-backed data source.
 *
 * Class-level annotations to apply:
 * - @Repository("jdbcRepo") // bean name MUST be "jdbcRepo" (tests rely on this)
 *
 * Methods:
 * - findAll():
 *   - Method body: return a LIST of speakers typical to the JDBC sample (e.g., "Grace Hopper", "James Gosling").
 *   - Return type: List<Speaker>
 *
 * - name():
 *   - Method body: return EXACTLY "JdbcSpeakerRepositoryImpl"
 *   - Return type: String
 */
public class JdbcSpeakerRepositoryImpl implements SpeakerRepository {

    @Override
    public List<Speaker> findAll() {
        // TODO:
        // - Construct and return a List<Speaker> with sample names appropriate to the JDBC path.
        // - Do NOT return null; tests expect non-empty content.
        return null;
    }

    @Override
    public String name() {
        // TODO: return "JdbcSpeakerRepositoryImpl"
        return null;
    }
}
