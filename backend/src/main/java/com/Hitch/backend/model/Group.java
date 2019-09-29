package com.Hitch.backend.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Groups")
public class Group{

	@Id
	String id;

	String hackathonId; // hackathonId
	String projectId; // projecId

	String creator; // userId

	List<String> team; // userId
	List<String> subscriptions; // userId

	public Group(String id, String hackathonId, String projectId, String creator, List<String> team,
			List<String> subscriptions) {
		super();
		this.id = id;
		this.hackathonId = hackathonId;
		this.projectId = projectId;
		this.creator = creator;
		this.team = team;
		this.subscriptions = subscriptions;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
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

	public void addSub(String id)
	{
		subscriptions.add(id);
	}

	public void addTeam(String id)
	{
		team.add(id);
	}

}
