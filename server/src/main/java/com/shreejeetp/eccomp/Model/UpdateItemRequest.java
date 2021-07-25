package com.shreejeetp.eccomp.Model;




import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UpdateItemRequest {
	private long id;
	
	private long itemTypeId;
	
	private String name;
	
	private String description;
	
	private String img_url;
	
	private int price;
	
}
