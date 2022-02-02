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
      <TextInput style={styles.textinput}>Codetrain Uni. College</TextInput>
     

      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.textinput}>yrnchanteng@gmail.com</TextInput>
      
     
      <Text style={styles.text}>Name</Text>
      <TextInput style={styles.input} underlineColorAndroid={"transparent"}>Oduro Isaac Sapey</TextInput>
      
      <Text style={styles.text}>Nickname</Text>
      <TextInput style={styles.input} underlineColorAndroid={"transparent"}>MR. CEO</TextInput>
      
      <Text style={styles.text}>Emergency Contact</Text>
      <TextInput style={styles.input} underlineColorAndroid={"transparent"}>0570885254</TextInput>
      
      </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            UPDATE PROFILE
          </Text>
        </TouchableOpacity>
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

buttonContainer: {
marginEnd: 40,
marginStart: 40,
},

buttonText: {
color: "white"
},

button: {
alignItems: "center",
justifyContent: "center",
backgroundColor: "#02a0d9",
height: 50,
borderRadius: 30
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
