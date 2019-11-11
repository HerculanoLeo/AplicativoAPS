import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    buttonTouchStyle : {

    },
    container: {
        flex: 1,
        backgroundColor: '#20DB46',
    },

    list:{
        padding: 15,

    },

    chamadoContainer: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#696969',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10, 
    },

    tituloChamado: {
        textAlign : 'center',
        color: '#000000',
        fontSize : 15,
        fontWeight : 'bold',
        textAlignVertical : 'top',
    },
    
    descricaoChamado: {
        textAlign : 'left',
        color: '#000000',
        fontSize : 12,
        padding: 8
    },
    
    dataChamado: {
        textAlign : 'right',
        color: '#000000',
        fontSize : 12,
        padding: 8
    }

});

export default styles;