
package com.lab.creational.singleton;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.*;

public class SingletonTest {
    @Test
    void singletonIdentity() {
        assertThat(ConfigRegistry.getInstance()).isSameAs(ConfigRegistry.getInstance());
    }
}
