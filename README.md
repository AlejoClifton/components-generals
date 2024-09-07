# Componentes Reutilizables en Next.js 14 con CSS Modules y TypeScript

Este proyecto incluye una colección de componentes reutilizables diseñados para ser utilizados en múltiples proyectos desarrollados con Next.js 14, CSS Modules y TypeScript. Cada componente está diseñado para ser flexible, personalizable y fácil de integrar en diversas aplicaciones.

## Descripción de los Componentes

### 1. Componente de Layout

-   **Descripción**: Encapsula la estructura principal del sitio, incluyendo el encabezado, pie de página y barra lateral.
-   **Props**:
    -   `children`: El contenido que se mostrará dentro del layout.
    -   `title`: Título opcional para propósitos de SEO.
-   **Uso**: Asegura una estructura y estilo consistentes en todas las páginas.

### 2. Componente de Botón

-   **Descripción**: Un botón personalizable que puede variar en estilo y tamaño.
-   **Props**:
    -   `type`: El tipo de botón (por ejemplo, `submit`, `button`).
    -   `onClick`: Función que se ejecuta al hacer clic en el botón.
    -   `variant`: Variante de estilo (por ejemplo, primario, secundario).
    -   `size`: Tamaño del botón (pequeño, mediano, grande).
-   **Uso**: Puede ser utilizado en formularios, modales y cualquier lugar donde se necesite un botón.

### 3. Componentes de Formulario

-   **Descripción**: Componentes para entradas de formulario, como `Input`, `Select`, `TextArea`, y `Checkbox`.
-   **Props**:
    -   `type`: Tipo de entrada (por ejemplo, `text`, `password`).
    -   `name`: Nombre del campo.
    -   `value`: Valor del campo.
    -   `onChange`: Función que se ejecuta cuando el valor del campo cambia.
    -   `placeholder`: Texto de marcador de posición.
    -   `label`: Etiqueta asociada con el campo.
-   **Uso**: Útil en cualquier formulario a lo largo de la aplicación.

### 4. Componente de Modal

-   **Descripción**: Un componente modal reutilizable para mostrar contenido en una ventana emergente.
-   **Props**:
    -   `isOpen`: Indica si el modal está abierto o cerrado.
    -   `onClose`: Función que se ejecuta al cerrar el modal.
    -   `title`: Título del modal.
    -   `content`: Contenido a mostrar dentro del modal.
-   **Uso**: Se puede utilizar para confirmaciones, formularios u otros contenidos emergentes.

### 5. Componente de Tarjeta (Card)

-   **Descripción**: Un componente que muestra información en formato de tarjeta, común para listados o resúmenes de contenido.
-   **Props**:
    -   `title`: Título de la tarjeta.
    -   `image`: Imagen asociada a la tarjeta.
    -   `description`: Descripción del contenido de la tarjeta.
    -   `actions`: Acciones disponibles (botones, enlaces).
-   **Uso**: Puede ser utilizado en galerías, listados de productos, etc.

### 6. Componente de Tabla

-   **Descripción**: Un componente de tabla configurable para mostrar diferentes tipos de datos.
-   **Props**:
    -   `columns`: Columnas a mostrar en la tabla.
    -   `data`: Datos a mostrar en la tabla.
    -   `onRowClick`: Función que se ejecuta al hacer clic en una fila.
    -   `sort`: Opciones de ordenamiento.
    -   `pagination`: Opciones de paginación.
-   **Uso**: Útil para mostrar listados de datos, como usuarios, productos, etc.

### 7. Componente de Breadcrumbs (Migas de Pan)

-   **Descripción**: Un componente para mostrar la jerarquía de navegación del usuario.
-   **Props**:
    -   `items`: Lista de enlaces o nombres que representan la jerarquía de navegación.
-   **Uso**: Ideal para páginas con navegación profunda.

### 8. Componente de Notificación/Toast

-   **Descripción**: Un componente para mostrar notificaciones o mensajes emergentes.
-   **Props**:
    -   `message`: Mensaje a mostrar.
    -   `type`: Tipo de notificación (éxito, error, advertencia).
    -   `duration`: Duración de la notificación.
-   **Uso**: Útil para proporcionar retroalimentación a los usuarios en toda la aplicación.

### 9. Componente de Cargador/Spinner

-   **Descripción**: Un componente para mostrar un indicador de carga.
-   **Props**:
    -   `size`: Tamaño del indicador.
    -   `color`: Color del indicador.
-   **Uso**: Utilizado en áreas donde los datos están siendo cargados asíncronamente.

### 10. Componente de Avatar

-   **Descripción**: Un componente para mostrar la imagen o las iniciales del usuario.
-   **Props**:
    -   `src`: Fuente de la imagen.
    -   `alt`: Texto alternativo.
    -   `size`: Tamaño del avatar.
    -   `initials`: Iniciales a mostrar si no hay imagen disponible.
-   **Uso**: Puede ser utilizado en perfiles de usuario, comentarios, etc.

### 11. Componente de Paginación

-   **Descripción**: Un componente para manejar la paginación de contenido.
-   **Props**:
    -   `currentPage`: Página actual.
    -   `totalPages`: Total de páginas disponibles.
    -   `onPageChange`: Función que se ejecuta cuando cambia la página.
-   **Uso**: Utilizado en listados o tablas que manejan grandes cantidades de datos.

### 12. Componente de SEO

-   **Descripción**: Un componente para manejar las etiquetas `meta`, `title`, y otras configuraciones de SEO.
-   **Props**:
    -   `title`: Título de la página.
    -   `description`: Descripción de la página.
    -   `keywords`: Palabras clave asociadas con la página.
-   **Uso**: Utilizado en la mayoría de las páginas para asegurar un buen SEO.

---

Cada uno de estos componentes está diseñado para ser fácilmente configurable y reutilizable, asegurando una base sólida y coherente en todos los proyectos que utilicen Next.js 14, CSS Modules y TypeScript.
