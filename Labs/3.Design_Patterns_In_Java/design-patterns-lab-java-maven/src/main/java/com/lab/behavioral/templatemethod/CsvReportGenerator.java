
package com.lab.behavioral.templatemethod;

import java.nio.charset.StandardCharsets;
import java.util.List;

/**
 * TODO: Implement transform and render to CSV.
 */
public class CsvReportGenerator extends ReportGenerator<String> {
    @Override
    protected List<String> transform(List<String> data) {
        throw new UnsupportedOperationException("TODO");
    }
    @Override
    protected byte[] render(List<String> data) {
        throw new UnsupportedOperationException("TODO");
    }
}
