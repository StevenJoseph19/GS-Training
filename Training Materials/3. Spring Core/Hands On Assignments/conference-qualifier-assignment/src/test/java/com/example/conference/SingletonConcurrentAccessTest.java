
package com.example.conference;

import com.example.conference.config.AppConfigBeans;
import com.example.conference.service.SpeakerService;
import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.concurrent.*;

import static org.junit.jupiter.api.Assertions.*;

public class SingletonConcurrentAccessTest {

    @Test
    void concurrentLookupsReturnSameSingletonInstance() throws Exception {
        var ctx = new AnnotationConfigApplicationContext(AppConfigBeans.class);
        Callable<SpeakerService> call = () -> ctx.getBean(SpeakerService.class);
        var pool = Executors.newFixedThreadPool(4);
        var f1 = pool.submit(call);
        var f2 = pool.submit(call);
        var f3 = pool.submit(call);
        var s1 = f1.get();
        var s2 = f2.get();
        var s3 = f3.get();
        pool.shutdown();
        assertSame(s1, s2);
        assertSame(s1, s3);
    }
}
