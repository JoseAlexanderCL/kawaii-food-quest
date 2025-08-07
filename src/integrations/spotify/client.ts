import SpotifyWebApi from 'spotify-web-api-js';

// Extend the SpotifyWebApi type to include a clientId field
interface SpotifyClient extends SpotifyWebApi {
  clientId?: string;
}

// Spotify client configured with the client ID from the environment
export const spotifyClient: SpotifyClient = new SpotifyWebApi();
spotifyClient.clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

// Function to update the access token after the authentication flow
export function setAccessToken(token: string) {
  spotifyClient.setAccessToken(token);
}

export default spotifyClient;
