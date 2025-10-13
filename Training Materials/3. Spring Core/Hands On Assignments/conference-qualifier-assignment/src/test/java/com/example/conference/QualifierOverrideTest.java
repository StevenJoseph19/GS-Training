
package com.example.conference;

import com.example.conference.repository.HibernateSpeakerRepositoryImpl;
import com.example.conference.repository.JdbcSpeakerRepositoryImpl;
import com.example.conference.repository.SpeakerRepository;
import com.example.conference.service.SpeakerService;
import com.example.conference.service.SpeakerServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.*;

import static org.junit.jupiter.api.Assertions.*;

public class QualifierOverrideTest {

    @Configuration
    static class BeansHibernateConfig {
        @Bean("hibernateRepo")
        public SpeakerRepository h() {
            return new HibernateSpeakerRepositoryImpl();
        }

        @Bean("jdbcRepo")
        public SpeakerRepository j() {
            return new JdbcSpeakerRepositoryImpl();
        }

        @Bean("speakerService")
        public SpeakerService svc(@Qualifier("hibernateRepo") SpeakerRepository repo) {
            return new SpeakerServiceImpl(repo);
        }
    }

    @Test
    void explicitBeanQualifierOverridesDefaultChoice() {
        var ctx = new AnnotationConfigApplicationContext(BeansHibernateConfig.class);
        var service = ctx.getBean(SpeakerService.class);
        assertEquals("HibernateSpeakerRepositoryImpl", service.repositoryName());
    }
}
