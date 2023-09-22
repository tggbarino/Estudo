import { Text, TouchableOpacity, View, StyleSheet } from "react-native"
import TopBoard from "../../components/TopBoard/TopBoard"
import { IconButton } from "react-native-paper"


const HomeView = ({ navigation }) => {

    const style = StyleSheet.create({
        containerHV: {
            flex: 1,
            alignItems: 'stretch',
        },
        containerHVBtn: {
            flex: 1,
            alignItems: 'stretch',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        }
    })


    return (
        <View style={style.containerHV}>
            <TopBoard></TopBoard>

            <View style={style.containerHVBtn}>

                <IconButton
                    icon="account-lock-outline"
                    containerColor="#00"
                    iconColor="blue"
                    size={84}
                    onPress={() => navigation.navigate('telaLogin')}
                />
                <IconButton
                    icon="account-group"
                    containerColor="#BBC"
                    iconColor="blue"
                    size={84}
                    onPress={() => navigation.navigate('telaCad')}
                />
            </View>
        </View>
    )
}
export default HomeView
