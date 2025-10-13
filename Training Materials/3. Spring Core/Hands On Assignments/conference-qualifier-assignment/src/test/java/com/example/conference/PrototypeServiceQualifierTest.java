
package com.example.conference;

import com.example.conference.repository.JdbcSpeakerRepositoryImpl;
import com.example.conference.repository.SpeakerRepository;
import com.example.conference.service.SpeakerService;
import com.example.conference.service.SpeakerServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.*;

import static org.junit.jupiter.api.Assertions.*;

public class PrototypeServiceQualifierTest {

    @Configuration
    static class PrototypeSvcConfig {
        @Bean("jdbcRepo")
        public SpeakerRepository repo() {
            return new JdbcSpeakerRepositoryImpl();
        }

        @Bean("speakerService")
        @Scope("prototype")
        public SpeakerService svc(@Qualifier("jdbcRepo") SpeakerRepository repo) {
            return new SpeakerServiceImpl(repo);
        }
    }

    @Test
    void eachLookupReturnsANewServiceInstance_butSameRepoInjected() {
        var ctx = new AnnotationConfigApplicationContext(PrototypeSvcConfig.class);
        var s1 = ctx.getBean("speakerService", SpeakerService.class);
        var s2 = ctx.getBean("speakerService", SpeakerService.class);
        assertNotSame(s1, s2);
        assertEquals("JdbcSpeakerRepositoryImpl", s1.repositoryName());
        assertEquals("JdbcSpeakerRepositoryImpl", s2.repositoryName());
    }
}
