import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const K_OPTIONS = [
  {
    id: '1',
    icon: 'user-circle-o',
    title: 'Thông tin cá nhân',
    optionNavigate: 'PersonalInfo'
  },
  {
    id: '2',
    icon: 'history',
    title: 'Lịch sử giao dịch',
    optionNavigate: 'TransactionHistory'
  },
  {
    id: '3',
    icon: 'cart-arrow-down',
    title: 'Giỏ hàng',
    optionNavigate: 'Cart'
  },
  {
    id: '4',
    icon: 'user-circle',
    title: 'Quản lý bài viết',
    optionNavigate: 'PersonalInfo'
  },
  // {
  //   id: '5',
  //   icon: 'user-circle',
  //   title: 'Bảo dưỡng - Sửa chữa',
  //   optionNavigate: 'PersonalInfo'
  // },
  // {
  //   id: '6',
  //   icon: 'user-circle',
  //   title: 'Xe của tôi',
  //   optionNavigate: 'PersonalInfo'
  // },

  // {
  //   id: '7',
  //   icon: 'user-circle',
  //   title: 'Nâng cấp xe',
  //   optionNavigate: 'PersonalInfo'
  // },
  // {
  //   id: '8',
  //   icon: 'user-circle',
  //   title: 'Thuê pin',
  //   optionNavigate: 'PersonalInfo'
  // },
  // {
  //   id: '9',
  //   icon: 'user-circle',
  //   title: 'Lịch sử Sạc Pin',
  //   optionNavigate: 'PersonalInfo'
  // },
  // {
  //   id: '10',
  //   icon: 'user-circle',
  //   title: 'Đăng ký lái thử',
  //   optionNavigate: 'PersonalInfo'
  // },
  // {
  //   id: '11',
  //   icon: 'user-circle',
  //   title: 'Thông tin xuất hóa đơn',
  //   optionNavigate: 'PersonalInfo'
  // },
  // {
  //   id: '12',
  //   icon: 'user-circle',
  //   title: 'Yêu cầu hỗ trợ',
  //   optionNavigate: 'PersonalInfo'
  // },
  // {
  //   id: '13',
  //   icon: 'user-circle',
  //   title: 'Liên hệ',
  //   optionNavigate: 'PersonalInfo'
  // },
  {
    id: '14',
    icon: 'user-circle',
    title: 'Đăng xuất',
    optionNavigate: 'PersonalInfo'
  },
]

const Item = ({icon, title, navigation, optionNavigate }) => (
  <TouchableOpacity onPress={() => navigation.navigate(optionNavigate)}>
    <View style={styles.item}>
      <View style={{marginRight: 20}}>
        <FontAwesome name={icon} size={20} color="black" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const Account = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <Item icon={item.icon} optionNavigate={item.optionNavigate} navigation={navigation} title={item.title} />
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', }}>
      <View style={{ marginVertical: 22, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <Image
          style={{ width: 70, height: 70 }}
          source={{ uri: 'http://192.168.234.1/images/logo-header.png' }}
        />
      </View>
      <FlatList
        data={K_OPTIONS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}


export default Account

const styles = StyleSheet.create({
  item: {
    height: 44,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    lineHeight: 44,
    textAlign: 'left',
    fontWeight: '700',
    fontSize: 14,
    color: '#444',
  },
})