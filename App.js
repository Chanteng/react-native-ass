import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.img} source={require("./assets/2.jpg")} />

        <View style={styles.mother}>
      <Text style={styles.text}>School</Text>
      <TextInput style={styles.textinput} placeholder="Codetrain Uni. College" />
     

      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.textinput} placeholder="yrnchanteng@gmail.com" />
      
     
      <Text style={styles.text}>Name</Text>
      <TextInput style={styles.input} placeholder="Oduro Isaac Sapey" underlineColorAndroid={"transparent"} />
      
      <Text style={styles.text}>Nickname</Text>
      <TextInput style={styles.input} placeholder="MR. CEO" underlineColorAndroid={"transparent"} />
      
      <Text style={styles.text}>Emergency Contact</Text>
      <TextInput style={styles.input} placeholder="0570885254" underlineColorAndroid={"transparent"} />
      
     
     
      </View>


    </SafeAreaView>
  );
}



const styles = StyleSheet.create( {
container: {
    backgroundColor: "orange",
    flex: 1,
},

text: {
    fontSize: 20,
    color: "black",
    paddingBottom: 1,
    marginBottom: 1,
},

textinput: {
  alignSelf: "stretch",
  height: 40,
  marginBottom: 30,
 fontSize: 24,
 color: "white",

},

input: {
  alignSelf: "stretch",
  height: 40,
  color: "white",
  marginBottom: 30,
 fontSize: 24,
 borderBottomColor: "green",
 borderBottomWidth: 1
},



img: {
    height: 200,
    width: 200,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50
},

mother: {
    alignSelf: "center"
}

})

export default App;
