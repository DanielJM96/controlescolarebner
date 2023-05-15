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

