package com.garcia.vila.sergi.cybersecweb.model.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.garcia.vila.sergi.cybersecweb.model.domain.Usuari;
import com.garcia.vila.sergi.cybersecweb.model.repository.UsuariRepository;

@RestController
public class UsuariController {

    @Autowired
    private UsuariRepository usuariRepository;

    @PostMapping("/registrar_usuario")
    public ResponseEntity<?> registrarUsuario(@RequestBody Usuari usuario) {
        try {
            System.out.println("Datos recibidos: " + usuario.getUsuari() + ", " + usuario.getEmail() + ", " + usuario.getPassword());
            usuariRepository.save(usuario);
            return ResponseEntity.ok("Usuario registrado con éxito");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error al registrar el usuario: " + e.getMessage());
        }
    }
}
