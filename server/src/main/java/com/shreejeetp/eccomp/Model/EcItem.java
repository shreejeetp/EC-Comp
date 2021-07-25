package com.shreejeetp.eccomp.Model;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="item")
public class EcItem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private long id;
	
	@ManyToOne
	@JoinColumn(name="type_id")
	private EcItemType itemType;
	
	@Column(name="name")
	private String name;
	
	@Column(name="description")
	private String description;
	
	@Column(name="img_url")
	private String img_url;
	
	@Column(name="price")
	private int price;
	
	@Column(name="date_added")
	private Timestamp date_added;
	
	public EcItem(AddItemRequest itemRequest) {
		this.date_added=new Timestamp(System.currentTimeMillis());
		this.name=itemRequest.getName();
		this.description=itemRequest.getDescription();
		this.img_url=itemRequest.getImg_url();
		this.price=itemRequest.getPrice();
	}
	

	public void copyUpdate(UpdateItemRequest itemRequest) {
		this.name=itemRequest.getName();
		this.price=itemRequest.getPrice();
		this.description=itemRequest.getDescription();
		this.img_url=itemRequest.getImg_url();
	}
}
