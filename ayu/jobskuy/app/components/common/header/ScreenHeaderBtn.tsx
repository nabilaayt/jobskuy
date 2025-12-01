import { ImageSourcePropType, Image, TouchableOpacity } from "react-native";
import styles, { btnImg } from "./screenheader.style";

interface ScreenHeaderBtnProps {
    iconUrl: ImageSourcePropType;
    dimension: number;
    handlePress?: () => void;
}

export default function ScreenHeaderBtn({ iconUrl, dimension, handlePress }: ScreenHeaderBtnProps) {
    return(
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <Image 
                source={iconUrl}
                resizeMode="cover"
                style={btnImg(dimension)}
            />
        </TouchableOpacity>
    );
};