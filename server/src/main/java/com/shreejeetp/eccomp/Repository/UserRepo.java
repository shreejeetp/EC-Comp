package com.shreejeetp.eccomp.Repository;

import org.springframework.stereotype.Repository;

import com.shreejeetp.eccomp.Model.EcUser;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface UserRepo extends JpaRepository<EcUser,Long> {
	
	@Query("from EcUser where name=:userName")
	public Optional<EcUser> findByName(String userName) ;
}
