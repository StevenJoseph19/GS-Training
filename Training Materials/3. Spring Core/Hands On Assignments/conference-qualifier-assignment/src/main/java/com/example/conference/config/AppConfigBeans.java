package com.example.conference.config;

import com.example.conference.repository.SpeakerRepository;
import com.example.conference.service.SpeakerService;

/**
 * TODO: Define explicit @Bean methods and select which repository implementation is injected using @Qualifier.
 *
 * Annotations to apply (AT CLASS LEVEL):
 * - @Configuration // marks this as a Java-based config class
 *
 * Methods to add (WITH method signatures below):
 * 1) public SpeakerRepository hibernateRepo()
 *    - Add @Bean("hibernateRepo") annotation.
 *    - Method body: return a NEW instance of the Hibernate-backed repository implementation class.
 *    - Return type: SpeakerRepository.
 *
 * 2) public SpeakerRepository jdbcRepo()
 *    - Add @Bean("jdbcRepo") annotation.
 *    - Method body: return a NEW instance of the JDBC-backed repository implementation class.
 *    - Return type: SpeakerRepository.
 *
 * 3) public SpeakerService speakerService(SpeakerRepository repo)
 *    - Add @Bean("speakerService") annotation.
 *    - Add @Scope("singleton") annotation to enforce singleton service (tests rely on this behavior).
 *    - Add @Qualifier("<choose one: 'jdbcRepo' or 'hibernateRepo'>") on the parameter to select the repo.
 *    - Method body: return a NEW instance of the SpeakerService implementation constructed with the chosen repo.
 *    - Return type: SpeakerService.
 */
public class AppConfigBeans {

    public SpeakerRepository hibernateRepo() {
        // TODO:
        // - Annotate this method with @Bean("hibernateRepo").
        // - Return a new instance of the Hibernate-backed repository implementation class.
        //   (Concrete class lives under com.example.conference.repository.*).
        return null; // replace after implementation
    }

    public SpeakerRepository jdbcRepo() {
        // TODO:
        // - Annotate this method with @Bean("jdbcRepo").
        // - Return a new instance of the JDBC-backed repository implementation class.
        //   (Concrete class lives under com.example.conference.repository.*).
        return null; // replace after implementation
    }

    public SpeakerService speakerService(SpeakerRepository repo) {
        // TODO:
        // - Annotate this method with @Bean("speakerService") and @Scope("singleton").
        // - Add @Qualifier("jdbcRepo") OR @Qualifier("hibernateRepo") on the 'repo' parameter to choose implementation.
        // - Return a new instance of the SpeakerService implementation, passing the injected repo into its constructor.
        return null; // replace after implementation
    }
}
