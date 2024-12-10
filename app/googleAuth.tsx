import { useEffect } from 'react';
import { Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { useNavigation } from '@react-navigation/native';

// Componente principal para la autenticación con Google
export default function GoogleAuthScreen() {
  const navigation = useNavigation();
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: '934526600018-mm2k3ksitst2gai6oun14mbc9fbqr3us.apps.googleusercontent.com',
    androidClientId: '934526600018-0ro0c3st54ube9c92ij5ii6qk0085dbq.apps.googleusercontent.com',
    redirectUri: 'https://dev-25dud0tow2iu8cts.us.auth0.com/login/callback',
    scopes: ['profile', 'email'],
  });

    // Usa 'useEffect' para manejar la respuesta de la autenticación
  useEffect(() => {

    if (response?.type === 'success') {
      const { authentication } = response;
      console.log('Auth success:', authentication);
      navigation.navigate('ProfileScreen');
    } else if (response?.type === 'error') {
      console.error('Authentication error:', response.error);
    }
  }, [response]);


  return (
    // Renderiza un botón que permite al usuario iniciar sesión con Google
    <Button
      disabled={!request}
      title="Login with Google"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}








