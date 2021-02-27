package com.koznem.MembersRestApi.daoimpl;

import com.koznem.MembersRestApi.dao.MemberDao;
import com.koznem.MembersRestApi.domain.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;

@Component
public class MemberDaoImpl implements MemberDao {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public List<Member> getAllMembers() {
        String sqlQuery = "SELECT * FROM member";
        List<Member> members = jdbcTemplate.query(sqlQuery, new MemberRowMapperImpl());

        return members;
    }

    @Override
    public boolean create(Member member) {
        String sqlQuery = "INSERT INTO member(first_name, last_name, age, date, passport_id) VALUES (?,?,?,?,?)";

        Object[] args = new Object[]{member.getFirstName(), member.getLastName(),
                member.getAge(), member.getDate(), member.getPassportID() };
        return jdbcTemplate.update(sqlQuery,args) == 1;

    }

    @Override
    public boolean update(Member member) {
        String sqlQuery = " UPDATE member SET first_name = ?, last_name = ?, age = ?, date = ?, passport_id = ? WHERE id = ?";
        Object[] args = new Object[]{member.getFirstName(), member.getLastName(), member.getAge(), member.getDate(), member.getPassportID(), member.getId()};


         return   jdbcTemplate.update(sqlQuery,args) == 1;
    }

    @Override
    public Member read(int id) {
        String sqlQuery = "SELECT * FROM member WHERE id = ?";
        Object[] args = new Object[]{id};

        Member member = (Member)jdbcTemplate.query(sqlQuery, new MemberRowMapperImpl(), args).get(0);

        return member;
    }

    @Override
    public void delete(int id) {
        String sqlQuery = String.format("DELETE FROM member WHERE id = %d", id);
        jdbcTemplate.execute(sqlQuery);
    }
}
