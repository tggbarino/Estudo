import { Text, TouchableOpacity, View } from "react-native"


const DashboardView = ({navigation})=>{

    return(
        <View>
            <Text>Dashboard</Text>
            <TouchableOpacity 
            onPress={ ()=>{ 
                navigation.navigate('telaInicial') 
                } }>
                <Text>SAIR</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DashboardView