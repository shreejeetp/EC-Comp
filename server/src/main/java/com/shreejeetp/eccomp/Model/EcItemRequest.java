package com.shreejeetp.eccomp.Model;




import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EcItemRequest {
	private long itemTypeId;
	
	private String name;
	
	private String description;
	
	private String img_url;
	
	private int price;
	
	public EcItem getItem() {
		return new EcItem(this);		
	}
	
}
