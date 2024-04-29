package com.casablanca.SpringConnect;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class BackEndController {
	@GetMapping("/Home")
	public String HomePage() {
		String home = "This is the homepage for our Car Rental website, curently there is nothing on it\n";
		String page = "Testing, testing 1, 2 ,3";
		int version = 1;
		return (home + page + "BTW this is the version type, I'm testing out integer stuff lol" + version);
	}
}
