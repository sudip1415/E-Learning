package com.example.elearning.controller;

import com.example.elearning.model.Content;
import com.example.elearning.service.ContentService;
import com.mongodb.client.gridfs.model.GridFSFile;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/content")
@CrossOrigin
@RequiredArgsConstructor
public class ContentController {

    private final ContentService contentService;
    private final GridFsTemplate gridFsTemplate;

    @PostMapping("/upload")
    public ResponseEntity<String> upload(
            @RequestParam String title,
            @RequestParam String subject,
            @RequestParam String description,
            @RequestParam MultipartFile file
    ) throws IOException {
        String message = contentService.uploadContent(title, subject, description, file);
        return ResponseEntity.ok(message);
    }

    @GetMapping
    public ResponseEntity<List<Content>> getAll() {
        return ResponseEntity.ok(contentService.getAllContents());
    }

    @GetMapping("/file/{filename}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable String filename) throws IOException {
        GridFSFile file = gridFsTemplate.findOne(Query.query(Criteria.where("filename").is(filename)));

        if (file == null) {
            return ResponseEntity.notFound().build();
        }

        GridFsResource resource = gridFsTemplate.getResource(file);
        byte[] data = resource.getInputStream().readAllBytes();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(resource.getContentType()));
        headers.setContentDisposition(ContentDisposition.attachment().filename(filename).build());

        return new ResponseEntity<>(data, headers, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Content> getContent(@PathVariable String id) {
        return contentService.getContentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());

    }
}
