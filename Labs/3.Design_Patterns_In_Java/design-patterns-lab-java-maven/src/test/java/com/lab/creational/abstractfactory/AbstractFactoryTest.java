
package com.lab.creational.abstractfactory;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.*;

public class AbstractFactoryTest {
    @Test
    void buildsDarkThemeScreen() {
        var composer = new UIComposer(new StubDarkThemeFactory());
        assertThatThrownBy(composer::buildLoginScreen)
            .isInstanceOf(UnsupportedOperationException.class);
    }

    // Minimal stub factory for testing composition later
    static class StubDarkThemeFactory implements UIComponentFactory {
        public Button button() { return () -> "DARK_BUTTON"; }
        public TextField textField() { return () -> "DARK_TEXTFIELD"; }
        public Dialog dialog() { return () -> "DARK_DIALOG"; }
        public String theme() { return "DARK"; }
    }
}
