import { StyleSheet, Text, View, Button} from 'react-native'
import { useState} from 'react'
import {CheckBox, ButtonGroup} from 'react-native-elements'
import React from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '../component/TextInput'
import {COLORS, FONTS} from '../constants/theme'

const OrderLast = (props) => {
  const [checkbox1, setCheckbox1] = useState(false)
  const [checkbox2, setCheckbox2] = useState(false)
  const [checkbox3, setCheckbox3] = useState(false)

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <View style={styles.orderLast}>
      <View onSubmit={onSubmit} style={styles.vfForm}>
        <View style={styles.groupCustomer}>
          <Text style={styles.title}>THÔNG TIN KHÁCH HÀNG</Text>
          <View style={styles.groupPersonal}>
            <Text style={styles.label}>
              Họ tên cá nhân
              <Text style={{color: COLORS.blue}}> * </Text>
            </Text>
            <TextInput
              autoCapitalize='none'
              keyboardAppearance='dark'
              returnKeyType='next'
              returnKeyLabel='next'
            />
          </View>
          <View style={styles.groupPersonal}>
            <Text style={styles.label}>
              CMND/CCCD
              <Text style={{color: COLORS.blue}}> * </Text>
            </Text>
            <TextInput
              autoCapitalize='none'
              keyboardAppearance='dark'
              returnKeyType='next'
              returnKeyLabel='next'
            />
          </View>
          <View style={styles.groupPersonal}>
            <Text style={styles.label}>
              Số điện thoại
              <Text style={{color: COLORS.blue}}> * </Text>
            </Text>
            <TextInput
              autoCapitalize='none'
              keyboardAppearance='dark'
              returnKeyType='next'
              returnKeyLabel='next'
            />
          </View>
          <View style={styles.groupPersonal}>
            <Text style={styles.label}>
              Email
              <Text style={{color: COLORS.blue}}> * </Text>
            </Text>
            <TextInput
              autoCapitalize='none'
              keyboardAppearance='dark'
              returnKeyType='next'
              returnKeyLabel='next'
            />
          </View>
        </View>
        <View style={styles.groupShowroom}>
          <Text style={styles.title}>Lựa chọn showroom mua xe</Text>
          <View style={styles.groupPersonal}>
            <Text style={styles.label}>
              Tỉnh thành
              <Text style={{color: COLORS.blue}}> * </Text>
            </Text>
            <TextInput
              autoCapitalize='none'
              keyboardAppearance='dark'
              returnKeyType='next'
              returnKeyLabel='next'
            />
          </View>
          <View style={styles.groupPersonal}>
            <Text style={styles.label}>
              Showroom /Đại lý
              <Text style={{color: COLORS.blue}}> * </Text>
            </Text>
            <TextInput
              autoCapitalize='none'
              keyboardAppearance='dark'
              returnKeyType='next'
              returnKeyLabel='next'
            />
          </View>
        </View>
        <View style={styles.groupCheckBox}>
          <View style={styles.groupInput}>
            <CheckBox 
              title="Tôi cam kết các thông tin đã cung cấp tại đây hoàn toàn chính xác."
              checked={checkbox1}
              onPress={() => setCheckbox1(!checkbox1)}
            />
            <CheckBox 
              title="Tôi đã đọc, hiểu rõ và xác nhận đồng ý với toàn bộ nội dung Điều khoản trong Thỏa Thuận Đặt Cọc trên cũng như Chính Sách Ưu Đãi áp dụng tại thời điểm đặt mua xe ô tô này trên VinFast Online."
              checked={checkbox2}
              onPress={() => setCheckbox2(!checkbox2)}
            />
            <CheckBox 
              title="Tôi đồng ý với các Điều kiện & Điều khoản của VinFast Online."
              checked={checkbox3}
              onPress={() => setCheckbox3(!checkbox3)}
            />
          </View>
        </View>
        <View style={styles.groupRadio}>
          <ButtonGroup
            buttons={['Thanh toán qua thẻ ATM nội địa/Internet Banking', 'Thanh toán qua chuyển khoản ngân hàng']}
            containerStyle={{height: 100}}
          />
        </View>
        <View style={styles.vfPayment}>
          <Text style={styles.content}>Thông tin chuyển khoản đặt cọc</Text>
          <View style={styles.infoDeposit}>
            <Text style={styles.infoDepositLabel}>Ngân hàng</Text>
            <Text style={styles.content}>Ngân hàng Thương mại cổ phần Kỹ Thương Việt Nam (Techcombank)</Text>
          </View>
          <View style={styles.infoDeposit}>
            <Text style={styles.infoDepositLabel}>Số tài khoản</Text>
            <Text style={styles.content}>19035192838125</Text>
          </View>
          <View style={styles.infoDeposit}>
            <Text style={styles.infoDepositLabel}>Tên tài khoản</Text>
            <Text style={styles.content}>CÔNG TY TNHH KINH DOANH THƯƠNG MẠI VÀ DỊCH VỤ VINFAST</Text>
          </View>
          <View style={styles.infoDeposit}>
            <Text style={styles.infoDepositLabel}>Nội dung</Text>
            <Text style={styles.content}>- CMT nop coc xe LUX SA2.0</Text>
          </View>
          <Text style={styles.content}>Sau khi chuyển khoản, quý khách làm theo các bước dưới đây</Text>
          <Text style={styles.content}>Tải lên ủy nhiệm chi/biên lai chuyển tiền</Text>
          <Text style={styles.support}>
            Trong trường hợp Quý khách cần hỗ trợ khác, vui lòng liên hệ ngay với chúng tôi .{"\n"}Hotline: 
            <Text style={styles.supportHotline}> 1900 232 389</Text>
          </Text>
        </View>
        <View style={styles.submit}>
          <Button 
            onPress={onSubmit}
            title="Đặt cọc"
          />
        </View>
        
      </View>
    </View>
  )
}

export default OrderLast

const styles = StyleSheet.create({
    orderLast: {

    },
    vfForm: {
      marginLeft: 12,
      marginRight: 12,
    },
    title: {
      paddingTop: 30,
      paddingBottom: 30,
      fontSize: 16,
      fontWeight: '600',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    groupCustomer: {
      
    },
    groupShowroom: {
      
    },
    groupPersonal: {
      marginBottom: 15,

    },
    label: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 10
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderStyle: 'solid',
      fontSize: 14,
      lineHeight: 40,
      paddingLeft: 12,
      paddingRight: 12,
      borderRadius: 4
    },
    groupCheckBox: {

    },
    groupInput: {
      backgroundColor: COLORS.white,

    },
    checkbox: {
      margin: 8,
    },
    groupRadio: {

    },
    vfPayment: {
      paddingLeft: 20,
      marginTop: 20,
    },
    infoDepositLabel: {
      marginBottom: 8,
      fontWeight: '600',
      color: COLORS.gray,
    },
    content: {
      fontSize: 13,
      fontWeight: '600',
      marginBottom: 22
    },
    infoDeposit: {
      
    },
    support: {

    },
    supportHotline: {
      fontWeight: '700',
    },
    submit: {
      marginTop: 50,
      marginBottom: 50,
      height: 40,
      borderRadius: 4,
    }
})