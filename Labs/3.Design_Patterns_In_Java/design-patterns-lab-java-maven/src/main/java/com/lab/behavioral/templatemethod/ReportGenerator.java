
package com.lab.behavioral.templatemethod;

import java.util.List;

/**
 * Defines the algorithm skeleton with hook methods.
 */
public abstract class ReportGenerator<T> {
    public final byte[] generate(List<T> data) {
        var cleaned = clean(data);
        var transformed = transform(cleaned);
        return render(transformed);
    }
    protected List<T> clean(List<T> data) { return data; }
    protected abstract List<T> transform(List<T> data);
    protected abstract byte[] render(List<T> data);
}
