package com.garcia.vila.sergi.cybersecweb.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.garcia.vila.sergi.cybersecweb.model.domain.Mensaje;

@Repository
public interface MensajeRepository extends JpaRepository<Mensaje, Long> {
}
