package com.shreejeetp.eccomp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.shreejeetp.eccomp*")
public class EcCompApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcCompApplication.class, args);
	}

}
