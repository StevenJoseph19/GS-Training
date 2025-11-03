
package com.lab.behavioral.templatemethod;

import org.junit.jupiter.api.Test;
import java.util.List;
import static org.assertj.core.api.Assertions.*;

public class TemplateMethodTest {
    @Test
    void generatesCsvReport() {
        var gen = new CsvReportGenerator();
        assertThatThrownBy(() -> gen.generate(List.of("a","b"))).isInstanceOf(UnsupportedOperationException.class);
    }
}
