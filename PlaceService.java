package com.touristapp.service;

import com.touristapp.model.Place;
import com.touristapp.repository.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaceService {
    @Autowired
    private PlaceRepository repository;

    @Cacheable("placesByCity")
    public List<Place> getPlacesByCity(String city) {
        return repository.findByCity(city);
    }

    @Cacheable("placesByType")
    public List<Place> getPlacesByType(String type) {
        return repository.findByType(type);
    }

    public List<Place> getAllPlaces() {
        return repository.findAll();
    }
}