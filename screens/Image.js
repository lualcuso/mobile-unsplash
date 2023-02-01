import { Alert, Button, Image, StyleSheet, Text, View } from "react-native"

import { download } from "../utils/file"

const ImageDownload = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.title}</Text>
      <Image style={styles.image} source={{uri: route.params.source}}/>
      <Button title="Download" onPress={() => download(route.params.id, route.params.download_url).then(() => {
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
  title: {
    fontSize: 24,
    marginVertical: 10
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 10
  }
})

export default ImageDownload