package com.koznem.MembersRestApi.dao;


import com.koznem.MembersRestApi.domain.Member;

import java.util.List;

public interface MemberDao {

//    public void setDataSource(DataSource dataSource);


    // Retrieve all Members from the database
    public List<Member> getAllMembers();

    // Create a single record in the database
    public boolean create(Member member);

    // Update a single row of the database
    public boolean update(Member member);

    // Retrieve a single row from database based on its id
    public Member read(int id);

    // Delete a single record from the database;O
    public void delete(int id);


}
