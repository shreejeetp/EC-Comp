package com.shreejeetp.eccomp.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shreejeetp.eccomp.Model.EcRole;
import com.shreejeetp.eccomp.Model.EcUser;
import com.shreejeetp.eccomp.Model.EcUserRequest;
import com.shreejeetp.eccomp.Repository.UserRepo;

@Service
public class UserService {
	
	@Autowired
	UserRepo userRepo;
	
	public boolean authenticate(EcUserRequest userRequest) {
		
		System.out.println("userRequest:name: "+userRequest.getName()+"\npassword= "+userRequest.getPassword()+"\nrole: "+userRequest.getRole());
		Optional<EcUser> userFetched1=userRepo.findByName(userRequest.getName());
		
		
		if(userFetched1.isEmpty()) {
			return false;
		}
		
		EcUser userFetched=userFetched1.get();
		EcRole roleFetched=userFetched.getRole();
		if(roleFetched.getId()!=userRequest.getRole()) {
			return false;
		}
		String fetchedPassword=userFetched.getPassword().strip();
		String requestPassword=userRequest.getPassword().strip();
		if(!fetchedPassword.equals(requestPassword)) {
			System.out.println("this is why:\n"+userFetched.getPassword()+"\n"+userRequest.getPassword());
			return false;
		}
		return true;
	}
}
