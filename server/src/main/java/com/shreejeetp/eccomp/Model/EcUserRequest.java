package com.shreejeetp.eccomp.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class EcUserRequest {
	private String name;
	
	private String password;
	
	int role;
}
