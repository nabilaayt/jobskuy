import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const btnImg = (dimension: number) => ({
  width: dimension,
  height: dimension,
  borderRadius: 8,
});

export default styles;