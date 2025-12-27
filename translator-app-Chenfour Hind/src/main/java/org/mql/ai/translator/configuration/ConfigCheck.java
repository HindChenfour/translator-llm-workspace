package org.mql.ai.translator.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ConfigCheck {

    public ConfigCheck(@Value("${spring.ai.google.genai.api-key}") String key) {
        System.out.println("API KEY DETECTED -> " + (key));
    }
}
