import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import ImagesList from "../components/ImagesList";
import { searchImages } from "../services/api";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [imagesList, setImagesList] = useState([])

  const getImages = async () => {
    const fetchedImages = await searchImages(1, searchTerm)
    setImagesList(fetchedImages.results)
  }

  return(
  <View style={styles.container}>
    <View style={styles.searchContainer}>
      <TextInput style={styles.searchInput} placeholder="Enter search term" 
      value={searchTerm} onChangeText={term => setSearchTerm(term)}  />
      <Button title="Search" onPress={() => getImages()}/>
    </View>
    <ImagesList images={imagesList} />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  searchContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 10
  },
  searchInput: {
    borderColor: "#CCCCCC",
    borderWidth: 1,
    padding: 10,
    flex: 1
  }
  

})

export default Home;