package garcia.vila.sergi.cybersecweb.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import garcia.vila.sergi.cybersecweb.model.domain.Usuari;
import garcia.vila.sergi.cybersecweb.model.repository.UsuariRepository;

@RestController
public class UsuariController {
    @Autowired
    private UsuariRepository usuarioRepository;

    @PostMapping("/registrar_usuario")
    public ResponseEntity<?> registrarUsuario(@RequestBody Usuari usuario) {
        try {
            usuarioRepository.save(usuario);
            return ResponseEntity.ok("Usuario registrado con éxito");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al registrar el usuario");
        }
    }
}
