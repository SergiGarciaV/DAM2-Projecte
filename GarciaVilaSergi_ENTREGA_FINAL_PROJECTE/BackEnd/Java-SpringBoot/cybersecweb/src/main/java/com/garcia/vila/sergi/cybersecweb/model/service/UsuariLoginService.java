package com.garcia.vila.sergi.cybersecweb.model.service;

import com.garcia.vila.sergi.cybersecweb.model.domain.Usuari;
import com.garcia.vila.sergi.cybersecweb.model.repository.UsuariRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuariLoginService {

    @Autowired
    private UsuariRepository usuariRepository;

    public boolean validateUsuari(String usuari, String password) {
        Usuari user = usuariRepository.findByUsuari(usuari);
        if (user != null && user.getPassword().equals(password)) {
            return true;
        }
        return false;
    }
}
