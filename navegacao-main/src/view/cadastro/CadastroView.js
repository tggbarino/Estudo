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
            <TouchableOpacity style ={style.titlecadastro}>
                <Text style={style.texto}                >CADASTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style ={style.titleentrar}
            onPress={ ()=>{ 
                navigation.navigate('telaInicial') 
                } }>
                   <Text style={style.texto}
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
        width: '83%',
        textAlign: 'center',
        marginTop: '2%',
        margin: '2%'
    },
    titleentrar:{
        backgroundColor: 'red',
        width: 350,
        display:'flex',
        height: '05%',
        marginTop: 45,
        textAlign:'center',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 40,
        borderBottomLeftRadius:15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

    },
    texto:{
        color: 'white',
        fontSize: 20,

    },
    titlecadastro:{
        backgroundColor: 'green',
        width: 350,
        display:'flex',
        height: '05%',
        textAlign:'center',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 45,
        borderRadius: 40,
        borderBottomLeftRadius:15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    }

    }
)





export default CadastroView