import React, { Component } from 'react';
import api from '../services/api';
import Moment from 'react-moment';
import 'moment-timezone';
import styles from '../styles/listStyles';

import { View, Text, FlatList, TouchableOpacity,StyleSheet, Dimensions, Button} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Main extends Component {
    static navigationOptions = {
        title: "Chamados Abertos",
        headerLeftContainerStyle:{
            margin: 10,
            borderRadius: 20,
            
        },        
        headerLeft: () => (
            <Button style={teste.botao}
              onPress={() => alert('This is a button!')}
                title='AA'
             />)
    };


    state = {
        chamadoInfo: {},
        content: [],
        page: 0,
        chamadoStatus: 'aberto',
    };

    componentDidMount() {
        this.loadChamado();
    };

    loadChamado = async (page = 0) => {
        const response = await api.get(`/chamado/status/aberto?page=${page}&&size=${20}&&sort=dataAbertura,id,desc`);
        const { content, ...chamadoInfo } = response.data;
        this.setState({
            content: [...this.state.content, ...content],
            chamadoInfo,
            page
        });

    };

    loadMore = () => {
        const { page, chamadoInfo } = this.state;

        if (page === (chamadoInfo.totalPages - 1)) return;
        pageNumber = page + 1;

        this.loadChamado(pageNumber);
    };


    renderItem = ({ item }) => (
        <View style={styles.chamadoContainer}>
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("Products");
            }}>
                <Text style={styles.tituloChamado}>{item.titulo_Chamado}</Text>
                <Text style={styles.descricaoChamado}>{item.descricao_Chamado}</Text>
                <Text style={styles.dataChamado}>
                    Data de Abertura: <Moment format="DD/MM/YYYY HH:MM:SS" element={Text} date={item.dataAbertura} />
                </Text>
            </TouchableOpacity>
        </View>
    );

    render() {
        return (
            
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.content}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.3}
                />
            </View>
        );
    }
}

const teste = StyleSheet.create({
    botao: {
        marginLeft: 10,
        aspectRatio: 20,
    }
})