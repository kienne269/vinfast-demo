import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, ImageBackground } from 'react-native'
import React, {useState, useEffect} from 'react'
import cars_detail from '../assets/data/cars-detail';
import ButtonLink from './ButtonLink';
import productDepositApi from '../api/depost/depositApi';

const CarDetail = ({ route, navigation }) => {
    /* 2. Get the param */
    const { itemId } = route.params;
    const { nameParam } = route.params;

    const carDetail = cars_detail.find((item, index) => item.id === itemId)

    const [background, setBackground] = useState('http://192.168.234.1/images/lux-sa/brahminy-white/1.png')
    const [postData, setPostData] = useState([])
    useEffect(() => {
        const getCarDeposit = async () => {
            try {
                const res = await productDepositApi.getOneCar(carDetail.name)
                setPostData(res.data)
                console.log(res.data)
            } catch(err) {
                alert(err)
            }
        }
        getCarDeposit()          
    }, [carDetail.name])

    const renderColorCar = ({ item, index }) => (
        <TouchableOpacity
            onPress={() => (console.log(item.color.toLowerCase().split(' ').join('-')), setBackground(`http://192.168.234.1/images/${carDetail.name}/${item.color.toLowerCase().replace(" ", "-")}/1.png`))}
        >
            <View style={[{backgroundColor: "red"}]}>
            </View>
        </TouchableOpacity>
    );

    const [active, setActive] = useState(1)
    const [backgroundDongCo, setBackgroundDongCo] = useState('http://192.168.234.1//images/lux-sa/4.1.jpg')

    const president4 = [
        {
            id: 1,
            name: 'LUX-SA',
            content: '1. Động cơ 2.0 L - 228 HP',
            path: 'http://192.168.234.1//images/lux-sa/4.1.jpg',
        },
        {
            id: 2,
            name: 'LUX-SA',
            content: '2. Hộp số tự động ZF 8 cấp',
            path: 'http://192.168.234.1//images/lux-sa/4.2.jpg',
        },
        {
            id: 3,
            name: 'LUX-SA',
            content: '3. Khung gầm liền khối tiêu chuẩn Châu Âu',
            path: 'http://192.168.234.1//images/lux-sa/4.3.jpg',
        },
        {
            id: 4,
            name: 'LUX-SA',
            content: '4. Trợ lực lái thủy lực điều khiển điện',
            path: 'http://192.168.234.1//images/lux-sa/4.4.jpg',
        },
        {
            id: 5,
            name: 'LUX-SA',
            content: '5. ABS - Hệ thống chống bó cứng phanh',
            path: 'http://192.168.234.1//images/lux-sa/4.5.jpg',
        },
        {
            id: 6,
            name: 'LUX-SA',
            content: '6. Cảnh báo điểm mù',
            path: 'http://192.168.234.1//images/lux-sa/4.6.jpg',
        },
        {
            id: 7,
            name: 'LUX-SA',
            content: '7. EBD - Phân phối lực phanh điện tử',
            path: 'http://192.168.234.1//images/lux-sa/4.7.jpg',
        },
        {
            id: 8,
            name: 'LUX-SA',
            content: '8. BA - Hỗ trợ phanh khẩn cấp',
            path: 'http://192.168.234.1//images/lux-sa/4.8.jpg',
        },
        {
            id: 9,
            name: 'LUX-SA',
            content: '9. ESC - Hệ thống cân bằng điện tử',
            path: 'http://192.168.234.1//images/lux-sa/4.9.jpg',
        },
        {
            id: 10,
            name: 'LUX-SA',
            content: '10. ROM - Chức năng chống lật',
            path: 'http://192.168.234.1//images/lux-sa/4.10.jpg',
        },
        {
            id: 11,
            name: 'LUX-SA',
            content: '11. HSA - Hỗ trợ khởi hành ngang dốc',
            path: 'http://192.168.234.1//images/lux-sa/4.11.jpg',
        },
        {
            id: 12,
            name: 'LUX-SA',
            content: '12. HDC - Hỗ trợ đổ đèo',
            path: 'http://192.168.234.1//images/lux-sa/4.12.jpg',
        },
        {
            id: 13,
            name: 'LUX-SA',
            content: '13. Hệ thống túi khí',
            path: 'http://192.168.234.1//images/lux-sa/4.13.jpg',
        },
    ]
    
    const renderDongCo = ({item, index}) => (
        <TouchableOpacity
            onPress={() => (setActive(index + 1), setBackgroundDongCo(president4[index].path))}
        >
            <Text style={[{color: active === index + 1 ? "#2c72c6" : "#000", paddingVertical: 14,fontSize: 13, fontWeight: '700', lineHeight: 15}]}>
                {item.content}
            </Text>
            <View style={{width: 260, height: 1, backgroundColor: active === index + 1 ? '#2c72c6' : '#000'}}></View>
        </TouchableOpacity>
    )

    return (
        <ScrollView style={styles.CarDetail}>
            <View style={styles.president1}>
                <Image 
                    style={{width: '100%', height: null, aspectRatio: 3840/1662}}
                    source={{uri: carDetail.image1}}
                />
                <View style={[styles.info, {backgroundColor: '#030203', paddingTop: 50, paddingBottom: 20, minHeight: 50, width: '100%'}]}>
                    <View style={{paddingHorizontal: 10,
                                    marginHorizontal: 'auto',
                                    width: '100%',
                                }}
                    >
                        <View style={[styles.infoGroup, {flexDirection: 'row', marginBottom: 10, }]}>
                            <Text style={[styles.parameter, {borderRadius: 4, marginTop: 8, paddingHorizontal: 10, fontSize: 18, lineHeight: 24, fontWeight: '400', textAlign: 'center', color: '#fff', borderRightWidth: 1, borderColor: '#fff'}]}>
                                Động cơ BMW
                                {"\n"}
                                {carDetail.dongcoBMW}
                            </Text>
                            <Text style={[styles.parameter, {borderRadius: 4, marginTop: 8, paddingHorizontal: 10, fontSize: 18, lineHeight: 24, fontWeight: '400', textAlign: 'center', color: '#fff', borderRightWidth: 1, borderColor: '#fff'}]}>
                                Hộp số tự
                                {"\n"}
                                động
                                {"\n"}
                                {carDetail.hopSo}
                            </Text>
                            <Text style={[styles.parameter, {borderRadius: 4, marginTop: 8, paddingHorizontal: 10, fontSize: 18, lineHeight: 24, fontWeight: '400', textAlign: 'center', color: '#fff'}]}>
                                Cảm giác lái
                                {"\n"}
                                {carDetail.camGiacLai}
                            </Text>
                        </View>
                        <ButtonLink style={{width: '100%', textAlign: 'center', borderColor: '#fff', borderWidth: 1, borderStyle: 'solid', }} label='Mua ngay' screen="Car" params={{ id: carDetail.id }} />
                    </View>
                </View>
            </View>
            <View style={styles.president2}>
                <View style={[styles.info, {marginTop: 50, top: 0, marginBottom: 40, bottom: 50, minHeight: 50}]}>
                    <View style={{paddingHorizontal: 10,
                                    marginHorizontal: 'auto',
                                    width: '100%',
                            }}
                    >
                        <View style={[styles.infoGroup, {flexDirection: 'row', marginBottom: 40, }]}>
                            <Text style={[styles.parameter, {borderRadius: 4, marginTop: 8, paddingHorizontal: 10, fontSize: 18, lineHeight: 24, fontWeight: '400', textAlign: 'center', color: '#000', borderRightWidth: 1, borderColor: '#e4e4e4'}]}>
                                Động cơ BMW
                                {"\n"}
                                {carDetail.dongcoBMW}
                            </Text>
                            <Text style={[styles.parameter, {borderRadius: 4, marginTop: 8, paddingHorizontal: 10, fontSize: 18, lineHeight: 24, fontWeight: '400', textAlign: 'center', color: '#000', borderRightWidth: 1, borderColor: '#e4e4e4'}]}>
                                Công suất
                                {"\n"}
                                {carDetail.congSuat}
                            </Text>
                            <Text style={[styles.parameter, {borderRadius: 4, marginTop: 8, paddingHorizontal: 10, fontSize: 18, lineHeight: 24, fontWeight: '400', textAlign: 'center', color: '#000'}]}>
                                Hộp số tự động
                                {"\n"}
                                {carDetail.hopSo}
                            </Text>
                        </View>
                        <View style={[styles.infoColor, ]}>
                            <Image 
                                style={{width: 366, height: 238, marginTop: 20}}
                                source={{uri: background}}
                            />
                            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 60, }}>
                                <Text style={{fontSize: 13, fontWeight: '700', lineHeight: 16, textTransform: 'uppercase'}}>Chọn màu xe</Text>
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
                        <View style={[styles.infoBottom, {paddingTop: 40, paddingBottom: 70, paddingHorizontal: 5, }]}>
                            <View style={{paddingHorizontal: 10,
                                    marginHorizontal: 'auto',
                                    width: '100%',
                            }}>
                                <View style={styles.groupTitle}>
                                    <Text style={{fontSize: 16, lineHeight: 22, marginBottom: 10, fontWeight: '700', textTransform: 'uppercase'}}>Thiết kế ngoại thất</Text>
                                    <Text style={{fontSize: 40, lineHeight: 49, textTransform: 'uppercase'}}>{carDetail.thietkeNgoaiThat}</Text>
                                    <Text style={{fontSize: 40, lineHeight: 49, textTransform: 'uppercase'}}>{carDetail.thietkeNgoaiThat2}</Text>
                                    <Text>{carDetail.thietkeNgoaiThat3}</Text>
                                </View>
                            </View>
                        </View>
                        <ButtonLink colorText="#2c72c6" style={{width: '100%', textAlign: 'center', borderColor: '#2c72c6', borderWidth: 1, borderStyle: 'solid', }} label='Mua ngay' screen="Car" params={{ id: carDetail.id }} />
                    </View>
                </View>
            </View>
            <View style={styles.president3}>
                <ImageBackground source={{uri: carDetail.image3}}
                    style={[{width: '100%', height: '100%' , height: 650}]}
                >
                    <View style={[styles.info, {maxWidth: 360, paddingTop: 350}]}>
                        <View style={{paddingHorizontal: 10,
                                    marginHorizontal: 'auto',
                                    width: '100%',
                            }}>
                            <View style={[styles.group, {paddingVertical: 15}]}>
                                <Text style={[styles.top, {color: '#fff', fontSize: 24, fontWeight: '500', lineHeight: 37, marginBottom: 10}]}>Vô lăng cảm xúc</Text>
                                <Text style={[styles.bottom, {color: '#fff', fontSize: 13}]}>{carDetail.voLangCamXuc}</Text>
                            </View>
                            <View style={{width: 70, height: 1, backgroundColor: '#fff'}}></View>
                            <View style={styles.group}>
                                <Text style={[styles.top, {color: '#fff', fontSize: 24, fontWeight: '500', lineHeight: 37, marginBottom: 10}]}>Đa tiện ích thông minh</Text>
                                <Text style={[styles.bottom, {color: '#fff', fontSize: 13}]}>{carDetail.daTienIch}</Text>
                            </View>
                            <View style={styles.group}>
                                <Text style={[styles.top, {color: '#fff', fontSize: 24, fontWeight: '500', lineHeight: 37, marginBottom: 10}]}>Giải trí cao cấp</Text>
                                <Text style={[styles.bottom, {color: '#fff', fontSize: 13}]}>{carDetail.giaiTri}</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <View style={[styles.infoBottom, {paddingTop: 40, paddingBottom: 70, paddingVertical: 5}]}>
                    <View style={{paddingHorizontal: 10,
                                marginHorizontal: 'auto',
                                width: '100%',
                        }}>
                        <View style={styles.groupTitle}>
                            <Text style={{fontSize: 16, lineHeight: 22, marginBottom: 10, fontWeight: '700', textTransform: 'uppercase'}}>Thiết kế nội thất</Text>
                            <Text style={{fontSize: 40, lineHeight: 49, textTransform: 'uppercase'}}>{carDetail.thietKeNoiThat}</Text>
                            <Text style={{fontSize: 40, lineHeight: 49, textTransform: 'uppercase'}}>{carDetail.thietKeNoiThat2}</Text>
                            <Text>{carDetail.thietKeNoiThat3}</Text>
                            <ButtonLink colorText="#2c72c6" style={{width: '100%', textAlign: 'center', borderColor: '#2c72c6', borderWidth: 1, borderStyle: 'solid', marginTop: 40,}} label='Mua ngay' screen="Car" params={{ id: carDetail.id }} />
                        </View>

                    </View>
                </View>
            </View>
            <View style={styles.president4}>
                <Image 
                    style={{width: '100%', height: 350}}
                    source={{uri: backgroundDongCo}}
                />
                <View style={{paddingHorizontal: 20, paddingVertical: 40}}>
                    <View style={{paddingHorizontal: 10,
                                    marginHorizontal: 'auto',
                                    width: '100%',
                            }}
                    >
                        <View style={styles.groupTitle}>
                            <Text style={{fontSize: 16, lineHeight: 22, marginBottom: 10, fontWeight: '700'}}>ĐỘNG CƠ & CÔNG NGHỆ</Text>
                            <Text style={{fontSize: 28, lineHeight: 34, fontWeight: '600', marginBottom: 8}}>{carDetail.dongCoCN}</Text>
                            <Text style={{color: '#1a1a1a', fontSize: 13}}>{carDetail.dongCoCN1}</Text>
                        </View>
                        <View>
                            <FlatList
                                data={president4}
                                renderItem={renderDongCo}
                                keyExtractor={(item, index) => String(index)}
                                horizontal={false}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{paddingVertical: 10}}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.president5}>
                <View style={{paddingHorizontal: 10,
                                    marginHorizontal: 'auto',
                                    width: '100%',
                                    backgroundColor: '#DBE1E3'
                                }}>
                    <View style={[styles.groupTitle, {paddingBottom: 30, paddingTop: 40}]}>
                        <Text style={{color: '#707070', fontSize: 16, lineHeight: 22, marginBottom: 10, fontWeight: '700', textTransform: 'uppercase'}}>Vinfast lux SA2.0</Text>
                        <Text style={{fontSize: 35, lineHeight: 44, color: '#1f2125', fontWeight: '600', textTransform: 'uppercase'}}>Thông số xe</Text>
                        <Text style={{fontSize: 12, color: '#8a8a8a', marginBottom: 15, lineHeight: 18}}>
                            Các thông tin sản phẩm có thể thay đổi
                            {"\n"}
                            mà không cần báo trước
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{marginHorizontal: 5, height: 45, lineHeight: 45, color: '#2c72c6', textTransform: 'uppercase', minWidth: 120, borderRadius: 3, borderWidth: 2, borderColor: '#2c72c6', textAlign: 'center'}}>Tiêu chuẩn</Text>
                        <Text style={{marginHorizontal: 5, height: 45, lineHeight: 45, color: '#2c72c6', textTransform: 'uppercase', minWidth: 120, borderRadius: 3, borderWidth: 2, borderColor: '#2c72c6', textAlign: 'center'}}>Nâng cao</Text>
                        <Text style={{marginHorizontal: 5, height: 45, lineHeight: 45, color: '#2c72c6', textTransform: 'uppercase', minWidth: 120, borderRadius: 3, borderWidth: 2, borderColor: '#2c72c6', textAlign: 'center'}}>Cao cấp</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 40}}>
                        <View style={{flexGrow: 1}}>
                            <View>
                                <View style={{marginBottom: 10, width: 50, height: 1, backgroundColor: '#707070'}}></View>
                                <Text style={{fontWeight: '700', fontSize: 13, lineHeight: 15, marginBottom: 5}}>Dài x Rộng x Cao</Text>
                                <Text style={{marginBottom: 10}}>{carDetail.daiRongCao}</Text>
                            </View>
                            <View>
                                <View style={{marginBottom: 10, width: 50, height: 1, backgroundColor: '#707070'}}></View>
                                <Text style={{fontWeight: '700', fontSize: 13, lineHeight: 15, marginBottom: 5}}>Chiều dài cơ sở</Text>
                                <Text style={{marginBottom: 10}}>{carDetail.chieuDai}</Text>
                            </View>
                            <View>
                                <View style={{marginBottom: 10, width: 50, height: 1, backgroundColor: '#707070'}}></View>
                                <Text style={{fontWeight: '700', fontSize: 13, lineHeight: 15, marginBottom: 5}}>Khoảng sáng gầm</Text>
                                <Text style={{marginBottom: 10}}>{carDetail.khoangSang}</Text>
                            </View>
                            <View>
                                <View style={{marginBottom: 10, width: 50, height: 1, backgroundColor: '#707070'}}></View>
                                <Text style={{fontWeight: '700', fontSize: 13, lineHeight: 15, marginBottom: 5}}>Dung tích nhiên liệu</Text>
                                <Text style={{marginBottom: 10}}>{carDetail.dungTich}</Text>
                            </View>
                            <View>
                                <View style={{marginBottom: 10, width: 50, height: 1, backgroundColor: '#707070'}}></View>
                                <Text style={{fontWeight: '700', fontSize: 13, lineHeight: 15, marginBottom: 5}}>Mức tiêu thụ nhiên liệu</Text>
                                <Text style={{marginBottom: 10}}>{carDetail.mucTieuThu}</Text>
                            </View>
                        </View>
                        <View style={{flexGrow: 1}}>
                            <View>
                                <View style={{marginBottom: 10, width: 50, height: 1, backgroundColor: '#707070'}}></View>
                                <Text style={{fontWeight: '700', fontSize: 13, lineHeight: 15, marginBottom: 5}}>Động cơ</Text>
                                <Text style={{marginBottom: 10}}>{carDetail.dongcoBMW}</Text>
                            </View>
                            <View>
                                <View style={{marginBottom: 10, width: 50, height: 1, backgroundColor: '#707070'}}></View>
                                <Text style={{fontWeight: '700', fontSize: 13, lineHeight: 15, marginBottom: 5}}>Công suất tối đa</Text>
                                <Text style={{marginBottom: 10}}>{carDetail.congSuat}</Text>
                            </View>
                            <View>
                                <View style={{marginBottom: 10, width: 50, height: 1, backgroundColor: '#707070'}}></View>
                                <Text style={{fontWeight: '700', fontSize: 13, lineHeight: 15, marginBottom: 5}}>Mô mn xoắn cực đại</Text>
                                <Text style={{marginBottom: 10}}>{carDetail.moMen}</Text>
                            </View>
                            <View>
                                <View style={{marginBottom: 10, width: 50, height: 1, backgroundColor: '#707070'}}></View>
                                <Text style={{fontWeight: '700', fontSize: 13, lineHeight: 15, marginBottom: 5}}>Hộp số</Text>
                                <Text style={{marginBottom: 10}}>{carDetail.hopSo}</Text>
                            </View>
                            <View>
                                <View style={{marginBottom: 10, width: 50, height: 1, backgroundColor: '#707070'}}></View>
                                <Text style={{fontWeight: '700', fontSize: 13, lineHeight: 15, marginBottom: 5}}>Dẫn động</Text>
                                <Text style={{marginBottom: 10}}>{carDetail.danDong}</Text>
                            </View>
                        </View>
                    </View>
                    <Image 
                        style={{width: '100%', height: null, aspectRatio: 935/725, marginTop: 20}}
                        source={{uri: carDetail.image5}}
                    />
                </View>
            </View>
            <View style={styles.president6}>
                <Image 
                    style={{width: '100%', height: null, aspectRatio: 3840/1662}}
                    source={{uri: carDetail.image6}}
                />
                <View style={{backgroundColor: '#'}}>
                    <View style={{paddingHorizontal: 10,
                                    marginHorizontal: 'auto',
                                    width: '100%',
                                    marginBottom: 30
                    }}>
                        <Text style={{fontWeight: '300', letterSpacing: 2, fontSize: 35, lineHeight: 44, color: "#1f2125", textTransform: 'uppercase', width: '100%', textAlign: 'center'}}>{carDetail.title}</Text>
                        <ButtonLink colorText="#2c72c6" style={{width: '100%', textAlign: 'center', borderColor: '#2c72c6', borderWidth: 1, borderStyle: 'solid', }} label='Mua ngay' screen="Car" params={{ id: carDetail.id }} />
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
        // paddingVertical: 50,
        // bottom: 0,
        // backgroundColor: '#000',
        // paddingTop: 50,
        // paddingBottom: 20,
        // minHeight: 50,
        // width: '100%',
    },
    
    container: {
        // flex: 1
    },
    
    infoGroup: {
        // flexDirection: "row",
        // marginBottom: 10,
        // backgroundColor: 'red'
    },
    
    parameter: {
        // minWidth: 80,
        // padding: 8,
        // borderRadius: 4,
        // marginTop: 8,
        // flexGrow: 1,
        // position: 'absolute',
        backgroundColor: '#000',
        fontSize: 30,
        fontWeight: '600'
    },
    
    button: {
        width: '100%',
        textAlign: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        borderStyle: 'solid',
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
