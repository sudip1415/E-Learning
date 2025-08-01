package com.example.elearning.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.lang.annotation.Documented;

@Document(collection = "content")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Content {
    @Id
    private String id;

    private String title;
    private String subject;
    private String description;
    private String fileName;
}
