/**
 * ViewUtils
 * @flow
 **/
'use strict'

import React  from 'react';
import {
    TouchableHighlight,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class ViewUtils {
    /**
     * 获取设置页的Item
     * @param callBack 单击item的回调
     * @param icon 左侧图标
     * @param text 显示的文本
     * @param tintStyle 图标着色
     * @param expandableIco 右侧图标
     * @return {XML}
     */
    static getSettingItem(callBack, icon, text, tintStyle, expandableIco) {
        return (
            <TouchableHighlight
                onPress={callBack}>
                <View style={[styles.setting_item_container]}>
                    <View style={{alignItems: 'center', flexDirection: 'row'}}>
                        {icon ?icon : <View style={{opacity: 1, width: 16, height: 16, marginRight: 10,}}/>}
                        <Text>{text}</Text>
                    </View>
                    <Image source={expandableIco ? expandableIco : require('../res/images/ic_tiaozhuan.png')}
                           style={[{
                               marginRight: 10,
                               height: 22,
                               width: 22,
                               alignSelf: 'center',
                               opacity: 1
                           },tintStyle]}/>
                </View>
            </TouchableHighlight>
        )
    }


    static getRightButton(title, callBack) {
        return <TouchableOpacity
            style={{alignItems: 'center',}}
            onPress={callBack}>
            <View style={{marginRight: 10}}>
                <Text style={{fontSize: 20, color: '#FFFFFF',}}>{title}</Text>
            </View>
        </TouchableOpacity>
    }


    /**
     * 获取分享按钮
     * @param callBack
     * @returns {XML}
     */
    static getShareButton(callBack) {
        return <TouchableHighlight
            underlayColor={'transparent'}
            onPress={callBack}
        >
            <Image
                style={{width: 20, height: 20,opacity:0.9,marginRight:10,tintColor:'white'}}
                source={require('../res/images/ic_share.png')}/>
        </TouchableHighlight>
    }
}

const styles = StyleSheet.create({
    setting_item_container: {
        backgroundColor: 'white',
        padding: 10, height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
})