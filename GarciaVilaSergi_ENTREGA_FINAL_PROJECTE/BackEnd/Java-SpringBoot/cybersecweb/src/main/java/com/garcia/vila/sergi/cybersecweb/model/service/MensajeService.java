package com.garcia.vila.sergi.cybersecweb.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.garcia.vila.sergi.cybersecweb.model.domain.Mensaje;
import com.garcia.vila.sergi.cybersecweb.model.repository.MensajeRepository;

@Service
public class MensajeService {
    @Autowired
    private MensajeRepository mensajeRepository;

    public void enviarMensaje(Mensaje mensaje) {
        mensajeRepository.save(mensaje);
    }
}
