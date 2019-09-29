package com.Hitch.backend.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("hackathon")
public class Hackathon {

	@Id
	String id;

	String name;
	String pictureURL;
	String date;

	List<String> groups; // groupId

	public Hackathon(String id, String name, String pictureURL, String date, List<String> groups) {
		super();
		this.id = id;
		this.name = name;
		this.pictureURL = pictureURL;
		this.date = date;
		this.groups = groups;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPictureURL() {
		return pictureURL;
	}

	public void setPictureURL(String pictureURL) {
		this.pictureURL = pictureURL;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public List<String> getGroups() {
		return groups;
	}

	public void setGroups(List<String> groups) {
		this.groups = groups;
	}

	public void addGroup(String id)
	{
		groups.add(id);
	}

}
