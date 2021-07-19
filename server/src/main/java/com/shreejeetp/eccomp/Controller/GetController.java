package com.shreejeetp.eccomp.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shreejeetp.eccomp.Model.EcItemType;
import com.shreejeetp.eccomp.Service.ItemTypeService;


@RestController("")
public class GetController {
	@Autowired
	ItemTypeService itemTypeService;
	
	@GetMapping("get/ItemType/all")
	
	public List<EcItemType> getComponent(){
		return(itemTypeService.getAll());
	}
	
	@RequestMapping("home")
	public String home() {
		return("this is homepage");
	}
}
