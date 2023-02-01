import { Image, StyleSheet, Text, View} from "react-native";

const ImageDetail = ({preview}) => {
  return (
    <View style={styles.item}>
      <Image style={styles.preview} source={{uri: preview}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  author: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    color: "#8f8f9d"
  },
  info: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10
  },
  preview: {
    width: 350,
    height: 350,
  }
});

export default ImageDetail;