import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import ImagesList from "../components/ImagesList";
import { searchImages } from "../services/api";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesList, setImagesList] = useState([]);

  const getImages = async (page, term) => {
    const fetchedImages = await searchImages(page, term.toLowerCase())

    if (page > 1) {
      setImagesList(imagesList.concat(fetchedImages.results))
    } else {
      setImagesList(fetchedImages.results)
      setTotalPage(fetchedImages.total_pages)
    }
  }

  useEffect(() => {
    getImages(currentPage, searchTerm)
  }, [currentPage])

  return(
  <View style={styles.container}>
    <View style={styles.searchContainer}>
      <TextInput style={styles.searchInput} placeholder="Enter search term" 
      value={searchTerm} onChangeText={term => setSearchTerm(term)}  />
      <Button title="Search" onPress={() => {
        setImagesList([])
        getImages(1, searchTerm)
      }}/>
    </View>
    <ImagesList images={imagesList} onFetchMore={() => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1)
      }
    }} />
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