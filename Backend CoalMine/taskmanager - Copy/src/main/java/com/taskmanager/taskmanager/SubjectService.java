package com.taskmanager.taskmanager;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubjectService {
    @Autowired
    public SubjectRepository subjectRepo; 
    public List<Subject> getAllSubjects()
    {
        List<Subject> subjects = new ArrayList<>();
        subjectRepo.findAll().forEach(subjects::add);
        return subjects;
    } 

    public Optional<Subject> getSubjects(String client)
    {
    
        return subjectRepo.findById(client);
    } 


    public void addSubject(Subject subject)
    {
        subjectRepo.save(subject);
        
    }
    public void updateSubject(String taskId,Subject subject)
    {
        subjectRepo.save(subject);
        
    }

    public void deleteSubject(String taskId)
    {
        subjectRepo.deleteById(taskId);
    }  
}
