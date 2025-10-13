package com.example.conference.repository;

import com.example.conference.model.Speaker;
import java.util.List;

/**
 * TODO: Provide a repository implementation that simulates a Hibernate-backed data source.
 *
 * Class-level annotations to apply:
 * - @Repository("hibernateRepo") // bean name MUST be "hibernateRepo" (tests rely on this)
 *
 * Methods:
 * - findAll():
 *   - Method body: return a LIST of speakers typical to the Hibernate sample (e.g., "John Doe", "Ada Lovelace").
 *   - Return type: List<Speaker>
 *
 * - name():
 *   - Method body: return EXACTLY "HibernateSpeakerRepositoryImpl"
 *   - Return type: String
 */
public class HibernateSpeakerRepositoryImpl implements SpeakerRepository {

    @Override
    public List<Speaker> findAll() {
        // TODO:
        // - Construct and return a List<Speaker> with sample names appropriate to the Hibernate path.
        // - Do NOT return null; tests expect non-empty content.
        return null;
    }

    @Override
    public String name() {
        // TODO: return "HibernateSpeakerRepositoryImpl"
        return null;
    }
}
