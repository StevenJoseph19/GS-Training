package com.wildbeancoffee.friends.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Friend {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String firstName;
  private String lastName;

  public Friend(String firstName, String lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public Friend() {
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }
}
