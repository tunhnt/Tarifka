import { StyleSheet } from "react-native";

export default StyleSheet.create({
container:{
    backgroundColor: '#ECEFF1',
    borderColor: '#bdbdbd',
    borderWidth: 1,
    margin: 10,
    flexDirection: 'row',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius:7,
    borderBottomRightRadius:7,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "gray",
},
image:{
    width: 110,
    minHeight: 70,
    marginRight: 9,
    marginLeft: 2,
    resizeMode: 'contain',
},
text_container: {
    flex: 1,
    padding: 5,
    alignSelf: 'center'
},
title:{
    fontSize: 20,
    fontWeight: "500",
    color: '#000'
},
})