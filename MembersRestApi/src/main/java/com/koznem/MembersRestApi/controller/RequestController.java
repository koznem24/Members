package com.koznem.MembersRestApi.controller;

import com.koznem.MembersRestApi.dao.MemberDao;
import com.koznem.MembersRestApi.domain.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/member")
@CrossOrigin("*")
public class RequestController {

    @Autowired
    MemberDao dao;

    @PostMapping
    public String sayHello(@RequestBody Member member){
        return dao.create(member)?"Created":"Not Created";
    }

    @GetMapping
    public List<Member> getMembers(){
        return dao.getAllMembers();
    }

    @GetMapping("/single/{id}")
    public Member singleMember(@PathVariable("id") int id){
        return dao.read(id);
    }

    @PostMapping("/single")
    public void editMember(@RequestBody Member member){
        dao.update(member);
    }

    @GetMapping("/delete/{id}")
    public void deleteSingle(@PathVariable("id") int id){
        System.out.println("Call has been made");

        dao.delete(id);
    }
}
