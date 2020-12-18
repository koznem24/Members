package com.koznem.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@ToString
@Table(name="Members")
public class Members {
    @Id
    @GeneratedValue
    private Integer id;
    private String firstName;
    private String lastName;
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;
    private int age;
    private String passportID;


}
