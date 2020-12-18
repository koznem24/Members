package com.koznem.controller;

import com.koznem.dao.MembersDao;
import com.koznem.model.Members;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/members")
public class MembersController {
    @Autowired
    private MembersDao dao;
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping()
    public String addMember(@RequestBody Members members){
        dao.save(members);
        return "member booked:";
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping()
    public List<Members> getMembers(){
        return (List<Members>) dao.findAll();
    }

}
