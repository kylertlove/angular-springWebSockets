package main;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;

@RestController
public class MainController {

    private int numVal = 0;

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public String greeting(String message) throws Exception {
        System.out.println(message);
        Thread.sleep(1000); // simulated delay
        numVal++;
        return numVal + ": Sending Message from MainController -> Topic";
    }
}