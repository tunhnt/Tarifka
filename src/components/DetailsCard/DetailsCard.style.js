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
    },
    title: {
        fontSize: 22,
        color: "#a52b2a",
        fontWeight: "bold",
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderColor: "gray"
    },

    desc: {
        paddingVertical: 5,
    }

})
