import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import "intl";
import "intl/locale-data/jsonp/en";
import Swiper from 'react-native-swiper';
import OrderLast from './OrderLast';
import productDepositApi from '../api/depost/depositApi'
import {COLORS, FONTS} from '../constants'
import luxsa from '../assets/data/Image360View';

const { width, height } = Dimensions.get('window')

const VinCarDeposit = ({navigation}) => {
    const dataContainer = [
        {
            id: 1,
            containerDeposit: 'http://192.168.234.1//images/ldp-all-cars/President.jpg',
            containerDepositActive: 'http://192.168.234.1//images/ldp-all-cars/President-highlight.jpg',
        },
        {
            id: 2,
            containerDeposit: 'http://192.168.234.1//images/ldp-all-cars/LuxSA.jpg',
            containerDepositActive: 'http://192.168.234.1//images/ldp-all-cars/LuxSA-highlight.jpg',
        },
        {
            id: 3,
            containerDeposit: 'http://192.168.234.1//images/ldp-all-cars/LuxA.jpg',
            containerDepositActive: 'http://192.168.234.1//images/ldp-all-cars/LuxA-highlight.jpg',
        },
        {
            id: 4,
            containerDeposit: 'http://192.168.234.1//images/ldp-all-cars/Fadil.jpg',
            containerDepositActive: 'http://192.168.234.1//images/ldp-all-cars/Fadil-highlight.jpg',
        },
        {
            id: 5,
            containerDeposit: 'http://192.168.234.1//images/ldp-all-cars/VFe34.jpg',
            containerDepositActive: 'http://192.168.234.1//images/ldp-all-cars/VFe34-highlight.jpg',
        },
        // {
        //     id: 6,
        //     containerDeposit: 'http://192.168.234.1//images/vf-8/neptune-grey/1.jpg',
        //     containerDepositActive: 'http://192.168.234.1//images/vf-8/neptune-grey/1.jpg',
        // },
        // {
        //     id: 7,
        //     containerDeposit: 'http://192.168.234.1//images/vf-9/neptune-grey/1.jpg',
        //     containerDepositActive: 'http://192.168.234.1//images/vf-9/neptune-grey/1.jpg',
        // },
    ]
    const carFisrt = [17, 0, 6, 12, 25]

    const [background, setBackground] = useState('http://192.168.234.1/images/lux-sa/brahminy-white/1.png')
    
    const [postData, setPostData] = useState([])
    
    const name = ['president', 'lux-sa', 'lux-a', 'fadil', 'vfe-34'];
    const nameTitle = ['PRESIDENT', 'LUX SA2.0', 'LUX A2.0', 'FADIL', 'VF e34'];

    const [type, setType] = useState('lux-sa')

    useEffect(() => {
        const getCarDeposit = async () => {
            try {
                const res = await productDepositApi.getOneCar(type)
                setPostData(res.data)
            } catch(err) {
                alert(err)
            }
        }
        getCarDeposit()          
    }, [type])


    const [active, setActive] = useState(1);
    const [active2, setActive2] = useState(carFisrt[1]);
    const [active3, setActive3] = useState(0);

    const renderItem = ({ item, index }) => (
        <View key={index}>
            <TouchableHighlight
                onPress={() => (setActive(index), setType(name[index]), setBackground(`http://192.168.234.1/images/lux-sa/brahminy-white/1.png`))}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 10,
                    padding: 5,
                    height: 160,
                }}
            >
                <View style={styles.item}>
                    <Image 
                        style={[{width: 138.48, height: 92.31}, index === active ? {display: 'none'} : {display: 'flex'}]}
                        source={{uri: item.containerDeposit}}
                    />
                    <Image 
                        style={[{width: 138.48, height: 92.31}, index === active ? {display: 'flex'} : {display: 'none'}]}
                        source={{uri: item.containerDepositActive}}
                    />
                    <Text style={styles.h2}>{name[index]}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );

    const renderColorCar = ({ item, index }) => (
            <TouchableOpacity
                onPress={() => (alert(item.color.toLowerCase().split(' ').join('-')), setActive2(index), setActive3(index), setBackground(`http://192.168.234.1/images/${type}/${item.color.toLowerCase().replace(" ", "-")}/1.png`))}
            >
            <View style={[{backgroundColor: item.color_code}, styles.ItemColorCar, active2 === index ? {borderColor: COLORS.blue} : null]}>
            </View>
            </TouchableOpacity>
    );

    return (
        <>
            <View style={styles.vinCarDeposit}>
                <FlatList
                    data={dataContainer}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => String(index)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{paddingVertical: 10}}
                />
            </View>
            <View style={styles.vinCarDetail}>
                <View style={styles.vinCarDetail360}>
                    <Image 
                        style={{width: 366, height: 238}}
                        source={{uri: background}}
                    />
                </View>
                <View style={styles.vinCarDetailSelect}>
                    <View style={styles.groupNameTitle}>
                        <Text style={styles.title}>{nameTitle[active]}</Text>
                        <View style={styles.amount}>
                            <Text style={{fontSize: 18, marginTop: 5, marginBottom: 10,}}>Số tiền đặt cọc</Text>
                            <Text style={{fontSize: 28, fontWeight: '700', lineHeight: 34, color: COLORS.blue}}>{new Intl.NumberFormat('en').format(postData[active] ? postData[active].deposits : 50000000)} vnđ</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.selectColor}>Lựa chọn màu ngoại thất</Text>
                        <View style={styles.listColor}>
                            <FlatList
                                data={postData}
                                renderItem={renderColorCar}
                                keyExtractor={(item, index) => String(index)}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{paddingVertical: 10}}
                            />
                        </View>
                        {
                            postData[active3] ? <Text style={styles.colorName}>{postData[active3].color}</Text> : null
                        }
                    </View>
                    <View style={styles.groupNameColor}>
                        <Text style={styles.selectColor}>Lựa chọn màu nội thất</Text>
                        <Image 
                            style={styles.colorInterior}
                            source={{uri: 'https://kienne269.github.io/vinfast-cars-deposit.html/assets/img/LUX-SA/thumb-MD04-PO21.jpg'}}
                        />
                        <Text style={styles.colorName}>Da tiêu chuẩn</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={styles.policy}>Chi tiết chính sách bán hàng</Text>
                    </View>
                </View>
            </View>
            <OrderLast navigation={navigation} image_car={name[active] && postData[active3] ? `http://localhost:3000/images/${name[active]}/${postData[active3].color2}/2.png` : null} price={postData[active] ? postData[active].price : null} money_deposit={postData[active] ? postData[active].deposits : null} nameCar={nameTitle[active] ? nameTitle[active] : null} colorCar={postData[active3] ? postData[active3].color : null}/>
        </>
    )
}

export default VinCarDeposit

const styles = StyleSheet.create({
    vinCarDeposit: {
        height: 110,
    },
    vinCarDepositContainer: {
        
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignContent: 'center',
        flexDirection: 'row',
    },
    item: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    h2: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 24,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 20,
        marginBottom: 20,
    },
    vinCarDetail: {
        borderColor: '#ccc',
        borderBottomWidth: 1,
        borderStyle: 'solid',
    },
    vinCarDetail360: {

    },
    vinCarDetailSelect: {
        textAlign: 'center',
        marginTop: 100,
        paddingLeft: 30,
        paddingRight: 30,
    },
    groupNameTitle: {
        
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        fontStyle: 'normal',
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderStyle: 'solid',
        textAlign: 'center',
    },
    amount: {
        alignItems: 'center', 
        justifyContent: 'center',
    },
    groupNameColor: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    listColor: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ItemColorCar: {
        borderRadius: 50,
        borderColor: '#e4e4e4',
        borderStyle: 'solid',
        borderWidth: 3,
        width: 40,
        height: 40,
        marginRight: 10,
    },
    selectColor: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'center',
        width: '100%',
    },
    colorInterior: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: COLORS.blue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorName: {
        textAlign: 'center',
    },
    policy: {
        marginTop: 40,
        marginBottom: 40,
        color: COLORS.blue,
        borderColor: COLORS.blue,
        borderBottomWidth: 1,
        borderStyle: 'solid',
    },
})