package com.Hitch.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Hitch.backend.model.Group;
import com.Hitch.backend.repository.RepositoryGroup;


@RestController
@RequestMapping("/api")
public class GroupController {

	@Autowired
	private RepositoryGroup repository;
	
	@PostMapping("/Group")
	public Group createGroups(@RequestBody Group Groups)
	{
		repository.save(Groups);
		return Groups;
	}
	
	@GetMapping("/Group")
	public List<Group> Getgroups()
	{
		return repository.findAll();
	}
	
	@GetMapping("/Group/{id}")
	public Optional<Group> GetSpecigicUser(@PathVariable("id") String id) {
		return repository.findById(id);
	}

}
