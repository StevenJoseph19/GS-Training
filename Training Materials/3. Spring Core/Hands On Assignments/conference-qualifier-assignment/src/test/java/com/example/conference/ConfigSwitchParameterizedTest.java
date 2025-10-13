
package com.example.conference;

import com.example.conference.config.AppConfigBeans;
import com.example.conference.service.SpeakerService;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;

public class ConfigSwitchParameterizedTest {

    static Stream<Arguments> contexts() {
        return Stream.of(
                Arguments.of(AppConfigBeans.class, "JdbcSpeakerRepositoryImpl")
        );
    }

    @ParameterizedTest
    @MethodSource("contexts")
    void contextSelectsExpectedRepo(Class<?> configClass, String expectedRepoName) {
        ApplicationContext ctx = new AnnotationConfigApplicationContext(configClass);
        SpeakerService service = ctx.getBean(SpeakerService.class);
        assertEquals(expectedRepoName, service.repositoryName());
        assertNotNull(service.findAll());
        assertFalse(service.findAll().isEmpty());
    }
}
