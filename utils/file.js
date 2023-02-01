import * as FileSystem from 'expo-file-system'
import * as MediaLibrary from 'expo-media-library'

const save = async (fileUri) => {
  const { status } = await MediaLibrary.requestPermissionsAsync()
  if (status === 'granted') {
    const asset = await MediaLibrary.createAssetAsync(fileUri)
    await MediaLibrary.createAlbumAsync('Download', asset, false)
  }
}

export const download = async (name, downloadUrl) => {
  try {
    let fileUri = FileSystem.documentDirectory + name + '.jpeg'
    const { uri } = await FileSystem.downloadAsync(downloadUrl, fileUri)
    save(uri)
  } catch (error) {} 
}