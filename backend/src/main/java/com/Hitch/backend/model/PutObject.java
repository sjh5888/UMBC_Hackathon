package com.Hitch.backend.model;

public class PutObject {
  String userId;
  boolean sub;

  public PutObject() {}

  public PutObject(String userId, boolean sub) {
    this.userId = userId;
    this.sub = sub;
  }

  public String getUserId() {
    return userId;
  }

  public void setUserId(String userId) {
    this.userId = userId;
  }

  public boolean getSub() {
    return sub;
  }

  public void setSub() {
    this.sub = sub;
  }

}
