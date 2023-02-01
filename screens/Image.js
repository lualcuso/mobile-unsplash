import { Alert, Button, Image, StyleSheet, Text, View } from "react-native"

import { download } from "../utils/file"

const ImageDownload = ({route}) => {
  const { image } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image.urls.full}}/>
      <Text style={styles.author}>{`Author: ${image.user.name}`}</Text>
      <Text>{`${image.likes} Likes`}</Text>
      <Button title="Download" onPress={() => download(image.id, image.links.download).then(() => {
        Alert.alert('Success', 'Image downloaded successfully', [ {text: 'OK'} ]);
      })}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  author: {
    fontSize: 16,
    marginVertical: 10
  },
  image: {
    width: 350,
    height: 350,
    marginVertical: 10
  }
})

export default ImageDownload