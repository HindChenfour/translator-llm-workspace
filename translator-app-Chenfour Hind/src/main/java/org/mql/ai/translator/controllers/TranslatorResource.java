package org.mql.ai.translator.controllers;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/translator")
@CrossOrigin("*")
public class TranslatorResource {
	private ChatClient chatClient;
	
	public TranslatorResource(ChatClient chatClient) {
		this.chatClient = chatClient;
	}
	
	@GetMapping(params = {"prompt"})
	public String traslate(@RequestParam String prompt) {
		return chatClient.prompt(prompt).call().content();
	}
}
