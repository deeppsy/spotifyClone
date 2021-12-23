import { Text, View, FlatList, StyleSheet } from "react-native";
import { RootTabScreenProps } from "../types";
import albumCategories from "../data/albumCategories";
import AlbumCategory from "../components/AlbumCategory";
import SpaceBelow from "../components/SpaceBelow";

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      {/* <Text style={{ color: "white" }}>Home</Text> */}
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => <SpaceBelow />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
