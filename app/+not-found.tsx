// Importa 'Link' y 'Stack' de 'expo-router' para manejar navegación y pantallas
import { Link, Stack } from 'expo-router';
// Importa el módulo 'StyleSheet' de React Native para crear los estilos de los componentes
import { StyleSheet } from 'react-native';

// Importa componentes personalizados para mostrar texto y vistas con temas dinámicos
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Componente principal para mostrar la pantalla de "No encontrado"
export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

// Definición de los estilos para la pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
