package com.example.conference.service;

import com.example.conference.repository.SpeakerRepository;
import com.example.conference.model.Speaker;
import java.util.List;

/**
 * TODO: Provide a Spring service that delegates to an injected SpeakerRepository.
 *
 * Class-level annotations to apply:
 * - @Service("speakerService")   // bean name MUST be "speakerService" (tests rely on this)
 * - @Scope("singleton")          // tests check singleton behavior in some scenarios
 *
 * Constructors:
 * - public SpeakerServiceImpl()                              // optional no-args (for setter-injection demos)
 * - public SpeakerServiceImpl(SpeakerRepository repository)  // REQUIRED constructor for constructor injection
 *   - Add @Autowired to this constructor in the component-scan scenario.
 *   - Add @Qualifier("hibernateRepo") OR @Qualifier("jdbcRepo") to select implementation in the scan scenario.
 *
 * Methods:
 * - findAll():
 *   - Method body: return repository.findAll()
 *   - Return type: List<Speaker>
 *
 * - repositoryName():
 *   - Method body: return repository.name()
 *   - Return type: String
 *
 * Optional setter (if demonstrating setter injection):
 * - public void setRepository(SpeakerRepository repository)
 *   - Add @Autowired on this setter.
 *   - Add @Qualifier("jdbcRepo") OR @Qualifier("hibernateRepo") to select which repo to inject.
 */
public class SpeakerServiceImpl implements SpeakerService {

    public SpeakerServiceImpl() {
        // TODO: optionally log or leave empty
    }

    public SpeakerServiceImpl(SpeakerRepository repository) {
        // TODO:
        // - assign the 'repository' parameter to a private field for later delegation
    }

    @Override
    public List<Speaker> findAll() {
        // TODO: delegate: return repository.findAll();
        return null;
    }

    @Override
    public String repositoryName() {
        // TODO: delegate: return repository.name();
        return null;
    }

    // Optional setter-injection method:
    // public void setRepository(SpeakerRepository repository) {
    //     // TODO: assign to private field
    // }
}
