package com.shreejeetp.eccomp.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shreejeetp.eccomp.Model.EcItem;
import com.shreejeetp.eccomp.Model.EcItemRequest;
import com.shreejeetp.eccomp.Model.EcItemType;
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
	
	public void addItem(EcItemRequest itemRequest) {
		EcItem item=itemRequest.getItem();
		Optional<EcItemType> itemType=itemTypeRepo.findById(itemRequest.getItemTypeId());
		item.setItemType(itemType.get());
		itemRepo.save(item);
	}
	
	public List<EcItem> getAll(){
		return itemRepo.findAll();
	}
	
}
