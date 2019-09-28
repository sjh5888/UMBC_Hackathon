package com.Hitch.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Hitch.backend.model.User;

public interface RepositoryUser extends MongoRepository<User, String>{

}
