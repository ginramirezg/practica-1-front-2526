
# Cómo ejecutar este proyecto

## Requisitos

Antes de comenzar, se deberá tener instalado:

* Node.js (versión LTS recomendada)

Podrá comprobarse ejecutando:

```bash
node -v
npm -v
```

En caso de no estar instalado, se recomendará utilizar NVM para instalar la versión LTS de Node.js.

---

## 1. Clonar el repositorio

Se deberá clonar el repositorio y acceder a la carpeta del proyecto:

```bash
git clone URL_DEL_REPOSITORIO
cd nombre-del-proyecto
```

---

## 2. Crear archivo de variables de entorno

Este proyecto utilizará variables de entorno.
El archivo `.env` no se habrá subido a GitHub por motivos de seguridad.

Se deberá crear un archivo llamado:

```
.env
```

En la raíz del proyecto (al mismo nivel que `package.json`) y añadir el siguiente contenido:

```
VITE_API_URL=https://swapi.dev/api
```

Se deberá guardar el archivo antes de continuar.

---

## 3. Instalar dependencias

Se deberá ejecutar el siguiente comando:

```bash
npm install
```

Este comando instalará automáticamente todas las dependencias definidas en el archivo `package.json`.

No será necesario instalar React ni Vite de forma manual.

---

## 4. Ejecutar el servidor de desarrollo

Para iniciar el proyecto, se deberá ejecutar:

```bash
npm run dev
```

El proyecto se ejecutará normalmente en:

```
http://localhost
```

---

## Notas importantes

* No será necesario instalar React ni Vite de forma global.
* Todas las dependencias se instalarán automáticamente mediante `npm install`.
* El archivo `.env` deberá crearse manualmente, ya que no estará incluido en el repositorio por razones de seguridad.



Perfecto. Aquí tienes el texto corregido, manteniendo la explicación pero sin incluir el contenido del archivo `types.ts`.

---

# Breve explicación del desarrollo del proyecto

## Metodología seguida

El proyecto lo desarrollé siguiendo una progresión de menor a mayor complejidad.

En primer lugar, creé un nuevo proyecto utilizando el comando:

```bash
npm create vite@latest
```

Posteriormente, accedí a la carpeta del proyecto y lo abrí en Visual Studio Code mediante:

```bash
code .
```

### 1. Definición de los tipos

Antes de comenzar con los componentes, construí el archivo `types.ts`, donde definí los tipos necesarios para representar la estructura de los datos recibidos desde la API.

Definir los tipos desde el inicio me permitió trabajar con TypeScript de forma más segura, tipar correctamente las props de los componentes y evitar errores relacionados con la estructura de los datos.

---

### 2. Creación de componentes

Una vez definidos los tipos, comencé a construir los componentes de forma modular:

* `CharacterCard.tsx`
* `CharacterList.tsx`
* `LoaderComponent.tsx`
* `ErrorComponent.tsx`

Organicé las responsabilidades de la siguiente manera:

* `CharacterCard` se encarga de renderizar la información individual de cada personaje.
* `CharacterList` recibe el array de personajes y los recorre para mapearlos a un `CharacterCard`
* `LoaderComponent` muestra el estado de carga mientras se realiza la petición.
* `ErrorComponent` muestra posibles errores si la petición falla.
* `App.tsx` centraliza la lógica principal (llamada a la API, gestión de estados y paginado).

---

### 3. Implementación en App.tsx

Finalmente, implementé la lógica principal en `App.tsx`, incluyendo:

* La llamada a la API utilizando la variable de entorno `VITE_API_URL`.
* La gestión de estados mediante `useState` (personajes, loading, error y next).
* El uso de `useEffect` para realizar la petición inicial al montar el componente.
* La implementación del sistema de paginado utilizando la propiedad `next` que devuelve la API.

---

## Problemas encontrados y soluciones aplicadas

### 1. La API devuelve un array de personajes

Uno de los primeros problemas que encontré fue que la API devuelve un array dentro de la propiedad `results`.

Inicialmente no estaba recorriendo correctamente ese array, lo que impedía que los personajes se mostrasen de forma individual.

La solución fue utilizar el método `.map()` dentro de `CharacterList.tsx`, permitiendo transformar cada elemento del array en un componente `CharacterCard`.

De esta manera conseguí renderizar correctamente cada personaje.

---

### 2. Problema con la URL de la API

Al principio estaba utilizando la URL:

`swapi.info/api/`

Sin embargo, esta no devolvía la estructura necesaria para implementar el paginado, ya que no incluía propiedades como `count`, `next`, `previous` y `results`.

Estas propiedades son fundamentales para poder gestionar el paginado correctamente.

Tras revisar la documentación de la API, descubrí que debía utilizar:

`https://swapi.dev/api/`

Al modificar la URL en el archivo `.env`, pude implementar correctamente el sistema de paginación utilizando la propiedad `next`.

---

### 3. Problemas con el CSS

Otro de los aspectos que más dificultad me generó fue la gestión de estilos.

Tuve complicaciones al intentar:

* Aplicar un estilo individual a cada `CharacterCard`.
* Mantener al mismo tiempo un diseño estructurado en `CharacterList`.

El problema estaba relacionado con la organización de los contenedores padre e hijo y el uso de `flexbox`.

La solución consistió en:

* Definir estilos independientes para cada componente.
* Aplicar correctamente `display: flex` o `display: grid` en el contenedor de `CharacterList`.
* Mantener los estilos propios (bordes, padding y dimensiones) dentro de `CharacterCard`.

De esta forma conseguí separar correctamente la responsabilidad del contenedor y del componente individual.

---

## Conclusión

Desarrollé el proyecto de forma incremental, comenzando por la definición de tipos, continuando con la creación de componentes y finalizando con la implementación de la lógica principal.

Los problemas encontrados me permitieron reforzar conceptos como:

* El uso de TypeScript en proyectos React.
* La utilización de `.map()` para renderizar listas dinámicas.
* La estructura real de una API REST.
* La implementación de paginación.
* La correcta separación de responsabilidades entre componentes y estilos.



