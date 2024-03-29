package com.Hitch.backend.model;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;

public class Projects {

	@Id
	String id;

	String title;
	String description;
	ArrayList<String> desiredSkills;

	public Projects(String id, String title, String description, ArrayList<String> desiredSkills) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.desiredSkills = desiredSkills;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public ArrayList<String> getDesiredSkills() {
		return desiredSkills;
	}

	public void setDesiredSkills(ArrayList<String> desiredSkills) {
		this.desiredSkills = desiredSkills;
	}





}
