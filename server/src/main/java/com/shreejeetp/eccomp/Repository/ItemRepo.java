package com.shreejeetp.eccomp.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.shreejeetp.eccomp.Model.EcItem;

@Repository
public interface ItemRepo extends JpaRepository<EcItem,Long> {
	
	@Query("from EcItem where itemType.id=:id")
	public List<EcItem> findByItemTypeId(long id);

}
