import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import { useState} from 'react'
import Button from './Button'
import {CheckBox, ButtonGroup} from 'react-native-elements'
import React from 'react'
import SelectBox from 'react-native-multi-selectbox'
import TextInput from '../component/TextInput'
import {COLORS, FONTS} from '../constants/theme'
import SelectInput from './SelectInput'
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
const Provinces = [
  {
    id: 0,
    item: 'Hà Nội',
    Showroom: [
      {
        item: 'SR Royal City - Hà Nội',
        address: 'Tòa nhà văn phòng Symphony, Đường Chu Huy Mân, Phương Phúc lợi'
      },
      {
        item: 'SR Smart City - Hà Nội',
        address: 'Tầng 1,TTTM Vincom Mega Mall, KĐT Vinhomes Smart City'
      },
      {
        item: 'SR Times City - Hà Nội',
        address: 'Tòa văn phòng Symphony, Đường Chu Huy Mân, Phường Phúc Lợi'
      },
      {
        item: 'SR Phạm Văn Đồng - Hà Nội',
        address: '166 đường PHạm Văn Đồng, Phương Xuân Đỉnh'
      },
      {
        item: 'SR Nguyễn Văn Linh - Hà Nội',
        address: 'Số 1 phố Nguyễn Văn Linh'
      },
      {
        item: 'SR Trần Duy Hưng - Hà Nội',
        address: 'Tầng L1, TTTM Vincom Center Trần Duy Hưng'
      },
      {
        item: 'SR Long Biên - Hà Nội',
        address: 'Tầng 1, TTTM Vincom Plaza Long Biên, Khu đô thị Vinhomes Riverside'
      },
      {
        item: 'SR Ocean Park - Hà Nội',
        address: 'Taangf1, TTTM Vincom Mega Mal'
      },
      {
        item: 'ĐL Hà Nội - Hà Nội',
        address: 'Số 948, đường Quang Trung kéo dài'
      },
      {
        item: 'ĐL Newway - Hà Nội',
        address: 'Số 358 Đường Láng'
      },
      {
        item: 'ĐL Thăng Long - Hà Nội',
        address: 'Số 68 Trịnh Văn Bô, Phương Phương Canh, Quận Nam Từ Liêm, Thành Phố Hà Nội, Việt item'
      },
      {
        item: 'ĐL Mỹ Đình - Hà Nội',
        address: 'Số 8 Phạm Hung, Cầu Giấy, Hà Nội'
      },
      {
        item: 'ĐL Trường Chinh - Hà Nội',
        address: '162 Phố Trường Chinh, Quận Đống Đa, Hà Nội'
      },
      {
        item: 'ĐL Quốc Oai - Hà Nội',
        address: 'Km Quốc Oai - Hà Nội'
      },
    ]
  },
  {
    id: 0,
    item: 'Bắc Ninh',
    Showroom: [
      {
        item: 'SR Royal City - Hà Nội',
        address: 'Tòa nhà văn phòng Symphony, Đường Chu Huy Mân, Phương Phúc lợi'
      },
      {
        item: 'SR Royal City - Hà Nội',
        address: 'Tòa nhà văn phòng Symphony, Đường Chu Huy Mân, Phương Phúc lợi'
      },
    ]
  }
]

const K_OPTIONS = [
  {
    id: 0,
    item: 'Hà Nội',
    Showroom: [
      {
        item: 'SR Royal City - Hà Nội',
        address: 'Tòa nhà văn phòng Symphony, Đường Chu Huy Mân, Phương Phúc lợi'
      },
      {
        item: 'SR Smart City - Hà Nội',
        address: 'Tầng 1,TTTM Vincom Mega Mall, KĐT Vinhomes Smart City'
      },
      {
        item: 'SR Times City - Hà Nội',
        address: 'Tòa văn phòng Symphony, Đường Chu Huy Mân, Phường Phúc Lợi'
      },
      {
        item: 'SR Phạm Văn Đồng - Hà Nội',
        address: '166 đường PHạm Văn Đồng, Phương Xuân Đỉnh'
      },
      {
        item: 'SR Nguyễn Văn Linh - Hà Nội',
        address: 'Số 1 phố Nguyễn Văn Linh'
      },
      {
        item: 'SR Trần Duy Hưng - Hà Nội',
        address: 'Tầng L1, TTTM Vincom Center Trần Duy Hưng'
      },
      {
        item: 'SR Long Biên - Hà Nội',
        address: 'Tầng 1, TTTM Vincom Plaza Long Biên, Khu đô thị Vinhomes Riverside'
      },
      {
        item: 'SR Ocean Park - Hà Nội',
        address: 'Taangf1, TTTM Vincom Mega Mal'
      },
      {
        item: 'ĐL Hà Nội - Hà Nội',
        address: 'Số 948, đường Quang Trung kéo dài'
      },
      {
        item: 'ĐL Newway - Hà Nội',
        address: 'Số 358 Đường Láng'
      },
      {
        item: 'ĐL Thăng Long - Hà Nội',
        address: 'Số 68 Trịnh Văn Bô, Phương Phương Canh, Quận Nam Từ Liêm, Thành Phố Hà Nội, Việt item'
      },
      {
        item: 'ĐL Mỹ Đình - Hà Nội',
        address: 'Số 8 Phạm Hung, Cầu Giấy, Hà Nội'
      },
      {
        item: 'ĐL Trường Chinh - Hà Nội',
        address: '162 Phố Trường Chinh, Quận Đống Đa, Hà Nội'
      },
      {
        item: 'ĐL Quốc Oai - Hà Nội',
        address: 'Km Quốc Oai - Hà Nội'
      },
    ]
  },
  {
    id: 1,
    item: 'Bắc Ninh',
    Showroom: [
      // {
      //   item: 'SR Royal City - Hà Nội',
      //   address: 'Tòa nhà văn phòng Symphony, Đường Chu Huy Mân, Phương Phúc lợi'
      // },
      // {
      //   item: 'SR Royal City - Hà Nội',
      //   address: 'Tòa nhà văn phòng Symphony, Đường Chu Huy Mân, Phương Phúc lợi'
      // },
    ]
  },
  {
    id: 2,
    item: 'Bắc Ninh',
    Showroom: [
      {
        item: 'SR Royal City - Hà Nội',
        address: 'Tòa nhà văn phòng Symphony, Đường Chu Huy Mân, Phương Phúc lợi'
      },
      {
        item: 'SR Royal City - Hà Nội',
        address: 'Tòa nhà văn phòng Symphony, Đường Chu Huy Mân, Phương Phúc lợi'
      },
    ]
  },
  {
    id: 3,
    item: 'TP Hồ Chí Minh',
    Showroom: [
      {
        item: 'SR Royal City - Hà Nội',
        address: 'Tòa nhà văn phòng Symphony, Đường Chu Huy Mân, Phương Phúc lợi'
      },
      {
        item: 'SR Royal City - Hà Nội',
        address: 'Tòa nhà văn phòng Symphony, Đường Chu Huy Mân, Phương Phúc lợi'
      },
    ]
  },
  {
    id: 4,
    item: 'Hải Phòng',
    Showroom: [
      {
        item: 'SR Royal City - Hà Nội',
        address: 'Tòa nhà văn phòng Symphony, Đường Chu Huy Mân, Phương Phúc lợi'
      },
      {
        item: 'SR Royal City - Hà Nội',
        address: 'Tòa nhà văn phòng Symphony, Đường Chu Huy Mân, Phương Phúc lợi'
      },
    ]
  },
]

const OrderLast = ({navigation}) => {
  const [checkbox1, setCheckbox1] = useState(false)
  const [checkbox2, setCheckbox2] = useState(false)
  const [checkbox3, setCheckbox3] = useState(false)

  const [selectedProvince, setSelectedProvince] = useState({})
  const [selectedShowRoom, setSelectedShowRoom] = useState({})

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [cccd, setCccd] = useState('')
  const [phone, setPhone] = useState('')
  const [province, setProvince] = useState('')
  const [Showroom, setShowroom] = useState('')
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onSubmit = () => {
    const data = {
      userName: userName,
      email: email,
      cccd: cccd,
      phone: phone,
      province: province,
      Showroom: Showroom,
    }
    alert(JSON.stringify(data))
  }

  const onChangeProvince = () => {
    return (val) => (setSelectedProvince(val), alert(Provinces))
  }

  const onChangeShowRoom = () => {
    return (val) => alert(val.item)
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
              onChangeText={(value) => {
                setUserName(value)
              }}
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
              onChangeText={(value) => {
                setCccd(value)
              }}
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
              onChangeText={(value) => {
                setPhone(value)
              }}
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
              onChangeText={(value) => {
                setEmail(value)
              }}
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
              onChangeText={(value) => {
                setProvince(value)
              }}
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
              onChangeText={(value) => {
                setShowroom(value)
              }}
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
              title="Tôi đã đọc, hiểu rõ và xác nhận đồng ý với toàn bộ nội dung Điều khoản trong Thỏa Thuận Mua trên cũng như Chính Sách Ưu Đãi áp dụng tại thời điểm đặt mua xe ô tô này trên VinFast Online."
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
          <Text style={styles.content}>Thông tin chuyển khoản Mua</Text>
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
          <View>
            <TouchableOpacity
                style={styles.selectImage}
                activeOpacity={0.7}
                onPress={pickImage}
            >
              <FontAwesome5 name="camera" size={24} color="black" />
              <Text style={{marginLeft: 6, color: '#1464f4', fontSize: 16, fontWeight: '600', lineHeight: 22}}>Chọn ảnh</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginBottom: 50}} />}
          </View>
        </View>
        <TouchableOpacity
            style={styles.submit}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('OrderInfor', {
              itemId: 1,
              nameParam: 'name',
            })}
        >
            <Text style={styles.styleText}>Thanh toán đặt cọc</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderLast

const styles = StyleSheet.create({
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
    groupInput: {
      backgroundColor: COLORS.white,
    },
    checkbox: {
      margin: 8,
    },
    vfPayment: {
      paddingHorizontal: 20,
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
    supportHotline: {
      fontWeight: '700',
    },
    selectImage: {
      marginTop: 50,
      marginBottom: 50,
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
      marginTop: 26,
      height: 72,
      paddingHorizontal: 13,
      paddingVertical: 13,
      maxWidth: 440,
      backgroundColor: '#1464f4',
      marginBottom: 50,
    },
    styleText: {
      textTransform: 'uppercase',
      textAlign: 'center',
      color: '#fff',
      fontSize: 14,
      lineHeight: 40,
    }
})