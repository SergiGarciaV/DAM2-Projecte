package garcia.vila.sergi.cybersecweb.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import garcia.vila.sergi.cybersecweb.model.domain.Usuari;


@Repository
public interface UsuariRepository extends JpaRepository<Usuari, Integer> {

}
