package garcia.vila.sergi.cybersecweb.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import garcia.vila.sergi.cybersecweb.model.domain.Mensaje;
import garcia.vila.sergi.cybersecweb.model.repository.MensajeRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "http://localhost:3000")  
@RestController
public class MensajeController {
    @Autowired
    private MensajeRepository mensajeRepository;

    @PostMapping("/enviar_mensaje")
    public ResponseEntity<?> enviarMensaje(@RequestBody Mensaje mensaje) {
        try {
            mensajeRepository.save(mensaje);
            return ResponseEntity.ok("Mensaje enviado con éxito");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al enviar el mensaje");
        }
    }
}
