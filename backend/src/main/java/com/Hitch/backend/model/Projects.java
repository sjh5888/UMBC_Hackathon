package com.Hitch.backend.model;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;

public class Projects {

	@Id
	String projectId;
	
	String title;
	String description;
	ArrayList<String> desiredSkills;
	
	public Projects(String projectId, String title, String description, ArrayList<String> desiredSkills) {
		super();
		this.projectId = projectId;
		this.title = title;
		this.description = description;
		this.desiredSkills = desiredSkills;
	}

	public String getProjectId() {
		return projectId;
	}

	public void setProjectId(String projectId) {
		this.projectId = projectId;
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
