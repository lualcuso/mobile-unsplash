import { useEffect, useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import ImagesList from "../components/ImagesList";
import { searchImages } from "../services/api";

const Home = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesList, setImagesList] = useState([]);

  const [openColor, setOpenColor] = useState(false);
  const [color, setColor] = useState(null);
  const [colorItems, setColorItems] = useState([
    {label: 'None', value: null},
    {label: 'Black & White', value: 'black_and_white'},
    {label: 'Black', value: 'black'},
    {label: 'White', value: 'white'},
    {label: 'Yellow', value: 'yellow'},
    {label: 'Orange', value: 'orange'},
    {label: 'Red', value: 'red'},
    {label: 'Purple', value: 'purple'},
    {label: 'Magenta', value: 'magenta'},
    {label: 'Green', value: 'green'},
    {label: 'Teal', value: 'teal'},
    {label: 'Blue', value: 'blue'},
  ]);

  const [openOrientation, setOpenOrientation] = useState(false);
  const [orientation, setOrientation] = useState(null);
  const [orientationItems, setOrientationItems] = useState([
    {label: 'None', value: null},
    {label: 'Landscape', value: 'landscape'},
    {label: 'Portrait', value: 'portrait'},
    {label: 'Squarish', value: 'squarish'},
  ]);

  const getImages = async (page, term, color, orientation) => {
    const fetchedImages = await searchImages(page, term.toLowerCase(), color, orientation)

    if (page > 1) {
      setImagesList(imagesList.concat(fetchedImages.results))
    } else {
      setImagesList(fetchedImages.results)
      setTotalPage(fetchedImages.total_pages)
    }
  }

  useEffect(() => {
    getImages(currentPage, searchTerm, color, orientation)
  }, [currentPage, color, orientation])

  return(
  <SafeAreaView style={styles.container}>
    <View style={styles.searchContainer}>
      <TextInput style={styles.searchInput} placeholder="Enter search term" 
      value={searchTerm} onChangeText={term => setSearchTerm(term)}  />
      <Button title="Search" onPress={() => {
        setImagesList([])
        getImages(1, searchTerm)
      }}/>
    </View>
    <Text style={{ padding: 10 }}>Filters</Text>
    <View style={styles.filterContainer}>
      <View style={styles.filterInputContainer}>
        <Text style={{marginBottom: 10}}>Color:</Text>
        <DropDownPicker
          open={openColor}
          value={color}
          items={colorItems}
          setOpen={setOpenColor}
          setValue={setColor}
          setItems={setColorItems}
          style={styles.filterInput}
          zIndex={1}
          placeholder={"Select an option"}
          onChangeValue={() => {
            if(currentPage > 1) {
              setImagesList([]);
              setCurrentPage(1);
            }
          }}
        />
      </View>
      <View style={styles.filterInputContainer}>
        <Text style={{marginBottom: 10}}>Orientation:</Text>
        <DropDownPicker
          open={openOrientation}
          value={orientation}
          items={orientationItems}
          setOpen={setOpenOrientation}
          setValue={setOrientation}
          setItems={setOrientationItems}
          style={styles.filterInput}
          zIndex={1}
          placeholder={"Select an option"}
          onChangeValue={() => {
            if(currentPage > 1) {
              setImagesList([]);
              setCurrentPage(1);
            }
          }}
        />
      </View>
    </View>
    <ImagesList images={imagesList} navigation={navigation} onFetchMore={() => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1)
      }
    }} />
  </SafeAreaView>
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
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  filterContainer: {
    display: "flex",
    flexDirection: "row"
  },
  filterInputContainer: {
    width: "50%",
    display: "flex",
    padding: 10
  },
  filterInput: {
    borderRadius: 0,
    borderColor: "#CCCCCC"
  }
})

export default Home;