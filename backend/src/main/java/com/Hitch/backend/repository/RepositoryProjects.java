package com.Hitch.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Hitch.backend.model.Projects;


public interface RepositoryProjects extends MongoRepository<Projects, String>{

}