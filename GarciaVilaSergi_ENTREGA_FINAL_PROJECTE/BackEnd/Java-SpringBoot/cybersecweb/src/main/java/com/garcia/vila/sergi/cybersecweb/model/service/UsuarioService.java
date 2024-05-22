package com.garcia.vila.sergi.cybersecweb.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.garcia.vila.sergi.cybersecweb.model.domain.Usuari;
import com.garcia.vila.sergi.cybersecweb.model.repository.UsuariRepository;

@Service
public class UsuarioService {
    @Autowired
    private UsuariRepository usuarioRepository;

    public void registrarUsuario(Usuari usuari) {
        usuarioRepository.save(usuari);
    }
}
