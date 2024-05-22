package com.garcia.vila.sergi.cybersecweb.model.controllers;


import com.garcia.vila.sergi.cybersecweb.model.service.UsuariLoginService;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {
    @Autowired
    private UsuariLoginService usuariLoginService;

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> loginData) {
        String username = loginData.get("usuari");
        String password = loginData.get("password");

        Map<String, Object> response = new HashMap<>();
        if (usuariLoginService.validateUsuari(username, password)) {
            response.put("success", true);
            response.put("username", username);
        } else {
            response.put("success", false);
        }

        return ResponseEntity.ok(response);
    }
}
