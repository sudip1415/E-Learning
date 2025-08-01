package com.example.elearning.service;

import com.example.elearning.model.Content;
import com.example.elearning.repository.ContentRepository;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ContentService {

    private final ContentRepository contentRepository;
    private final GridFsTemplate gridFsTemplate;

    public String uploadContent(String title, String subject, String description, MultipartFile file) throws IOException {
        // 1. Upload file to GridFS
        DBObject metaData = new BasicDBObject();
        metaData.put("fileSize", file.getSize());

        gridFsTemplate.store(
                file.getInputStream(),
                file.getOriginalFilename(),
                file.getContentType(),
                metaData
        );

        // 2. Save metadata to MongoDB
        Content content = new Content(null, title, subject, description, file.getOriginalFilename());
        contentRepository.save(content);

        return "E-learning content uploaded successfully.";
    }

    public List<Content> getAllContents() {
        return contentRepository.findAll();
    }

    public Optional<Content> getContentById(String id) {
        return contentRepository.findById(id);
    }
}
