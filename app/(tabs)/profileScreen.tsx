// Importa componentes básicos de React Native
import { View, Text, StyleSheet } from 'react-native';

// Define un componente funcional llamado 'ProfileScreen'
export default function ProfileScreen() {
  return (
    // Contenedor principal de la pantalla
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a tu perfil</Text>
      <Text style={styles.text}>Aquí verás la información de tu cuenta</Text>
    </View>
  );
}

// Define los estilos de la pantalla utilizando 'StyleSheet.create'
const styles = StyleSheet.create({
  // Estilo para el contenedor principal, el titulo y el texto
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
  },
});
