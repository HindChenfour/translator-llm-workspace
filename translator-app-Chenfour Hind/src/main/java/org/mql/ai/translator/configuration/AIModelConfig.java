package org.mql.ai.translator.configuration;

import java.nio.charset.StandardCharsets;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AIModelConfig {
	

	@Bean
	public ChatClient chatClient(ChatClient.Builder builder) {
		String translatorSystem = "";
		try {
			translatorSystem = new String(
				this.getClass().getResourceAsStream("/prompts/translator-system.txt").readAllBytes(),
				StandardCharsets.UTF_8
			);
		} 
		catch (Exception e) {
			System.out.println("Error while reading file : " + e);
		}
		
		ChatClient chatClient = builder.defaultSystem(translatorSystem).build();
		
		return chatClient;
	}
}
