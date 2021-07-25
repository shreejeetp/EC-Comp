package com.shreejeetp.eccomp.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shreejeetp.eccomp.Model.EcItem;
import com.shreejeetp.eccomp.Model.AddItemRequest;
import com.shreejeetp.eccomp.Model.EcItemType;
import com.shreejeetp.eccomp.Model.UpdateItemRequest;
import com.shreejeetp.eccomp.Repository.ItemRepo;
import com.shreejeetp.eccomp.Repository.ItemTypeRepo;

@Service
public class ItemService {

	@Autowired
	ItemRepo itemRepo;
	
	@Autowired
	ItemTypeRepo itemTypeRepo;
	
	public List<EcItem> getItemsByType(long itemTypeId){
		return itemRepo.findByItemTypeId(itemTypeId);
	}
	
	public void addItem(AddItemRequest itemRequest) {
		EcItem item=itemRequest.getItem();
		Optional<EcItemType> itemType=itemTypeRepo.findById(itemRequest.getItemTypeId());
		item.setItemType(itemType.get());
		itemRepo.save(item);
	}
	
	public String updateItem(UpdateItemRequest itemRequest) {
		System.out.println(itemRequest.toString());
		Optional<EcItem> fetchedTempItem=itemRepo.findById(itemRequest.getId());
		if(fetchedTempItem.isEmpty()) {
			return "Error:Item can't be found!";
		}
		Optional<EcItemType> fetchedItemType=itemTypeRepo.findById(itemRequest.getItemTypeId());
		if(fetchedItemType.isEmpty()) {
			return "Error:Item Type can't be found!";
		}
		EcItemType fetchedItemType1=fetchedItemType.get();
		EcItem fetchedItem=fetchedTempItem.get();
		
		fetchedItem.copyUpdate(itemRequest);
		fetchedItem.setItemType(fetchedItemType1);

		System.out.println("ItemTypeId: "+fetchedItemType1.getId());
		itemRepo.save(fetchedItem);
		return("Success: Updated successfully!");
	}
	
	public List<EcItem> getAll(){
		return itemRepo.findAll();
	}
	
	public boolean deleteItem(long id) {
		Optional<EcItem> fetchedItem=itemRepo.findById(id);
		if(fetchedItem.isEmpty()) {
			return false;
		}
		EcItem fetchedItem1=fetchedItem.get();
		itemRepo.delete(fetchedItem1);
		return true;
	}
}
