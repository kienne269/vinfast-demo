import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const OrderInfor = ({navigation}) => {
    const onSubmit = () => {

    }
  return (
    <ScrollView style={styles.container}>
        <Text>Quý khách vui lòng kiểm tra lại thông tin trước khi thực hiện thanh toán.</Text>
        <View style={styles.groupInfor}>
            <Text style={styles.title}>Thông tin sản phẩm</Text>
            <View style={styles.groupItem}>
                <Text>Mẫu xe</Text>
                <Text>VENTO-S</Text>
            </View>
            <View style={styles.groupItem}>
                <Text>Màu xe</Text>
                <Text>Trắng Ngọc Trai-Đen</Text>
            </View>
            <View style={styles.groupItem}>
                <Text>Gói dịch vụ pin</Text>
                <Text>Mua pin</Text>
            </View>
        </View>
        <View style={styles.groupInfor}>
            <Text style={styles.title}>Thông tin cá nhân</Text>
            <View style={styles.groupItem}>
                <Text>Họ và tên</Text>
                <Text>123</Text>
            </View>
            <View style={styles.groupItem}>
                <Text>CMND/CCCD</Text>
                <Text>1234567789</Text>
            </View>
            <View style={styles.groupItem}>
                <Text>Số điện thoại</Text>
                <Text>0847758163</Text>
            </View>
            <View style={styles.groupItem}>
                <Text>Email</Text>
                <Text>2@gmail.com</Text>
            </View>
        </View>
        <View style={styles.groupInfor}>
            <Text style={styles.title}>Thông tin cá nhân</Text>
            <View style={styles.groupItem}>
                <Text>Tỉnh thành</Text>
                <Text>Hà Nội</Text>
            </View>
            <View style={styles.groupItem}>
                <Text>Showroom/ Đại lý</Text>
                <Text>SR Trần Duy Hưng - Hà Nội</Text>
            </View>
            <View style={styles.groupItem}>
                <Text>Nhân viên tư vấn</Text>
                <Text></Text>
            </View>
        </View>
        <View style={styles.groupInfor}>
            <Text style={styles.title}>Thông tin thanh toán</Text>
            <View style={styles.groupItem}>
                <Text>Hình thức</Text>
                <Text>Thanh toán qua thẻ ATM nội địa/Internet Banking (Miễn phí thanh toán)</Text>
            </View>
            <Text style={styles.title}>Thông tin thanh toán</Text>
            <View style={styles.groupItem}>
                <Text>Số tiền đặt cọc</Text>
                <Text>2.000.000 VNĐ</Text>
            </View>
        </View>
        <TouchableOpacity
                style={styles.selectImage}
                activeOpacity={0.7}
                onPress={onSubmit}
        >
            <Text style={{color: '#1464f4', fontSize: 16, fontWeight: '600', lineHeight: 22}}>Thay đổi thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.submit}
            activeOpacity={0.7}
            onPress={onSubmit}
        >
            <Text style={{textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: '600', lineHeight: 22}}>Thanh toán</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default OrderInfor

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginHorizontal: 'auto',
        width: '100%',
    },
    selectImage: {
        marginTop: 50,
        height: 40,
        borderRadius: 4,
        backgroundColor: '#fff',
        borderColor: '#1464f4',
        color: '#1464f4',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      submit: {
        marginTop: 20,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        maxWidth: 440,
        backgroundColor: '#1464f4',
        marginBottom: 50,
      },
})