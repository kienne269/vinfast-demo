import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import OrderLast from './OrderLast';
import { Image360viewer } from 'image360viewer';
import productDepositApi from '../api/depost/depositApi'
import {COLORS, FONTS} from '../constants'

const { width, height } = Dimensions.get('window')

const VinCarDeposit = () => {
    const carFisrt = [17, 0, 6, 12, 25]

    const [background, setBackground] = useState('http://192.168.234.1/images/lux-sa/red.png')
    
    const [container, setContainer] = useState([])
    const [postData, setPostData] = useState([])
    const [allCar, setAllCar] = useState([])
    
    const name = ['president', 'lux-sa', 'lux-a', 'fadil', 'vfe-34'];
    const nameTitle = ['PRESIDENT', 'LUX SA2.0', 'LUX A2.0', 'FADIL', 'VF e34'];

    const [type, setType] = useState('lux-sa')

    useEffect(() => {
        const getCarContainer = async () => {
            try {
                const res = await productDepositApi.getAllCarContainer()
                setContainer(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        getCarContainer() 
    }, [])

    useEffect(() => {
        const getCarDeposit = async () => {
            try {
                const res = await productDepositApi.getOneCar(type)
                setPostData(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        getCarDeposit()          
    }, [type])


    useEffect(() => {
        const getAllCarDeposit = async () => {
            try {
                const res2 = await productDepositApi.getAllCarDeposit()
                setAllCar(res2.data)
            } catch(err) {
                console.log(err)
            }
        }
        getAllCarDeposit()
    }, [])

    const [active, setActive] = useState(1);
    const [active2, setActive2] = useState(carFisrt[1]);
    const [active3, setActive3] = useState(0);

    let car = []
    if (allCar) {
        car = allCar.filter((item, index) => {
            return item.name === nameTitle[active]
        })
    }

    // const li = () => {
    //     return (
    //         <ul>
    //             <li className="active" data="Đỏ" style={{backgroundColor: 'rgb(199, 0, 0)'}}>0</li>
    //             <li className="" data="Xanh" style={{backgroundColor: 'rgb(18, 42, 65)'}}>1</li>
    //             <li className="" data="Xám" style={{backgroundColor: 'rgb(95, 99, 99)'}}>2</li>
    //             <li className="" data="Bạc" style={{backgroundColor: 'rgb(153, 153, 153)'}}>3</li>
    //             <li className="" data="Đen" style={{backgroundColor: 'rgb(0, 0, 0)'}}>4</li>
    //             <li className="" data="Trắng" style={{backgroundColor: 'rgb(255, 255, 255)'}}>5</li>
    //         </ul>
    //     )
    // }

    const Item = ({ container, index, containerActive }) => (
        <TouchableHighlight
            onPress={() => (setActive(index), setType(name[index]), setBackground('http://192.168.234.1/images/lux-sa/red.png'))}
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
                    source={{uri: container}}
                />
                <Image 
                    style={[{width: 138.48, height: 92.31}, index === active ? {display: 'flex'} : {display: 'none'}]}
                    source={{uri: containerActive}}
                />
                <Text style={styles.h2}>{name[index]}</Text>
            </View>
        </TouchableHighlight>
    );

    const renderItem = ({ item, index }) => (
        <Item container={item.container} containerActive={item.containerActive} index= {index}/>
    );

    const ItemColorCar = ({id, colorCode, color, index }) => (
        <TouchableOpacity
            onPress={() => (setActive2(parseInt(id)), setActive3(index))}
        >
          <View style={[{backgroundColor: colorCode}, styles.ItemColorCar, active2 === parseInt(id) ? {borderColor: COLORS.blue} : null]}>
          </View>
        </TouchableOpacity>
      );

    const renderColorCar = ({ item, index }) => (
        <ItemColorCar id={index} color={item.color} colorCode={item.colorCode} index={index}/>
    );

    return (
        <>
            <View style={styles.vinCarDeposit}>
                <FlatList
                    data={container}
                    renderItem={renderItem}
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
                    {/* {
                        allCar ? allCar.map((item, index) => (
                            <View key={index} style={active2 === parseInt(item.id) ? {display: 'flex'} : {display: 'none'}}>
                                <Image360viewer
                                    images={images360}
                                    width={300}
                                    cursorIcon={<Image source={directionsImg} style={styles.icon} />}
                                />
                            </View>
                        )) : null
                    } */}
                </View>
                <View style={styles.vinCarDetailSelect}>
                    <View style={styles.groupNameTitle}>
                        <Text style={styles.title}>{nameTitle[active]}</Text>
                        <View style={styles.amount}>
                            <Text style={{fontSize: 18, marginTop: 5, marginBottom: 10,}}>Số tiền đặt cọc</Text>
                            <Text style={{fontSize: 28, fontWeight: '700', lineHeight: 34, color: COLORS.blue}}>{postData[active] ? postData[active].deposits : '50.000.000'} vnđ</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.selectColor}>Lựa chọn màu ngoại thất</Text>
                        <View style={styles.listColor}>
                            <FlatList
                                data={car}
                                renderItem={renderColorCar}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{paddingVertical: 10}}
                            />
                        </View>
                        {
                            car[active3] ? <Text style={styles.colorName}>{car[active3].color}</Text> : null
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
            <OrderLast image_car={name[active] && car[active3] ? `http://localhost:3000/images/${name[active]}/${car[active3].color2}/2.png` : null} price={postData[active] ? postData[active].price : null} money_deposit={postData[active] ? postData[active].deposits : null} nameCar={nameTitle[active] ? nameTitle[active] : null} colorCar={car[active3] ? car[active3].color : null}/>
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