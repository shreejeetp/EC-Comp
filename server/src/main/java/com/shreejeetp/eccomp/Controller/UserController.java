package com.shreejeetp.eccomp.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.shreejeetp.eccomp.Model.EcUserRequest;
import com.shreejeetp.eccomp.Service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController("")
public class UserController {
	@Autowired
	UserService userService;
	
	@PostMapping("api/authenticate")
	public boolean authenticate(@RequestBody EcUserRequest userRequest){
		return(userService.authenticate(userRequest));
	}
}
