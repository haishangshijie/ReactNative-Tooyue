/**
 * Created by user on 11/10/17.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class ZhihuCell extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isFavorite: this.props.projectModel.isFavorite,
            favoriteIcon: this.props.projectModel.isFavorite ? 'md-star' : 'md-star-outline',
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setFavoriteState(nextProps.projectModel.isFavorite)
    }

    setFavoriteState(isFavorite) {
        this.props.projectModel.isFavorite = isFavorite;
        this.setState({
            isFavorite: isFavorite,
            favoriteIcon: isFavorite ? 'md-star' : 'md-star-outline'
        })
    }

    onPressFavorite() {
        this.setFavoriteState(!this.state.isFavorite)
        this.props.onFavorite(this.props.projectModel.item, !this.state.isFavorite)
    }

    render(){
        let item = this.props.projectModel.item;
        let favoriteButton=item?
            <TouchableOpacity
                style={styles.favorite}
                onPress={()=>this.onPressFavorite()} underlayColor='transparent'>
                <Icon
                    ref='favoriteIcon'
                    name={this.state.favoriteIcon}
                    style={[this.props.theme.styles.selectedTab]}
                    size={25}
                    />
            </TouchableOpacity>:null;

        if (item.images!=null){

            return <TouchableOpacity  onPress={this.props.onSelect}>
                <View style={styles.containerItem}>
                    <Image style={styles.itemImg} source={{uri:item.images[0]}}/>
                    <Text style={styles.title}>{item.title}</Text>
                    {favoriteButton}
                </View>
            </TouchableOpacity>
        }else {
            return <TouchableOpacity onPress={this.props.onSelect}>
                <View style={styles.containerItem}>
                    <CommunityIcon
                        name='react'
                        size={66}
                    />
                    <Text style={styles.title}>{item.title}</Text>
                    {favoriteButton}
                </View>
            </TouchableOpacity>
        }
    }
}

const styles = StyleSheet.create({
    containerItem: {
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: 'white',
        padding: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
    },
    favorite:{
        marginRight:10,
    },
    title: {
        flex:1,
        fontSize: 15,
        paddingLeft: 8,
        paddingRight:8,
        textAlign: 'left',
        color: '#333333'
    },
    itemImg: {
        width: 66,
        height: 66,
    },
});
