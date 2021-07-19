package com.shreejeetp.eccomp.Repository;

import org.springframework.stereotype.Repository;

import com.shreejeetp.eccomp.Model.EcItemType;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ItemTypeRepo extends JpaRepository<EcItemType,Long> {

}
