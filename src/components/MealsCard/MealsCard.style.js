import  { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        marginHorizontal: 5,
        marginVertical: 5,
        flexDirection: "column",
        flex: 1,
    },
    image: {
        width: "100%",
        aspectRatio: 16 / 9,
        resizeMode: "cover",
        borderRadius: 15,
    },
    title: {
        width: "100%",
        backgroundColor: "#00000099",
        color: "#fff",
        position: "absolute",
        right: 5,
        bottom: 0,
        padding: 5,
        fontWeight: "bold",
        fontSize: 22,
        fontWeight: "bold",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        
    }
})
