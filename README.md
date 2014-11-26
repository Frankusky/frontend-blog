# Tu Blog

Para este proyecto, vas a desarrollar un blog. Es importante que te enfoques
en desarrollar el Blog cómo se pide en la imagen. Si quieres seguirle agregando
funcionalidades y cambios visuales, hazlo en una nueva `branch`. En el `branch master`
debe estar igual a las especificaciones aquí para que al final, cuando subas tu
proyecto sea calificado de forma automática.

1. Fork y clonar repositorio
2. Abrir el diseño y analizar
3. Escribir código
4. Entrega


## 1. Fork y clonar repositorio

Hacer **Fork** de este repositorio para tu usuario. Luego debes clonar tu repositorio localmente. En el terminal debes ingresar algo como:

```
git clone https://github.com/cognits/frontend-blog.git
```
Cambiando *cognits* por tu usuario.

## 2. Abrir el diseño y analizar

Una imagen o Photoshop de un diseñador va a ser tu única guía cuando te
encuentres en un equipo de desarrollo. Esa imagen te dará las guías sobre las cuales
esperan el software. Eso buscamos hacer aquí! Abre la imagen [blog-sketch](blog-sketch.png)
para ver cómo te debe quedar tu página.


## 3. Escribir código

Asegura escribir todo tu código de HTML en [index.html](index.html) y todo tu CSS en [styles.css](css/styles.css). Lo que buscas es reproducir en código la imagen [portfolio-sketch](portfolio-sketch.png) lo más similar posible.

### Escribe 3 posts
Ahora debes escribir al menos 3 posts. Cada post individual debe quedar en un archivo
.md, adentro del folder *_posts*. El nombre debe estar en el formato "año-mes-dia-nombre-del-post.md". Estos los tienes que leer via Javascript/JQuery y mostrarlos
adentro del blog en orden de más reciente a más antiguo.

### Avanzado
Sólo hasta después de completar la página principal del blog, puedes continuar a los
temas avanzados. Ahora crea un buscador usando Javascript y JQuery que
busque los posts por el *query* y regrese el qué contiene esas palabras.

### Corriendo los tests localmente

Para asegurar que tu código pase, debes correr los tests en tu computadora. Para eso,
vamos a usar la herramienta llamada [Gulp](http://www.gulpjs.com) que corre en [Node.JS](http://www.nodejs.org).

Si seguiste todos los pasos detallados en [Pre-requisitos](1. Pre-requisitos), usando
terminal, entra al folder del proyecto. Allí escribe los siguientes comandos:

```
npm -d install
```
Luego que se instalan los módulos, corre:
```
gulp
```

## 4. Entrega

Para entregar el proyecto, debemos hacer commit de los cambios y luego empujarlos
a tu repositorio remoto en Github.

### Commit y Push

```
git add .
git commit -m 'Ya funciona el search del blog'
```
Luego debemos enviar el código a tu repositorio en Github.

```
git push origin master
```

### Pull Requests

Luego de tener tus cambios en Github, debes hacer click en el link **Pull Requests**
que se encuentra en la página de Github de tu proyecto. Luego sigue las
instrucciones que dan allí.

## 6. Retroalimentación

Ahora toca ver el código de tus compañeros y dejar tus comentarios. Entra al
proyecto de un compañero y haz 3 sugerencias de su código usando **Issues**.

## Visualizar pagina
###http://frankusky.github.io/frontend-blog. 
