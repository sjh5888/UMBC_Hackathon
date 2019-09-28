package com.Hitch.backend.model;

import java.util.List;

import org.springframework.data.annotation.Id;

public class Group{
	
	@Id
	String groupId;
	
	String hackathonId; // hackathonId
	String projectId; // projecId
	
	String creator; // userId
	
	List<String> team; // userId
	List<String> subscriptions; // userId
	public Group(String groupId, String hackathonId, String projectId, String creator, List<String> team,
			List<String> subscriptions) {
		super();
		this.groupId = groupId;
		this.hackathonId = hackathonId;
		this.projectId = projectId;
		this.creator = creator;
		this.team = team;
		this.subscriptions = subscriptions;
	}
	public String getGroupId() {
		return groupId;
	}
	public void setGroupId(String groupId) {
		this.groupId = groupId;
	}
	public String getHackathonId() {
		return hackathonId;
	}
	public void setHackathonId(String hackathonId) {
		this.hackathonId = hackathonId;
	}
	public String getProjectId() {
		return projectId;
	}
	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}
	public String getCreator() {
		return creator;
	}
	public void setCreator(String creator) {
		this.creator = creator;
	}
	public List<String> getTeam() {
		return team;
	}
	public void setTeam(List<String> team) {
		this.team = team;
	}
	public List<String> getSubscriptions() {
		return subscriptions;
	}
	public void setSubscriptions(List<String> subscriptions) {
		this.subscriptions = subscriptions;
	}
	
	

}
