package com.shreejeetp.eccomp.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shreejeetp.eccomp.Model.EcItem;
import com.shreejeetp.eccomp.Model.EcItemRequest;
import com.shreejeetp.eccomp.Model.EcItemType;
import com.shreejeetp.eccomp.Service.ItemService;
import com.shreejeetp.eccomp.Service.ItemTypeService;


@RestController("")
public class GetController {
	@Autowired
	ItemTypeService itemTypeService;
	
	@Autowired
	ItemService itemService;
	
	@GetMapping("api/ItemType/all")
	public List<EcItemType> getItemType(){
		return(itemTypeService.getAll());
	}
	
	@RequestMapping("home")
	public String home() {
		return("this is homepage");
	}
	
	@PostMapping("api/item/")
	public String createItem(@RequestBody EcItemRequest itemRequest) {
		itemService.addItem(itemRequest);
		return "Inserted Successfully!";
	}
	
	@GetMapping("api/item/all")
	public List<EcItem> getItem(){
		return(itemService.getAll());
	}
	
	@GetMapping("api/items_by_type/{id}")
	public List<EcItem> getItemByType(@PathVariable long id) {
		return itemService.getItemsByType(id);
	}
}
