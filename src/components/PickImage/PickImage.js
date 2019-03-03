import React, { Component } from "react";
import { View, Image, Button, StyleSheet } from "react-native";
import ImagePicker from "react-native-image-picker";

class PickImage extends Component {
  componentWillMount() {
    this.reset();
  }

  reset = () => {
    this.setState({
      pickedImage: null
    });
  };

  pickImageHandler = () => {
    ImagePicker.showImagePicker(
      { title: "Pick an Image !", maxWidth: 800, maxHeight: 600 },
      res => {
        if (res.didCancel) {
          console.log("User Canceled");
        } else if (res.error) {
          console.log("Error");
        } else {
          this.setState({
            pickedImage: {
              uri: res.uri
            }
          });
          this.props.onImagePicked({ uri: res.uri, base64: res.data });
        }
      }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image
            source={this.state.pickedImage}
            style={styles.imagePlaceholder}
          />
        </View>
        <View style={styles.button}>
          <Button title="Pick Image !" onPress={this.pickImageHandler} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 7
  },
  imagePlaceholder: {
    width: "100%",
    height: "100%"
  }
});

export default PickImage;