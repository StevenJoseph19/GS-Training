package com.example.conference.service;

import com.example.conference.model.Speaker;

import java.util.List;

public interface SpeakerService {
    List<Speaker> findAll();

    String repositoryName();
}