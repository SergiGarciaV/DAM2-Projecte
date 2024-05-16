package garcia.vila.sergi.cybersecweb.model.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Usuario")
public class Usuari {

	@Id
	@Column(name="PK_Usuari_Id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(name="Email", length=100, unique=true, nullable=false)
	private String email;
	
	@Column(name="usuari", length=100, unique=true, nullable=false)
	private String usuari;
	
	@Column(name="password", length=100, unique=false, nullable=false)
	private String password;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsuari() {
		return usuari;
	}

	public void setUsuari(String usuari) {
		this.usuari = usuari;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Usuari [id=" + id + ", email=" + email + ", user="
				+ usuari + ", password=" + password + "]";
	}

	
	

}
