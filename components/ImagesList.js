import { FlatList, Pressable, StyleSheet, View} from "react-native";

import ImageDetail from "./ImageDetail";

const Divider = () => {
  return <View style={styles.divider} />
}

const ImagesList = ({images, onFetchMore, navigation}) => {
  return (
      <FlatList style={styles.list} data={images}
        renderItem={({item}) => 
        (
          <Pressable onPress={() => navigation.navigate('Image', {
            download_url: item.links.download, source: item.urls.full, title: item.user.name, id: item.id})}>
            <ImageDetail preview={item.urls.small} author={item.user.name} description={item.user.portfolio_url}/>
          </Pressable>
        )}
        keyExtractor={item => item.id} ItemSeparatorComponent={<Divider />}
        
        onEndReachedThreshold={0.2} onEndReached={onFetchMore}/>
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