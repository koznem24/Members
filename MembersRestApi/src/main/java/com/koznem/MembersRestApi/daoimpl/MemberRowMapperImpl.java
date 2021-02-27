package com.koznem.MembersRestApi.daoimpl;

import com.koznem.MembersRestApi.domain.Member;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class MemberRowMapperImpl implements RowMapper {


    @Override
    public Member mapRow(ResultSet rs, int rowNum) throws SQLException {

        Member member = new Member();

        member.setId(rs.getInt("id"));
        member.setFirstName(rs.getString("first_name"));
        member.setLastName(rs.getString("last_name"));
        member.setAge(rs.getInt("age"));
        member.setDate(rs.getString("date"));
        member.setPassportID(rs.getString("passport_id"));

        return member;
    }
}
