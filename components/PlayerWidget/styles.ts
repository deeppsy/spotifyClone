import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 47,
    width: "100%",
    backgroundColor: "#131313",
    borderWidth: 2,
    borderColor: "black",
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },

  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    justifyContent: "space-around",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  artist: {
    color: "lightgray",
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
  },
  progress: {
    height: 5,
    backgroundColor: "#bcbcbc",
  },
});

export default styles;
