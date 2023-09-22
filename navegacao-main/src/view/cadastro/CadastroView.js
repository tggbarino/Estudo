import { Text, TouchableOpacity, View, StyleSheet} from "react-native"
import { TextInput } from "react-native-paper"
import LoginView from "../login/LoginView"


const CadastroView = ({navigation})=>{

    return(
        <View style ={style.principal}>
            <Text style ={style.title}>Cadastro</Text>
            <TextInput style={style.input} placeholder="Login"></TextInput>
            <TextInput style={style.input} placeholder="Senha"></TextInput>
            <TextInput style={style.input} placeholder="Data de Nascimento"></TextInput>
            <TextInput style={style.input} placeholder="Email"></TextInput>
            <TextInput style={style.input} placeholder="Sexo"></TextInput>
            <TextInput style={style.input}placeholder="Cep"></TextInput>
            <TextInput style={style.input} placeholder="Endereco"></TextInput>
            <TouchableOpacity 
            onPress={ ()=>{ 
                navigation.navigate('telaInicial') 
                } }>
                <Text style ={style.titlesair}
                >SAIR</Text>
            </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({
    title:{
        fontSize: 40,
        marginLeft: '1%',
        
    },
    principal:{
        display: 'flex',
        alignItems: 'center',
    },
    input:{
        width: '43%',
        textAlign: 'center',
        marginTop: '2%',
        margin: '2%'
    },
    titlesair:{
        backgroundColor: 'red',
        width: '20%',
        padding: '4%',
        width: '43%',
        marginTop: '20%',
        
    }


    }
)





export default CadastroView