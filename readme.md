# **SISTEMA DE GESTIÓN**
# **_API PASTELERIA_** <hr>
> ## Descripción
- API REST para la gestión de procesos en pastelería.

<hr>

>## Métodos

- ### **Login**
    **MÉTODO**  | **PARA**
    ------------ | -------------
    POST         | Autenticación
    <hr>

- ### **Usuarios**
    **MÉTODO**  | **PARA**
    ------------ | -------------
    GET          | Obtener todos 
    GET:{id}     | Obtener uno
    PUT:{id} *   | Edita uno
    POST *       | Crea uno
    DELETE:{id} *| Elimina uno
    <hr>

#### (*) Requieren de autenticación

<style>table{margin:15px;pading:5px;border:1px solid rgba(150,20,150);box-shadow:1px 1px rgba(20,20,20), -1px -1px rgba(20,20,20)}h1{text-shadow: 2px 2px 2px #CE5937;}h2{text-shadow: 1px 1px 1px #CE5937;}h3{text-shadow: 2px 2px 2px rgb(70,0,50);}h4{color:red;font-weight:bolder;}</style>