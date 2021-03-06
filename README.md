# exercise1-H

# Introdución

  A través de la API se pueden realizar registros de usuarios (no se requiere ningún tipo de autorización para realizar esta operación).   
  
  Cada usuario cuenta con un campo "name": para indicar su nombre, "username": para indicar el nombre de su usuario, "password": para su contraseña y "rol": el cual 
indica el rol específico de ese usuario, este puede ser "admin" o por defecto "regular".

  Además por medio de esta API se puede consultar todos los usuarios registrados en la base de datos .Para que sea efectiva esta consulta, debe realizarse a través de un
token que solo se genera cuando un usuario admin inicia sesión.

## Caso de uso

   Esta API solo puede ser usada para el registrar y listar usuarios.
   
## Ejecución ⚙️

   npm start

## Métodos utilizados y pasos para ejecutar peticiones

### Paso 1: Registro de usuarios

>Método POST:

   Por medio de este método se realiza la petición al siguiente endpoint http://localhost:3000/api/users y se envia un objeto json por body el cual contendrá los datos del nuevo usuario a registrar en la base de datos.

```
Ejemplo (añadir usuario administrador): 

{
  "name": "UsuarioAdministrador",
  "username": "Admin01",
  "password": "admin123",
  "role": "admin"
}
```
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
```
Ejemplo (añadir usuario regular): 

   Al no especificar el rol por defecto se registra como usuario regular.

{
  "name": "UsuarioRegular",
  "username": "User01",
  "password": "user123"
} 

```

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
### Paso 2: Login de usuarios

>Método POST:

   Por medio de este método se realiza la petición al siguiente endpoint http://localhost:3000/api/auth/login y se envía un objeto json por body el cual contendrá los datos para el inicio de sesión de los usuarios administradores.
```
Ejemplo (inicio de sesión por parte de un usuario administrador): 

{
  "username": "Admin01",
  "password": "admin123"
}
```
   Una vez enviados estos datos, si este usuario admin existiese en la base de datos, el servidor responde con un mensaje de que el acceso fue correcto, y envía un token. Si este usuario no existiese el mensaje indicaría que el usuario no existe, o si su contraseña es incorrecta también estaría especificado en el mensaje y no se obtendría el token.
```
Ejemplo (inicio de sesión por parte de un usuario regular):

 {
  "username": "User01",
  "password": "user123"
 }
```
Una vez enviados estos datos, si este usuario existiera en la base de datos, el servidor responde con un mensaje de que este usuario regular no tiene los permisos para iniciar sesión y no se entrega un token.
Si no existiese en la base de datos estaría especificado en el mensaje que devuelve el servidor, o si se ingresara una constraseña incorrecta tabién estaría especificado, y no se obtendría nunca el token para este tipo de usuarios regulares.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Paso 3: Consultar los usuarios

>Método GET:

 Por medio de este método se realiza la petición al siguiente endpoint http://localhost:3000/api/users , especificando en el header: una KEY Authorization con su VALUE Bearer (token). Se obtendrá como respuesta del servidor un objeto json con todos los usuarios registrados en la base de datos.
```
Ejemplo de especificación del header.

KEY: Authorization     VALUE: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkZyYW5jb01hc3NvbGEiLCJuYW1lIjoiRnJhbmNvIE1hc3NvbGEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MDc0NjcxNzl9.TNk_w5KhODHpReAkS3vbr6Fv706-Vc4LXt3bWB1sorU         
```

## Construido con 🛠️

Backend: 
  
* Node.js (bcrypt, body-parser, cors, express. jsonwebtoken, mongoose, nodemon).

Frontend: 
  
 * Angular (ngx-pagination).
 
 * Framework (bootstrap).
 
## API documentation

https://documenter.getpostman.com/view/7686442/TVmTcEWt#c3b4afd3-3866-45b9-8fb8-6d09fe454590

 ## Autor ✒️
 
* **Franco Massola** 

 
 
 
 
 
