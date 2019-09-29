package com.Hitch.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Hitch.backend.model.Group;


public interface RepositoryGroup extends MongoRepository<Group, String>{
	public Group findByCreator(String creator);
}