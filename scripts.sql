CREATE TABLE users (
    id_user int PRIMARY KEY IDENTITY,
    name_user varchar(100) NOT NULL,
    pass varchar(100) NOT NULL,
    email varchar(100) UNIQUE NOT NULL,
    staff_id varchar(100) UNIQUE NOT NULL,
    status_user BIT NOT NULL
);

CREATE TABLE role (
    id_role int PRIMARY KEY,
    name_role varchar(100) NOT NULL,
    status_role BIT NOT NULL
);

CREATE TABLE permissions (
    id_permission int PRIMARY KEY,
    name_permission varchar(100) NOT NULL,
    status_permission BIT NOT NULL

);

CREATE TABLE users_roles_permissions (
    id_user int,
    id_role int,
    id_permission int,
    PRIMARY KEY (id_user, id_role, id_permission),
    FOREIGN KEY (id_user) REFERENCES users (id_user),
    FOREIGN KEY (id_role) REFERENCES role (id_role),
    FOREIGN KEY (id_permission) REFERENCES permissions (id_permission)
);

CREATE TABLE bots (
    id_bot int PRIMARY KEY,
    name_bot varchar(100) NOT NULL,
    description varchar(255)
);

CREATE TABLE services (
    id_service int PRIMARY KEY,
    name_service varchar(100) NOT NULL,
    description varchar(255)
);

CREATE TABLE bot_services (
    id_bot int,
    id_service int,
    PRIMARY KEY (id_bot, id_service),
    FOREIGN KEY (id_bot) REFERENCES bots (id_bot),
    FOREIGN KEY (id_service) REFERENCES services (id_service)
);

CREATE TABLE users_bots (
    id_user int,
    id_bot int,
    ip_address varchar(15),
    PRIMARY KEY (id_user, id_bot),
    FOREIGN KEY (id_user) REFERENCES users (id_user),
    FOREIGN KEY (id_bot) REFERENCES bots (id_bot)
);

// Importa los módulos necesarios
import * as express from 'express';
import * as requestIp from 'request-ip';
import * as moment from 'moment'; // Opcional: Puedes usar Moment.js para formatear fechas

// Crea una instancia de la aplicación Express
const app = express();

// Middleware para registrar los movimientos de peticiones
app.use((req, res, next) => {
  const timestamp = moment().format('YYYY-MM-DD HH:mm:ss'); // Opcional: Obtén la marca de tiempo en el formato deseado
  const ipAddress = requestIp.getClientIp(req); // Obtiene la dirección IP del cliente
  const method = req.method; // Obtiene el método de la petición (GET, POST, etc.)
  const url = req.url; // Obtiene la URL de la petición
  const userAgent = req.get('user-agent'); // Obtiene el User-Agent del cliente

  // Registra la información en tu base de datos o sistema de registro
  // Aquí puedes implementar tu lógica personalizada para registrar los movimientos de peticiones
  // en la base de datos o sistema de registro de tu elección, por ejemplo, usando un ORM o una librería
  // de registro como Winston o Log4js.

  // Luego, puedes continuar con el flujo normal de la petición llamando a next()
  next();
});

// Resto de tu lógica de API aquí...


semestre: id_semestre, semestre, 

create table semestres(
    id_semestre int primary key auto_increment,
    semestre varchar(100) not null
)

grupos: id_grupo, grupo 

create table grupos (
    id_grupo int primary key auto_increment,
    grupo varchar(100)
)

evaluaciones: id_evaluacion, tipo_evaluacion
create table evaluaciones(
    id_evaluacion int primary key auto_increment,
    tipo_evaluacion varchar(100)
)

materias: id_materia, materia, creditos
create table materias(
    id_materia int primary key auto_increment,
    materia varchar(100),
    creditos varchar(10)
)

calificaciones: id_calificacion, calificacion, id_materia, id_evaluacion, id_grupo, id_usuario, id_semestre

create table calificaciones(
    id_calificacion int primary key auto_increment,
    calificacion int ,
    id_materia int,
    id_evaluacion int,
    id_grupo int,
    id_usuario int,
    id_semestre int 
    FOREIGN KEY (id_materia) REFERENCES materias(id_materia),
    FOREIGN KEY (id_evaluacion) REFERENCES evaluaciones(id_evaluacion),
    FOREIGN KEY (id_grupo) REFERENCES grupos(id_grupo),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_semestre) REFERENCES semestres(id_semestre)
)ENGINE=INNODB

create table usuarios(
    id_usuario int primary key auto_increment,
    nonbre varchar(100)
)


SELECT cal.calificacion, m.materia, ev.tipo_evaluacion, g.grupo, u.nombre, s.semestre FROM calificaciones as cal INNER JOIN materias as m ON m.id_materia = cal.id_materia INNER JOIN evaluaciones as ev ON ev.id_evaluacion = cal.id_evaluacion INNER JOIN grupos AS g ON g.id_grupo = cal.id_grupo INNER JOIN usuarios as u ON u.id_usuario = cal.id_usuario INNER JOIN semestres as s ON s.id_semestre = cal.id_semestre where g.grupo = "a2";