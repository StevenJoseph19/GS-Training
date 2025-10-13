package com.example.conference;

/**
 * TODO: Make this the entry point for the program.
 *
 * Requirements:
 * 1) Create a Spring ApplicationContext using ANNOTATION-BASED configuration.
 *    - Use EXACTLY ONE of the two config classes:
 *      a) Component-scan style: com.example.conference.config.AppConfig
 *      b) Explicit @Bean style:  com.example.conference.config.AppConfigBeans
 * 2) Obtain the SpeakerService bean (by type or by name).
 * 3) Print to stdout:
 *    - "Using repo: " + service.repositoryName()
 *    - "Speakers: " + service.findAll()
 * 4) Demonstrate singleton behavior:
 *    - Retrieve the SpeakerService bean twice and print whether both references are the same.
 *
 * Annotations to use:
 * - None here. This class is a plain Java main.
 *
 * Method body guidelines:
 * - Use new AnnotationConfigApplicationContext(<ChosenConfig>.class) to bootstrap.
 * - Get the bean via ctx.getBean(SpeakerService.class) or by name "speakerService".
 * - System.out.println the required outputs.
 * - Compare two bean lookups with (service == service2).
 */
public class Application {

    public static void main(String[] args) {
        // TODO: Implement the steps described above.
        // HINT: Choose ONE config class (AppConfig OR AppConfigBeans) and stick to it for this run.
    }
}
