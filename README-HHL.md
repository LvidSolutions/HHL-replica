# HHL visual replica

This project is a Next.js visual replica starter for hhl.se.

## Run locally

```powershell
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Included routes

- `/`
- `/projects`
- `/projects/[slug]`
- `/news`
- `/practice`

## Content

Project data is stored in:

```txt
content/projects.json
```

Images are stored in:

```txt
public/projects/{project-slug}/
```

## Notes

The crawler successfully extracted 17 project folders and 115 images. News and Practice are implemented as editable pages with placeholder text, because the uploaded dataset mainly contained project images and generated project JSON rather than full original page text.
