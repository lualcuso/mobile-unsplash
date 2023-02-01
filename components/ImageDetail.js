import { Image, StyleSheet, Text, View} from "react-native";

const ImageDetail = ({preview, author, description}) => {
  return (
    <View style={styles.item}>
      <Image style={styles.preview} source={{uri: preview}}/>
      <View style={styles.info}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
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
    width: 100,
    height: 100,
  }
});

export default ImageDetail;