package com.touristapp.controller;

import com.touristapp.model.Place;
import com.touristapp.service.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/places")
public class PlaceController {
    @Autowired
    private PlaceService service;

    @GetMapping
    public List<Place> getAllPlaces() {
        return service.getAllPlaces();
    }

    @GetMapping("/by-city")
    public List<Place> getByCity(@RequestParam String city) {
        return service.getPlacesByCity(city);
    }

    @GetMapping("/by-type")
    public List<Place> getByType(@RequestParam String type) {
        return service.getPlacesByType(type);
    }
}