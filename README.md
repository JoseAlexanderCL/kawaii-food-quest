# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/c9476139-f7a8-44a7-bb3b-31956b415069

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/c9476139-f7a8-44a7-bb3b-31956b415069) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/c9476139-f7a8-44a7-bb3b-31956b415069) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Credenciales de Spotify

1. Visita el [Spotify Developer Dashboard](https://developer.spotify.com/dashboard).
2. Inicia sesión con tu cuenta de Spotify y crea una aplicación.
3. Dentro de la aplicación, copia el **Client ID** y añade la URL de redirección en la sección *Redirect URIs*.
4. Guarda los cambios y usa esos valores para `VITE_SPOTIFY_CLIENT_ID` y `VITE_SPOTIFY_REDIRECT_URI` en el archivo `.env`.
5. Para obtener un `playlist_id`, abre la playlist en Spotify, usa "Compartir > Copiar enlace" y extrae el identificador de la URL. Asigna este valor a `VITE_SPOTIFY_PLAYLIST_ID`.
