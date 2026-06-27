import { Dimensions } from "react-native";
import type { ViewStyle } from "react-native";

const { width } = Dimensions.get("window");
const isTablet: boolean = width >= 768;

type ModalLayout = {
  horizontalMargin: number;
  bottomPadding: number;
  borderRadius: number;
};

export const MODAL_LAYOUT: ModalLayout = {
  horizontalMargin: isTablet ? 16 : 7,
  bottomPadding: 8,
  borderRadius: 50,
};