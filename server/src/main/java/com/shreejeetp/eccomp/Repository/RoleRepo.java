package com.shreejeetp.eccomp.Repository;

import org.springframework.stereotype.Repository;

import com.shreejeetp.eccomp.Model.EcRole;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface RoleRepo extends JpaRepository<EcRole,Long> {

}
