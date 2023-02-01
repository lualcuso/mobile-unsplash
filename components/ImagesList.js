import { FlatList, Pressable, StyleSheet, Text, View} from "react-native";

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
            image: item})}>
            <ImageDetail preview={item.urls.small} author={item.user.name} description={item.user.portfolio_url}/>
          </Pressable>
        )}
        keyExtractor={item => item.id} 
        ItemSeparatorComponent={<Divider />}
        onEndReachedThreshold={0.2} onEndReached={onFetchMore}
        ListEmptyComponent={<View style={styles.empty}><Text>Please execute a search to load images</Text></View>}
        />
  )
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 0,
    zIndex: -1
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
  },
  empty: {
    padding: 30,
    alignItems: "center"
  }
});

export default ImagesList;