import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
container: {
        backgroundColor: '#FFFF',
        flex: 1,
        flexWrap: 'nowrap',
    },
    celltext: {
        alignItems: 'center',
        fontSize: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
},
    iconbutton: {
        color: '#fff',
},
    headertitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#151515',
    },
    headericon: {
        color: '#151515',
    },
    svgWrapper: {
height: 100,
    },
    content: {
        backgroundColor: '#98FB98',
        paddingBottom: 500,
        marginTop: -8,
        paddingHorizontal: 40,
        paddingTop: 20,
        alignItems: 'center',
},
    otpdescription: {
        color: '#a2b2fd',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        paddingVertical: 20,
    },
    otptitle: {
        color: '#ffff',
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
button: {
        backgroundColor: '#2c36bf',
        width: 40,
        height: 40,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 80,
},
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
input: {
        backgroundColor: 'white',
        padding: 1,
        marginVertical: 5,
        height: 40,
        width: '50%',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 2,
    },
    buttonwrapper: {
alignItems: 'center',
        marginVertical: 10,
    },
})
export default styles;