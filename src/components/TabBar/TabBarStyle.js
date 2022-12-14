import { StyleSheet, Dimensions } from "react-native";

const TabBarStyle=StyleSheet.create({
    tabBar: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#212630',
        width: '100%'
      },
      login_btn: {
        width: 120,
        height: 30,
        backgroundColor: '#32a0db',
        borderRadius: 5,
        marginRight: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      },
      login_btn_txt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
      },
      tab_icon: {
        marginLeft: 10,
        width: 180,
        height:30
      }
})

export default TabBarStyle;