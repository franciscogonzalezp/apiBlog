# apiBlog


# API Blog

## Recuperar todos los posts

Method: GET
Url: /api/posts
Headers: XXXX
Body: XXXX

Response: Un array con todos los posts y cada post lleva los datos de su autor
Respuesta: 
```json
[
    { "id": 1, "titulo": "Viaje a India", "descripcion": "................", "categoria": "Viajes", "autor": {"id": 1, "nombre": "Juan", "email": "juan@email.com", "imagen": "https://placehold.co/600x400/png"}
    },
    { "id": 2, "titulo": "Receta tortilla patatas", "descripcion": "................", "categoria": "Cocina", "autor": {"id": 1, "nombre": "Juan", "email": "juan@email.com", "imagen": "https://placehold.co/600x400/png"}
    },
]
```

## Recuperar un post a partir de su ID

Method: GET
Url: /api/posts/<POSTID>
Headers: XXX
Body: XXX

Response: Un objeto con los datos del post

## Recuperar todos los posts de un autor

Method: GET
Url: /api/posts/autor/<AUTORID>
Headers: XXX
Body: XXXX

## Crear un nuevo post

Method: POST
Url: /api/posts
Headers: XXX
Body: titulo, descripcion, categoria, autorId

Response: El objeto que representa el nuevo post creado

## Actualización completa de un post

Method: PUT
Url: /api/posts/<POSTID>
Headers: XXX
Body: titulo, descripcion, categoria

Response: Los datos del post actualizados

## Borrado de un post

Method: DELETE
Url: /api/posts/<POSTID>
Headers: XXX
Body: XXX

Response: Un mensaje indicando el borrado correcto del post


## Recuperar todos los autores

Method: GET
Url: /api/autores
Headers: XXXX
Body: XXXX

Response: Un array con todos los autores


## Recuperar un autor a partir de su ID

Method: GET
Url: /api/autores/<AUTORID>
Headers: XXX
Body: XXX

Response: Un objeto con los datos del autor


## Crear un nuevo autor

Method: POST
Url: /api/autores
Headers: XXX
Body: nombre, email, imagen

Response: El objeto que representa el nuevo autor creado

## Actualización completa de un autor

Method: PUT
Url: /api/autores/<AUTORID>
Headers: XXX
Body: nombre, email, imagen

Response: Los datos del autor actualizados

## Borrado de un autor

Method: DELETE
Url: /api/autores/<AUTORID>
Headers: XXX
Body: XXX

Response: Un mensaje indicando el borrado correcto del autor

