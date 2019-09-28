package com.Hitch.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Hitch.backend.model.Group;
import com.Hitch.backend.model.Hackathon;

public interface RepositoryHackathon  extends MongoRepository<Hackathon, String>{

}
