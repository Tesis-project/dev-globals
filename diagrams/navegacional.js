{
    pages: [
        {
            page: 'Visitante -Sin sesión-',
            pages: [
                'Inicio',
                'Búsqueda de artistas',
                'Vacantes',
                'Iniciar sesión',
                'Registrarse'
            ]
        }
    ]
}
/*
@startuml

skinparam class {
    BackgroundColor<< Enum >> #F5F5DC
BackgroundColor << Interface >> #F5F5DC
    BorderColor Black
    ArrowColor Black
    FontSize 15
    AttributeFontSize 15
    StereotypeFontSize 15
    ClassFontSize 15
    ClassAttributeFontSize 15
    ClassStereotypeFontSize 15
    ClassBorderColor Black
    ClassArrowColor Black
}

skinparam {
    shadowing false
    linetype ortho
    ranksep 50
    nodesep 25
}

[Visitante - Sin sesión -]-- > [Inicio]
[Visitante - Sin sesión -]--> [Búsqueda de artistas]
[Visitante - Sin sesión -]--> [Vacantes]
[Visitante - Sin sesión -]--> [Iniciar sesión]
[Visitante - Sin sesión -]--> [Registrarse]

@enduml


    Descripción del Diagrama
El diagrama navegacional representa la estructura de navegación para un "Visitante -Sin sesión-" en el sitio web.Este diagrama muestra las principales páginas accesibles para un usuario que no ha iniciado sesión y cómo están interconectadas.

Descripción de las Páginas
Visitante - Sin sesión -: Esta es la página principal desde la cual un visitante sin sesión puede acceder a las demás páginas del sitio.

    Inicio: La página de inicio del sitio web, que sirve como punto de partida para la navegación.

Búsqueda de artistas: Una página donde los visitantes pueden buscar y explorar perfiles de artistas.

    Vacantes: Una página que lista las vacantes disponibles, permitiendo a los visitantes ver oportunidades de empleo o colaboración.

Iniciar sesión: La página donde los usuarios pueden ingresar sus credenciales para acceder a sus cuentas.

    Registrarse: La página donde los nuevos usuarios pueden crear una cuenta en el sitio web.

Este diagrama y las descripciones proporcionan una visión clara de cómo un visitante sin sesión puede navegar por el sitio web y acceder a las diferentes funcionalidades disponibles.
 */


{
    pages: [
        {
            page: 'Usuario con sesión iniciada',
            pages: [
                'Inicio',
                'Búsqueda de artistas',
                'Vacantes',
                {
                    page: 'Panel de usuario',
                    pages: [
                        'Notificaciones',
                        {
                            page: 'Perfil y configuraciones',
                            pages: [
                                'Personal',
                                'Profesional',
                                'Medios',
                                'Credenciales',
                                'Seguridad de cuenta'
                            ]
                        },
                        {
                            page: 'Datos de contratación',
                            pages: [
                                'Condiciones personales',
                                'Información de pago'
                            ]
                        }
                    ]
                }
            ]
        },

    ]
}

/*

@startuml

skinparam class {
    BackgroundColor<<Enum>> #F5F5DC
    BackgroundColor<<Interface>> #F5F5DC
    BorderColor Black
    ArrowColor Black
    FontSize 15
    AttributeFontSize 15
    StereotypeFontSize 15
    ClassFontSize 15
    ClassAttributeFontSize 15
    ClassStereotypeFontSize 15
    ClassBorderColor Black
    ClassArrowColor Black
}

skinparam {
    shadowing false
    linetype ortho
    ranksep 50
    nodesep 25
}


[Usuario con sesión iniciada] --> [Inicio]
[Usuario con sesión iniciada] --> [Búsqueda de artistas]
[Usuario con sesión iniciada] --> [Vacantes]
[Usuario con sesión iniciada] --> [Panel de usuario]

[Panel de usuario] --> [Notificaciones]
[Panel de usuario] --> [Perfil y configuraciones]
[Panel de usuario] ---> [Datos de contratación]

[Perfil y configuraciones] -> [Personal]
[Perfil y configuraciones] -> [Profesional]
[Perfil y configuraciones] --> [Medios]
[Perfil y configuraciones] --> [Credenciales]
[Perfil y configuraciones] --> [Seguridad de cuenta]

[Datos de contratación] --> [Condiciones personales]
[Datos de contratación] --> [Información de pago]

@enduml

Usuario con sesión iniciada: Esta es la página principal desde la cual un usuario autenticado puede acceder a las demás páginas del sitio.

Inicio: La página de inicio del sitio web, que sirve como punto de partida para la navegación.

Búsqueda de artistas: Una página donde los usuarios pueden buscar y explorar perfiles de artistas.

Vacantes: Una página que lista las vacantes disponibles, permitiendo a los usuarios ver oportunidades de empleo o colaboración.

Panel de usuario: Un panel donde los usuarios pueden gestionar sus notificaciones, perfil, configuraciones y datos de contratación.

Notificaciones: Una página donde los usuarios pueden ver y gestionar sus notificaciones.

Perfil y configuraciones: Una sección donde los usuarios pueden gestionar diferentes aspectos de su perfil y configuraciones.

Personal: Configuraciones y detalles personales del usuario.
Profesional: Información profesional del usuario.
Medios: Gestión de medios y archivos del usuario.
Credenciales: Información de credenciales y logros del usuario.
Seguridad de cuenta: Configuraciones de seguridad de la cuenta del usuario.
Datos de contratación: Una sección donde los usuarios pueden gestionar sus datos de contratación.

Condiciones personales: Información sobre las condiciones personales del usuario.
Información de pago: Detalles de pago y métodos de pago del usuario.
 */


{
    pages: [
        {
            page: 'Administrador',
            pages: [
                {
                    page: 'Panel de usuario',
                    pages: [
                        'Contratos creados',
                        'Usuarios registrados',
                        'Vacantes publicadas',
                    ]

                }
            ]

        }
    ]
}

/*

@startuml

skinparam class {
    BackgroundColor<<Enum>> #F5F5DC
    BackgroundColor<<Interface>> #F5F5DC
    BorderColor Black
    ArrowColor Black
    FontSize 15
    AttributeFontSize 15
    StereotypeFontSize 15
    ClassFontSize 15
    ClassAttributeFontSize 15
    ClassStereotypeFontSize 15
    ClassBorderColor Black
    ClassArrowColor Black
}

skinparam {
    shadowing false
    linetype ortho
    ranksep 50
    nodesep 25
}

[Administrador] --> [Panel de usuario]

[Panel de usuario] --> [Contratos creados]
[Panel de usuario] --> [Usuarios registrados]
[Panel de usuario] --> [Vacantes publicadas]

@enduml

Descripción del Diagrama
El diagrama navegacional representa la estructura de navegación para un "Administrador" en el sitio web. Este diagrama muestra las principales páginas accesibles para un administrador y cómo están interconectadas.

Descripción de las Páginas
Administrador: Esta es la página principal desde la cual un administrador puede acceder a las demás páginas del sitio.

Panel de usuario: Un panel donde los administradores pueden gestionar diferentes aspectos del sitio.

Contratos creados: Una página donde los administradores pueden ver y gestionar los contratos creados.
Usuarios registrados: Una página donde los administradores pueden ver y gestionar los usuarios registrados en el sitio.
Vacantes publicadas: Una página donde los administradores pueden ver y gestionar las vacantes publicadas en el sitio.
Estas descripciones proporcionan una visión clara de cómo un administrador puede navegar por el sitio web y acceder a las diferentes funcionalidades disponibles.

 */


{
    pages: [
        {
            page: 'Contratista',
            pages: [
                {
                    page: 'Panel de usuario',
                    pages: [
                        'Instituto - Empresa',
                        {
                            page: 'Contratos',
                            pages: [
                                'Información de contrato por :id',
                            ]
                        },
                        {
                            page: 'Mis Vacantes',
                            pages: [
                                'Información de vacante por :id',
                                'Modal de Creación de vacante'
                            ]
                        }
                    ]
                },

            ]

        }
    ]
}

/*

@startuml

skinparam class {
    BackgroundColor<<Enum>> #F5F5DC
    BackgroundColor<<Interface>> #F5F5DC
    BorderColor Black
    ArrowColor Black
    FontSize 15
    AttributeFontSize 15
    StereotypeFontSize 15
    ClassFontSize 15
    ClassAttributeFontSize 15
    ClassStereotypeFontSize 15
    ClassBorderColor Black
    ClassArrowColor Black
}

skinparam {
    shadowing false
    linetype ortho
    ranksep 50
    nodesep 25
}

[Contratista] --> [Panel de usuario]

[Panel de usuario] --> [Instituto - Empresa]
[Panel de usuario] --> [Contratos]
[Panel de usuario] --> [Mis Vacantes]

[Contratos] --> [Información de contrato por :id]

[Mis Vacantes] --> [Información de vacante por :id]
[Mis Vacantes] --> [Modal de Creación de vacante]

@enduml


Descripción del Diagrama
El diagrama navegacional representa la estructura de navegación para un "Contratista" en el sitio web. Este diagrama muestra las principales páginas accesibles para un contratista y cómo están interconectadas.

Descripción de las Páginas
Contratista: Esta es la página principal desde la cual un contratista puede acceder a las demás páginas del sitio.

Panel de usuario: Un panel donde los contratistas pueden gestionar diferentes aspectos del sitio.

Instituto - Empresa: Una página donde los contratistas pueden gestionar la información relacionada con su instituto o empresa.

Contratos: Una sección donde los contratistas pueden gestionar sus contratos.

Información de contrato por :id: Una página que muestra la información detallada de un contrato específico.
Mis Vacantes: Una sección donde los contratistas pueden gestionar sus vacantes.

Información de vacante por :id: Una página que muestra la información detallada de una vacante específica.
Modal de Creación de vacante: Una página o modal donde los contratistas pueden crear nuevas vacantes.


 */



{
    pages: [
        {
            page: 'Artista',
            pages: [
                {
                    page: 'Panel de usuario',
                    pages: [
                        {
                            page: 'Contratos',
                            pages: [
                                'Información de contrato por :id',
                            ]
                        },
                        {
                            page: 'Capacidades artisticas',
                            pages: [
                                'Cantante',
                                'Instrumentista',
                                'Director de Orquesta',
                                'Director de escena'
                            ]
                        }
                    ]
                },
            ]
        }
    ]
}