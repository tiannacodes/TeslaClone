import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
//Image Background needed to bring in source image files
import CarsList from "./components/CarsList";
import Header from './components/Header';

export default function App() {
    return (
        <View style={styles.container}>
            <Header/>
            <CarsList/>

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
