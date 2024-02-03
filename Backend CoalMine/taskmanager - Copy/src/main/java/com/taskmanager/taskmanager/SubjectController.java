package com.taskmanager.taskmanager;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
@CrossOrigin(origins = "*")
public class SubjectController {

    int cnt = 1;
    int alert1;
    @Autowired
    private SubjectService subjectService;
    @RequestMapping("/alltasks")
    public List<Subject> getAllSubjects()
    {  
           return subjectService.getAllSubjects();
    }

    @GetMapping("/getTask")
    public Optional<Subject> getSubjects(@RequestParam String client)
    {
           return subjectService.getSubjects(client);
    }

    @RequestMapping(method = RequestMethod.POST,value = "/saveTask")
    public void addSubject(@RequestParam String client,@RequestParam String humidity,@RequestParam String temperature, Subject subject )
    {  
        subject.setId(cnt++);
      
        subject.setClient(client);
        subject.sethumidity(humidity);
        subject.settemperature(temperature);
        subjectService.addSubject(subject);
    }
    // public void addSubject(@RequestBody Subject subject )
    // {  
    //     subject.setId(cnt++);
    
    //     subjectService.addSubject(subject);
    // }

    @RequestMapping(method = RequestMethod.PUT,value = "/changeStatus")
    public void updateSubject(@RequestParam String id,@RequestParam String BPM ,@RequestParam String client,@RequestParam String humidity,@RequestParam String temperature,@RequestParam String gas ,Subject subject )
    {
        if(Integer.parseInt(humidity)>100||Integer.parseInt(temperature)>100||Integer.parseInt(gas)>50||Integer.parseInt(BPM)>100)
         {
            alert1 = 1;
        }
        else{
            alert1 = 0;
        }


        subject.setClient(client);
        subject.sethumidity(humidity);
        subject.setGas(gas);
        subject.settemperature(temperature);
        subject.setBPM(BPM);
        subject.setAlert(alert1);
        subjectService.updateSubject(id,subject);
    }

    @RequestMapping(method = RequestMethod.DELETE,value = "/deleteTask")
    public void DeleteSubject(@RequestParam String id)
    {
        subjectService.deleteSubject(id);
    }  
}
