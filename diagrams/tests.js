


// Registro de usuario
model = {
    nombre_escenario: "Visita pública - Registro de usuario",
    nro_prueba: "Nr.001",
    nombre_caso_uso: "Visita pública - Usuario visitante",
    nombre_responsable: "Álvaro Segovia",
    fecha_prueba: "20/09/2024",
    precondiciones: "No tener sesión de usuario activa",
    datos_entrada: "Nombre, Apellido, Email, Rol, Contraseña, Confirmación de contraseña",
    descripcion_pasos: `
        <b>Regisro de usuario:</b>
        1. Accede a la plataforma
        2. Navega hacia la pagina de registro de usuario
        3. Ingresa la información en los campos solicitados
        4. Define el rol deseado (Artista | Contratista)
        5. Define contraseña y su confirmación
        6. Presiona el boton Enviar
    `,
    resultado: `
        1. Se recibe mensaje de confirmación de registro realizado
        2. Se recibe email a la dirección de correo especificada para verificar la cuenta
        3. Se redirecciona a la página de Iniciar sesión
    `,
    cumplimiento: "Si",
    errores: "N/A",
    fallas: "N/A",
}

// Inicio sesión
model = {
    nombre_escenario: "Visita pública - Inicio sesión",
    nro_prueba: "Nr.002",
    nombre_caso_uso: "Visita pública - Usuario visitante",
    nombre_responsable: "Álvaro Segovia",
    fecha_prueba: "20/09/2024",
    precondiciones: "No tener sesión de usuario activa, haber creado previamente una cuenta de usuario",
    datos_entrada: "Email, Contraseña",
    descripcion_pasos: `
            <b>Iniciar sesión:</b>
        1. Accede a la plataforma
        2. Navega hacia la pagina de Iniciar sesión
        3. Ingresa la información en los campos solicitados
        4. Presiona el boton Ingresar
    `,
    resultado: `
        1. Recibe notificación de acceso aprobado
        2. Se almacena la sesión en localstorage
        3. Se habilita el panel de usuario y menu de usuario
    `,
    cumplimiento: "Si",
    errores: "N/A",
    fallas: "N/A",
}

// Definición de datos generales de usuario, perfil y profesional
model = {
    nombre_escenario: "Usuario - Panel de usuario - Realizar configuraciones de cuenta",
    nro_prueba: "Nr.003",
    nombre_caso_uso: "Sesión iniciada - Artista/Contratista - Panel de usuario - Configuraciones personales",
    nombre_responsable: "Álvaro Segovia",
    fecha_prueba: "21/09/2024",
    precondiciones: "Tener sesión de usuario activa, ser artista o contratista",
    datos_entrada: "Nombre, Apellido, Teléfono, Género, Dirección, Ciudad, Estado, Foto de perfil, Foto de portada",
    descripcion_pasos: `
        <b>Definir foto de perfil:</b>
        1. Iniciar sesión
        2. Navegar hacia el panel de usuario -> Perfil y configuraciones -> Personal
        3. Clickear boton de cambiar  foto de perfil
        4. Seleccionar foto
        5. Se auto guarda al seleccionar
        <b>Definir foto de portada:</b>
        1. Iniciar sesión
        2. Navegar hacia el panel de usuario -> Perfil y configuraciones -> Personal
        3. Clickear boton de cambiar  foto de portada
        4. Seleccionar foto
        5. Se auto guarda al seleccionar
        <b>Definir datos personales:</b>
        1. Iniciar sesión
        2. Navegar hacia el panel de usuario -> Perfil y configuraciones -> Personal
        3. Ingresar información ( Nombre, Apellido, Teléfono, Género, Dirección, Ciudad, Estado ),
        4. Presionar el boton Guardar
    `,
    resultado: `
        1. Notificación de proceso completado
        2. Información de datos personales completado
    `,
    cumplimiento: "Si",
    errores: "N/A",
    fallas: "N/A",
}

// COnfiguraciones de cuenta definición de documentación
model = {
    nombre_escenario: "Usuario - Panel de usuario - Realizar configuraciones de cuenta",
    nro_prueba: "Nr.004",
    nombre_caso_uso: "Sesión iniciada - Artista/Contratista - Panel de usuario - Definir documentación de credenciales",
    nombre_responsable: "Álvaro Segovia",
    fecha_prueba: "21/09/2024",
    precondiciones: "Tener sesión de usuario activa, ser artista o contratista",
    datos_entrada: "Documento de identidad, Constancia profesional del cargo",
    descripcion_pasos: `
        <b>Definir Doc. Identidad:</b>
        1. Iniciar sesión
        2. Navegar hacia el panel de usuario -> Perfil y configuraciones -> Credenciales
        3. Clickear boton "Documento de identidad"
        4. Seleccionar documento pdf
        5. Se auto guarda al seleccionar
        <b>Definir Constancia profesional:</b>
        1. Iniciar sesión
        2. Navegar hacia el panel de usuario -> Perfil y configuraciones -> Credenciales
        3. Clickear boton "Constancia profesional"
        4. Seleccionar documento pdf
        5. Se auto guarda al seleccionar
    `,
    resultado: `
        1. Notificación de proceso completado
        2. Información de credenciales completada
    `,
    cumplimiento: "Si",
    errores: "N/A",
    fallas: "N/A",
}

model = {
    nombre_escenario: "Contratista - Panel de usuario",
    nro_prueba: "Nr.005",
    nombre_caso_uso: "Sesión iniciada - Contratista - Panel de usuario",
    nombre_responsable: "Álvaro Segovia",
    fecha_prueba: "22/09/2024",
    precondiciones: "Tener sesión de usuario activa y ser contratista",
    datos_entrada: "Titulo, Descripción, Dirección, Ciudad, Estado, Foto de vacante (Flyer), Rol de interés, Descripción de rol, Servicios incluidos, Fecha o rango de fechas, Monto, Monda, Condiciones especificas adicionales",
    descripcion_pasos: `
        <b>Crear vacante</b>
        1. Iniciar sesión siendo contratista
        2. Navegar hacia la página de vacantes
        3. Clickear boton "Crear vacante"
        4. Ingresar información solicitada
        5. Presionar boton "Enviar"
        <b>Editar vacante</b>
        1. Iniciar sesión siendo contratista
        2. Navegar hacia la página de vacantes
        3. Acceder a una vacante especifica
        3. Clickear boton "Editar vacante"
        4. Ingresar información solicitada
        5. Presionar boton "Enviar"
        <b>Eliminar vacante</b>
        1. Iniciar sesión siendo contratista
        2. Navegar hacia la página de vacantes
        3. Acceder a una vacante especifica
        3. Clickear boton "Eliminar vacante"
        4. Confirmar acción
    `,
    resultado: `
        1. Notificación de proceso completado
        2. Información de vacante completada según lo requerido
    `,
    cumplimiento: "Si",
    errores: "N/A",
    fallas: "N/A",
}

model = {
    nombre_escenario: "Contratista - Panel de usuario",
    nro_prueba: "Nr.006",
    nombre_caso_uso: "Sesión iniciada - Contratista - Panel de usuario",
    nombre_responsable: "Álvaro Segovia",
    fecha_prueba: "22/09/2024",
    precondiciones: "Tener sesión de usuario activa y ser contratista",
    datos_entrada: "Decisión de evaluación, Comentario (Opcional)",
    descripcion_pasos: `
        <b>Evaluación de postulaciones</b>
        1. Iniciar sesión siendo contratista
        2. Navegar hacia la página de vacantes
        3. Acceder a una vacante especifica
        4. Visualizar listado de postulaciones
        5. Evaluar postulación especifia ingresando decisión y comentario
    `,
    resultado: `
        1. Notificación de proceso completado
        2. Postulaciones evaluadas según lo requerido
    `,
    cumplimiento: "Si",
    errores: "N/A",
    fallas: "N/A",
}

model = {
    nombre_escenario: "Contratista - Panel de usuario",
    nro_prueba: "Nr.007",
    nombre_caso_uso: "Sesión iniciada - Contratista - Panel de usuario",
    nombre_responsable: "Álvaro Segovia",
    fecha_prueba: "22/09/2024",
    precondiciones: "Tener sesión de usuario activa y ser contratista",
    datos_entrada: "N/A",
    descripcion_pasos: `
        <b>Crear propuesta de contrato</b>
        1. Iniciar sesión siendo contratista
        2. Navegar hacia la página de vacantes
        3. Acceder a una vacante con postulaciones evaluadas
        4. Crear planificación de contrato de una postulación aceptada
        5. El contrato se genera en base a la información de la vacante
        <b>Enviar propuesta de contrato</b>
        1. Iniciar sesión siendo contratista
        2. Navegar hacia la página de vacantes
        3. Acceder a una vacante con planificación de contrato creada
        4. Definir o modificar detalles
        5. Clickear en "Enviar propuesta"
    `,
    resultado: `
        1. Notificación de proceso completado
        2. Contratos gestionados según lo requerido
    `,
    cumplimiento: "Si",
    errores: "N/A",
    fallas: "N/A",
}

model = {
    nombre_escenario: "Contratista - Panel de usuario",
    nro_prueba: "Nr.008",
    nombre_caso_uso: "Sesión iniciada - Artista - Panel de usuario",
    nombre_responsable: "Álvaro Segovia",
    fecha_prueba: "23/09/2024",
    precondiciones: "Tener sesión de usuario activa y ser contratista",
    datos_entrada: "N/A",
    descripcion_pasos: `
        <b>Aceptar/Firmar propuesta de contrato</b>
        1. Iniciar sesión siendo contratista
        2. Acceder al panel de usuario -> Lista de contratos
        3. Acceder a un contrato especifico
        4. Pre visualizar documento pdf (Opcional)
        5. Click en Aceptar y firmar
    `,
    resultado: `
        1. Notificación de proceso completado
        2. Contrato con firma textual definida
        3. Contratos aceptados según lo requerido
    `,
    cumplimiento: "Si",
    errores: "N/A",
    fallas: "N/A",
}



