import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import cars_detail from '../assets/data/cars-detail';
import ButtonLink from './ButtonLink';
import productDepositApi from '../api/depost/depositApi';

const CarDetail = ({ route, navigation }) => {
    /* 2. Get the param */
    const { itemId } = route.params;
    const { nameParam } = route.params;

    const carDetail = cars_detail.find((item, index) => item.id === itemId)

    const [postData, setPostData] = useState([])
    useEffect(() => {
        const getCarDeposit = async () => {
            try {
                const res = await productDepositApi.getOneCar(carDetail.name)
                setPostData(res.data)
            } catch(err) {
                alert(err)
            }
        }
        getCarDeposit()          
    }, [carDetail.name])

    const renderColorCar = ({ item, index }) => (
        <TouchableOpacity
            // onPress={() => (alert(item.color.toLowerCase().split(' ').join('-')), setActive2(index), setActive3(index), setBackground(`http://192.168.234.1/images/${type}/${item.color.toLowerCase().replace(" ", "-")}/1.png`))}
        >
        <View style={[{backgroundColor: item.color_code}, styles.ItemColorCar]}>
        </View>
        </TouchableOpacity>
    );
    
    return (
        <ScrollView style={styles.CarDetail}>
            <View style={styles.president1}>
                <Image 
                    style={{width: '100%', height: null, aspectRatio: 3840/1662}}
                    source={{uri: carDetail.image1}}
                />
                <View style={styles.info}>
                    <View style={styles.container}>
                        <View style={styles.infoGroup}>
                            <View style={styles.parameter}>
                                <Text>Động cơ BMW</Text>
                                <Text>{carDetail.dongcoBMW}</Text>
                            </View>
                            <View style={styles.parameter}>
                                <Text>Hộp số tự động</Text>
                                <Text>{carDetail.hopSo}</Text>
                            </View>
                            <View style={styles.parameter}>
                                <Text>Cảm giác lái</Text>
                                <Text>{carDetail.camGiacLai}</Text>
                            </View>
                        </View>
                        <ButtonLink style={styles.button} label='Mua ngay' screen="Car" params={{ id: carDetail.id }} />
                    </View>
                </View>
            </View>
            <View style={styles.president2}>
                <View style={styles.info}>
                    <View style={styles.container}>
                        <View style={styles.infoGroup}>
                            <View style={styles.parameter}>
                                <Text>Động cơ BMW</Text>
                                <Text>{carDetail.dongcoBMW}</Text>
                            </View>
                            <View style={styles.parameter}>
                                <Text>Công suất</Text>
                                <Text>{carDetail.congSuat}</Text>
                            </View>
                            <View style={styles.parameter}>
                                <Text>Hộp số tự động</Text>
                                <Text>{carDetail.hopSo}</Text>
                            </View>
                        </View>
                        <View style={styles.infoColor}>
                            <FlatList
                                data={postData}
                                renderItem={renderColorCar}
                                keyExtractor={(item, index) => String(index)}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{paddingVertical: 10}}
                            />
                        </View>
                        <View style={styles.infoBottom}>
                            <View style={styles.container}>
                                <View style={styles.groupTitle}>
                                    <Text>Thiết kế ngoại thất</Text>
                                    <Text>{carDetail.thietkeNgoaiThat}</Text>
                                    <Text>{carDetail.thietkeNgoaiThat2}</Text>
                                    <Text>{carDetail.thietkeNgoaiThat3}</Text>
                                </View>
                            </View>
                        </View>
                        <ButtonLink style={styles.button} label='Mua ngay' screen="Car" params={{ id: carDetail.id }} />
                    </View>
                </View>
            </View>
            <View style={styles.president3}>
                <Image 
                    style={{width: '100%', height: null, aspectRatio: 3840/1662}}
                    source={{uri: carDetail.image3}}
                />
                <View style={styles.info}>
                    <View style={styles.container}>
                        <View style={styles.group}>
                            <Text style={styles.top}>Vô lăng cảm xúc</Text>
                            <Text style={styles.bottom}>{carDetail.voLangCamXuc}</Text>
                        </View>
                        <View style={styles.group}>
                            <Text style={styles.top}>Đa tiện ích thông minh</Text>
                            <Text style={styles.bottom}>{carDetail.daTienIch}</Text>
                        </View>
                        <View style={styles.group}>
                            <Text style={styles.top}>Giải trí cao cấp</Text>
                            <Text style={styles.bottom}>{carDetail.giaiTri}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.infoBottom}>
                    <View style={styles.container}>
                        <View style={styles.groupTitle}>
                            <Text>Tiết kế nội thất</Text>
                            <Text>{carDetail.thietKeNoiThat}</Text>
                            <Text>{carDetail.thietKeNoiThat2}</Text>
                            <Text>{carDetail.thietKeNoiThat3}</Text>
                            <ButtonLink style={styles.button} label='Mua ngay' screen="Car" params={{ id: carDetail.id }} />
                        </View>

                    </View>
                </View>
            </View>
            <View style={styles.president4}>
                <Image 
                    style={{width: '100%', height: null, aspectRatio: 3840/1662}}
                    source={{uri: 'http://192.168.234.1//images/lux-sa/4.1.jpg'}}
                />
                <View style={styles.groupTitle}>
                    <Text>ĐỘNG CƠ & CÔNG NGHỆ</Text>
                    <Text>{carDetail.dongCoCN}</Text>
                    <Text>{carDetail.dongCoCN1}</Text>
                </View>
                <FlatList
                    data={postData}
                    renderItem={renderColorCar}
                    keyExtractor={(item, index) => String(index)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{paddingVertical: 10}}
                />
            </View>
            <View style={styles.president5}>
                <View style={styles.container}>
                    <View style={styles.groupTitle}>
                        <Text>Vinfast lux SA2.0</Text>
                        <Text>Thông số xe</Text>
                    </View>
                    <View style={styles.seleceCarVersion}>
                        <Text>Tiêu chuẩn</Text>
                        <Text>Nâng cao</Text>
                        <Text>Cao cấp</Text>
                    </View>
                    <View style={styles.listParameters}>
                        <FlatList
                            data={postData}
                            renderItem={renderColorCar}
                            keyExtractor={(item, index) => String(index)}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{paddingVertical: 10}}
                        />
                    </View>
                    <View style={styles.listParameters}>
                        <FlatList
                            data={postData}
                            renderItem={renderColorCar}
                            keyExtractor={(item, index) => String(index)}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{paddingVertical: 10}}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.president6}>
                <Image 
                    style={{width: '100%', height: null, aspectRatio: 3840/1662}}
                    source={{uri: carDetail.image6}}
                />
                <View style={styles.info}>
                    <View style={styles.container}>
                        <Text style={styles.name}>{carDetail.title}</Text>
                        <ButtonLink style={styles.button} label='Mua ngay' screen="Car" params={{ id: carDetail.id }} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default CarDetail

const styles = StyleSheet.create({
    ItemColorCar: {
    
    },
    
    CarDetail: {
    
    },
    
    president1: {
    
    },
    
    info: {
    
    },
    
    container: {
    
    },
    
    infoGroup: {
    
    },
    
    parameter: {
    
    },
    
    parameter: {
    
    },
    
    parameter: {
    
    },
    
    button: {
    
    },
    
    president2: {
    
    },
    
    info: {
    
    },
    
    container: {
    
    },
    
    infoGroup: {
    
    },
    
    parameter: {
    
    },
    
    parameter: {
    
    },
    
    parameter: {
    
    },
    
    infoColor: {
    
    },
    
    infoBottom: {
    
    },
    
    container: {
    
    },
    
    groupTitle: {
    
    },
    
    button: {
    
    },
    
    president3: {
    
    },
    
    info: {
    
    },
    
    container: {
    
    },
    
    group: {
    
    },
    
    top: {
    
    },
    
    bottom: {
    
    },
    
    group: {
    
    },
    
    top: {
    
    },
    
    bottom: {
    
    },
    
    group: {
    
    },
    
    top: {
    
    },
    
    bottom: {
    
    },
    
    infoBottom: {
    
    },
    
    container: {
    
    },
    
    groupTitle: {
    
    },
    
    button: {
    
    },
    
    president4: {
    
    },
    
    president5: {
    
    },
    
    president6: {
    
    },
    seleceCarVersion: {

    },

    listParameters: {

    },

})
