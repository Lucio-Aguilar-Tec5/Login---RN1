import * as Facebook from 'expo-auth-session/providers/facebook';
import { useEffect } from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Componente principal para la autenticación con Facebook
export default function FacebookAuthScreen() {
  const navigation = useNavigation();
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: '1592423571680666',
    redirectUri: 'https://9514-201-178-196-8.ngrok-free.app/Login',
  });

   // Usa un efecto para manejar la respuesta de la autenticación cuando cambia
  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log('Auth success:', authentication);
      // Redirigir a la nueva ventana/perfil
      navigation.navigate('ProfileScreen'); // Asegúrate de que esta ruta esté definida en tu navegación
    } 
    // Si hubo un error en la autenticación, 'response.type' será 'error'
    else if (response?.type === 'error') {
      console.error('Authentication error:', response.error);
    }
  }, [response]);

  return (
    // Renderiza un botón que permite al usuario iniciar sesión con Facebook
    <Button
      disabled={!request}
      title="Login with Facebook"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}
