import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import DatePicker from 'react-native-datepicker';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import dashboardApi from '../api/admin/dashboardApi';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/user/userSlice';
const screenWidth = Dimensions.get("window").width;

const Turnover = () => {

  const user = useSelector(selectUser)

  const [statistical, setStatistical] = useState([])

  //lọc theo ngày tháng năm
  const [from, setFrom] = useState('2022-01-01');
  const [to, setTo] = useState('2022-12-31');

  useEffect(() => { 
    let isApiSubscribed = true;
    const getCustomerApi = async () => {
        try {
            const res = isApiSubscribed && await dashboardApi.getCustomerAll(from, to, user.username)
            typeof(res.data) == 'object' && setStatistical(res.data)
        } catch(err) {
            console.log(err)
        }
    }

    if(from > to) {
        alert("Từ ngày phải nhỏ hơn đến ngày")
    } else {
        getCustomerApi()
        console.log(statistical)
        console.log(from, to)
    }

    return () => {
        isApiSubscribed = false;
    };

}, [from, to, user.username])

  //data doanh thu hàng tháng
  const dataMoney = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: () => `#707070`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  // Số xe bán được theo tháng
  const chartPie = (name) => {
    return statistical.filter(item => item.status === 'success' && item.name === name)
  }

  console.log(chartPie('LUX SA2.0').length)

  //data số xe ô tô bán được
  const dataNumberCar = [
    {
      name: "VF e34",
      population: chartPie('VF e34').length,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "LUX SA2.0",
      population: chartPie('LUX SA2.0').length,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "LUX A2.0",
      population: chartPie('LUX A2.0').length,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "PRESIDENT",
      population: chartPie('PRESIDENT').length,
      color: "#ccc",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "FADIL",
      population: chartPie('FADIL').length,
      color: "yellow",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "VF 8",
      population: chartPie('VF 8').length,
      color: "orange",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "VF 9",
      population: chartPie('VF 9').length,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  //data số xe máy điện bán được
  // const dataNumberBike = [
  //   {
  //     name: "THEON S",
  //     population: chartPie('THEON S').length,
  //     color: "rgba(131, 167, 234, 1)",
  //     legendFontColor: "#7F7F7F",
  //     legendFontSize: 15
  //   },
  //   {
  //     name: "THEON",
  //     population: chartPie('THEON').length,
  //     color: "#F00",
  //     legendFontColor: "#7F7F7F",
  //     legendFontSize: 13
  //   },
  //   {
  //     name: "VENTO S",
  //     population: chartPie('VENTO S').length,
  //     color: "rgba(131, 167, 234, 1)",
  //     legendFontColor: "#7F7F7F",
  //     legendFontSize: 15
  //   },
  //   {
  //     name: "VENTO",
  //     population: chartPie('VENTO').length,
  //     color: "rgba(131, 167, 234, 1)",
  //     legendFontColor: "#7F7F7F",
  //     legendFontSize: 15
  //   },
  //   {
  //     name: "FELIZ S",
  //     population: chartPie('FELIZ S').length,
  //     color: "rgba(131, 167, 234, 1)",
  //     legendFontColor: "#7F7F7F",
  //     legendFontSize: 15
  //   },
  //   {
  //     name: "FELIZ",
  //     population: chartPie('FELIZ').length,
  //     color: "rgba(131, 167, 234, 1)",
  //     legendFontColor: "#7F7F7F",
  //     legendFontSize: 15
  //   },
  //   {
  //     name: "KLARA S 2022",
  //     population: chartPie('KLARA S 2022').length,
  //     color: "rgba(131, 167, 234, 1)",
  //     legendFontColor: "#7F7F7F",
  //     legendFontSize: 15
  //   },
  //   {
  //     name: "KLARA S",
  //     population: chartPie('KLARA S').length,
  //     color: "rgba(131, 167, 234, 1)",
  //     legendFontColor: "#7F7F7F",
  //     legendFontSize: 15
  //   },
  //   {
  //     name: "KLARA A2",
  //     population: chartPie('KLARA A2').length,
  //     color: "rgba(131, 167, 234, 1)",
  //     legendFontColor: "#7F7F7F",
  //     legendFontSize: 15
  //   },
  //   {
  //     name: "TEMPEST",
  //     population: chartPie('TEMPEST').length,
  //     color: "rgba(131, 167, 234, 1)",
  //     legendFontColor: "#7F7F7F",
  //     legendFontSize: 15
  //   },
  //   {
  //     name: "IMPES",
  //     population: chartPie('IMPES').length,
  //     color: "rgba(131, 167, 234, 1)",
  //     legendFontColor: "#7F7F7F",
  //     legendFontSize: 15
  //   },
  //   {
  //     name: "LUDO",
  //     population: chartPie('LUDO').length,
  //     color: "rgba(131, 167, 234, 1)",
  //     legendFontColor: "#7F7F7F",
  //     legendFontSize: 15
  //   },
  // ];

  return (
    <ScrollView style={styles.container}>
        {/* data doanh thu hàng tháng */}
        <LineChart
          data={dataMoney}
          width={screenWidth}
          height={256}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          bezier
        />
        <View>
          <View style={styles.container}>
            <View>
              <Text style={{fontWeight: 'bold'}}>Từ ngày</Text>
              <DatePicker
                style={styles.datePickerStyle}
                date={from} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2022-01-01"
                maxDate="2023-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    //display: 'none',
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                }}
                onDateChange={(date) => {
                  setFrom(date);
                }}
              />
            </View>
            <View>
              <Text style={{fontWeight: 'bold'}}>Đến ngày</Text>
              <DatePicker
                style={styles.datePickerStyle}
                date={to} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2022-01-01"
                maxDate="2023-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    //display: 'none',
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                }}
                onDateChange={(date) => {
                  setTo(date);
                }}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 40}}>
          <View style={{borderColor: '#707070', borderWidth: 1, padding: 12, borderRadius: 8}}>
            <Text style={{textAlign: 'center', textTransform: 'uppercase'}}>Doanh {"\n"} thu</Text>
            <Text style={{textAlign: 'center', color: '#2c72c4'}}>{new Intl.NumberFormat('en').format(statistical.filter(item => item.status === 'success').reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue.price), 0))} {"\n"} VNĐ</Text>
          </View>
          <View style={{borderColor: '#707070', borderWidth: 1, padding: 12, borderRadius: 8}}>
            <Text style={{textAlign: 'center', textTransform: 'uppercase'}}>Số đơn {"\n"} hàng</Text>
            <Text style={{textAlign: 'center', color: '#2c72c4'}}>{statistical.length}</Text>
          </View>
          <View style={{borderColor: '#707070', borderWidth: 1, padding: 12, borderRadius: 8}}>
            <Text style={{textAlign: 'center', textTransform: 'uppercase'}}>Số xe {"\n"} bán được</Text>
            <Text style={{textAlign: 'center', color: '#2c72c4'}}>{statistical.filter(item => item.status === 'success').length}</Text>
          </View>
        </View>
        {/* data số xe ô tô bán được */}
        <PieChart
          data={dataNumberCar}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[10, 5]}
          absolute
        />
        {/* data số xe máy điện bán được */}
        {/* <PieChart
          data={dataNumberCar}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[10, 5]}
          absolute
        /> */}
    </ScrollView>
  )
}

export default Turnover

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginHorizontal: 'auto',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
})