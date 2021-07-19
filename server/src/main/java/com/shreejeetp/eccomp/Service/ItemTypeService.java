package com.shreejeetp.eccomp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shreejeetp.eccomp.Model.EcItemType;
import com.shreejeetp.eccomp.Repository.ItemTypeRepo;

@Service
public class ItemTypeService {
	@Autowired
	ItemTypeRepo repo;
	
	public List<EcItemType> getAll() {
		return repo.findAll();
	}
}
