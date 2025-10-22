# AA 12 Pasos — Sitio estático (educativo)

> **Aviso**: Este proyecto es independiente y no está afiliado oficialmente a Alcohólicos Anónimos (AA). Los textos aquí mostrados son **resúmenes originales** con fines informativos y educativos. Para el contenido oficial, visita [aa.org](https://www.aa.org).

## Estructura
- `index.html` — Página principal
- `styles.css` — Estilos
- `app.js` — Carga dinámica de tarjetas con los 12 pasos (resúmenes)
- `assets/aa-logo-placeholder.svg` — Logo placeholder para reemplazar
- `assets/favicon.svg` — Favicon
- `vercel.json` — Configuración mínima para despliegue estático

## Uso local
```bash
# Clonar o descargar el proyecto
# Abrir index.html directamente o servirlo con un servidor simple
python3 -m http.server 8080
# Luego visita http://localhost:8080
```

## Despliegue en Vercel (recomendado)
1. Sube este repo a GitHub.
2. Entra a Vercel y crea un nuevo proyecto conectado a tu repositorio.
3. Selecciona framework **Other** (estático) y despliega.
4. Si tu repo tiene subcarpetas, asegúrate de que la raíz del proyecto sea la carpeta que contiene `index.html`.

## Git rápido
```bash
git init
git add .
git commit -m "feat: sitio AA 12 pasos (single page)"
git branch -M main
git remote add origin git@github.com:TU_USUARIO/aa-12-pasos-site.git
git push -u origin main
```

## Nota de marca
El uso del logotipo y nombres de AA puede estar sujeto a lineamientos específicos. Sustituye el placeholder por un archivo al que tengas derecho de uso y cita las fuentes oficiales.
