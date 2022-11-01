import { StyleSheet } from "react-native"

const styless = StyleSheet.create({
 container: {
 backgroundColor: '#f7f7f7',
 },
 headerwraper: {
 backgroundColor: '#98FB98',
 borderBottomLeftRadius: 30,
 borderBottomRightRadius: 30,
 },
 header: {
 padding: 28,
 flexDirection: 'row',
 justifyContent: 'space-between',
 alignItems: 'center',
},
 iconWhite: {
 color: '#ffff',
 },
 headertext: {
 fontWeight: 'bold',
 fontSize: 18,
 color: '#ffff',
},
headert: {
 paddingTop: 40,
 paddingBottom: 70,
 alignItems: 'center',
 },
 imag: {
 width: 80,
 height: 80,
 borderRadius: 60,
 },
 content: {
 marginHorizontal: 20,
 backgroundColor: '#ffff',
 borderRadius: 15,
 paddingHorizontal: 20,
 marginTop: -60,
 },
 title: {
 fontWeight: 'bold',
 fontSize: 18,
 color: '#2d2d2d',
 paddingVertical: 20,
},
 input: {
backgroundColor: 'white',
 padding: 1,
 marginVertical: 5,
 height: 40,
 borderWidth: 1,
 borderColor: 'lightgrey',
 borderRadius: 2,
 },
 description: {
color: '#989898',
 textAlign: 'center',
 fontSize: 12,
 padding: 10,
 fontWeight: '200',
},
 buttonwrapper: {
alignItems: 'center',
 marginVertical: 10,
 },
 button: {
 backgroundColor: '#4355ee',
 width: 30,
 height: 30,
 borderRadius: 30,
 alignItems: 'center',
 justifyContent: 'center',
 },
 iconbutton: {
 color: '#fff',
}
})
export default styless;