package com.Hitch.backend.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("User")
public class User {

	@Id
	String id;

	String fName;
	String lName;
	String username;
	String password;
	List<String> skills;
	List<String> instrests;
	List<String> links;

	List<String> teams; // groupId
	List<String> subscriptions; // groupId
	List<String> hackathons; // hackathonsId

	public User(String id, String fName, String lName, String username, String password, List<String> skills,
			List<String> instrests, List<String> links, List<String> teams, List<String> subscriptions,
			List<String> hackathons) {

		this.id = id;
		this.fName = fName;
		this.lName = lName;
		this.username = username;
		this.password = password;
		this.skills = skills;
		this.instrests = instrests;
		this.links = links;
		this.teams = teams;
		this.subscriptions = subscriptions;
		this.hackathons = hackathons;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getfName() {
		return fName;
	}

	public void setfName(String fName) {
		this.fName = fName;
	}

	public String getlName() {
		return lName;
	}

	public void setlName(String lName) {
		this.lName = lName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<String> getSkills() {
		return skills;
	}

	public void setSkills(List<String> skills) {
		this.skills = skills;
	}

	public List<String> getInstrests() {
		return instrests;
	}

	public void setInstrests(List<String> instrests) {
		this.instrests = instrests;
	}

	public List<String> getLinks() {
		return links;
	}

	public void setLinks(List<String> links) {
		this.links = links;
	}

	public List<String> getTeams() {
		return teams;
	}

	public void setTeams(List<String> teams) {
		this.teams = teams;
	}

	public List<String> getSubscriptions() {
		return subscriptions;
	}

	public void setSubscriptions(List<String> subscriptions) {
		this.subscriptions = subscriptions;
	}

	public List<String> getHackathons() {
		return hackathons;
	}

	public void setHackathons(List<String> hackathons) {
		this.hackathons = hackathons;
	}

}
