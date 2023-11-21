import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
    marginBottom: 5,
    marginTop: 5,
  },
  userWelcome: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.secondary,
    marginTop: 10,
  },
  normText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.primary,
    marginTop: 5,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
    marginBottom: SIZES.small
  },
  tab: (activeTab, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeTab === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeTab, item) => ({
    fontFamily: FONT.medium,
    color: activeTab === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
