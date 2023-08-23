# Citas

Este proyecto está diseñado para abordar los desafíos que enfrentan los hospitales en la gestión de sus citas, desde el registro de citas hasta el seguimiento de las mismas y sus medicos de productos. Mediante la implementación de una  base de datos y la creación de endpoints que permiten consultas precisas, nuestro sistema busca simplificar y optimizar la gestion de citas de un hospital.


## __Instalacion:__

* Asegurarse de tener instalado Node.js y npm en tu sistema

**Clonar Repositorio:** Clona este repositorio copiando el siguiente comando en tu terminal:

``git clone https://github.com/LauraRamirezCampus/MongoCitas.git``

**1. Configura las variables de entorno:** Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias. Hay un ejemplo de las variables requeridas en el archivo `.env`.

(las variables vienen por defecto en el proyecto como usuario root )

**2. Instalar dependencias:** En la raiz de el proyecto encontraras un archivo llamado  ``package.json`` en el cual se encuentran las dependecias necesarias para que todo funcione,para instalarlas y compilar los archivos DTO debes ejecutar los siguientes comandos:

``npm install``
``npm run tsc ``

Con el anterior comando se instalara automaticamente todas las dependencias que se encuentran en el archivo ``package.json``

**3. Creacion de la base datos:**  En el proyecto encontraras un archivo llamado ``data.mongodb`` en la ruta "MongoCitas\db\data.mongodb" donde podras ejecutar el script con la creacion de la base de datos e insercion de datos de prueba.

**4. Iniciar el servidor:** Para iniciar el servidor debes ejecutar el siguiente comando:
``npm run dev``

## __USO:__

1.Abre la extensión **"Thunder Client"** en tu entorno de desarrollo.

**METODO:GET**

* listar los pacientes alfabeticamente


``http://127.10.10.07:50010/usuario``

<hr>

**METODO:GET**

* listar los medicos 

``http://127.10.10.07:50010/Medico``

<hr>

**METODO:GET**

* listar las citas 

``http://127.10.10.07:50010/Cita``

<hr>


