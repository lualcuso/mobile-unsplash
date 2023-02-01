import { FlatList, Image, StatusBar, StyleSheet, Text, View} from "react-native";

const Item = ({author, description, preview}) => (
  <View style={styles.item}>
    <Image style={styles.preview} source={{uri: preview}}/>
    <View style={styles.info}>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

const Divider = () => {
  return <View style={styles.divider} />
}

const ImagesList = ({images}) => {
  return (
      <FlatList style={styles.list} data={images}
        renderItem={({item}) => <Item preview={item.urls.thumb} author={item.user.name} description={item.user.portfolio_url}/>}
        keyExtractor={item => item.id} ItemSeparatorComponent={<Divider />} />
  )
}

const styles = StyleSheet.create({
  
  list: {
    flexGrow: 0
  },
  item: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#CCCCCC"
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

export default ImagesList;