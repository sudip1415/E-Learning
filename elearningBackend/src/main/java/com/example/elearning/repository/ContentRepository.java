package com.example.elearning.repository;

import com.example.elearning.model.Content;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContentRepository extends MongoRepository<Content,String> {
}
