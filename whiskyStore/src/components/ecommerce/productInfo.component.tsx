import React from 'react';
import {
  Image,
  ImageSourcePropType,
  View,
  ViewProps,
  ImageBackground
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Radio,
  RadioGroup,
  RadioProps,
  Text,
} from '@kitten/ui';
import { textStyle, ImageOverlay } from '@src/components/common';

interface ComponentProps {
  image: ImageSourcePropType;
  iconimage: ImageSourcePropType;
  name: string;
  type: string;
  price: string;
  description: string;
  size: string;
  colors: string[];
  selectedColorIndex: number;
  onColorSelect: (index: number) => void;
  onGoBack:()=> void;
}

export type ProductInfoProps = ThemedComponentProps & ViewProps & ComponentProps;

class ProductInfoComponent extends React.Component<ProductInfoProps> {

  private onColorSelectChange = (index: number) => {
    this.props.onColorSelect(index);
  };

  private renderColorRadio = (color: string, index: number): React.ReactElement<RadioProps> => {
    const { themedStyle } = this.props;

    return (
      <Radio
        key={index}
        style={themedStyle.radioItem}
        text={color}
      />
    );
  };

  public render(): React.ReactNode {
    const { style, themedStyle, selectedColorIndex, ...withDataProps } = this.props;
    const { image, name, type, price, description, size, colors, ...restProps } = withDataProps;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        {/* <Image
          style={[themedStyle.mainBackground, themedStyle.bottomSpace]}
          source={image}
        /> */}
        <ImageBackground
          resizeMode={'contain'} // or cover
          style={{ aspectRatio: 4/3 }} // must be passed from the parent, the number may vary depending upon your screen size
          source={image}
        >
        <View style={themedStyle.detailsContainer}>
          {/* <View style={[themedStyle.nameContainer, themedStyle.bottomSpace]}>
            <View>
              <Text
                style={[themedStyle.nameLabel, themedStyle.labelBottomSpace]}
                category='h6'>
                {name}
              </Text>
              <Text
                style={themedStyle.typeLabel}
                appearance='hint'
                category='p2'>
                {type}
              </Text>
            </View>
            <Text style={themedStyle.costLabel}>{price}</Text>
          </View> */}
          {/* <Text
            style={[themedStyle.descriptionText, themedStyle.bottomSpace]}
            appearance='hint'>
            {description}
          </Text>
           */}
          <View style= { themedStyle.sizeArea}>         
          <Text
            style={[themedStyle.descriptionText, themedStyle.bottomSpace , themedStyle.textCenter]}
            appearance='hint'>
            {size}
          </Text>
          </View>
          <View style = {themedStyle.descriptionArea}>
         
            <Text
              style={[themedStyle.descriptionText, themedStyle.bottomSpace, themedStyle.textCenter]}
              appearance='hint'>
              {description}
            </Text>
          </View>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

export const ProductInfo = withStyles(ProductInfoComponent, (theme: ThemeType) => ({
  container: {},
  image: {
    flex: 1,
    width: null,
    height: 340,
  },
  detailsContainer: {
    // marginHorizontal: 16,
    top: 1560,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameLabel: textStyle.headline,
  typeLabel: textStyle.paragraph,
  costLabel: {
    ...textStyle.headline,
    fontSize: 26,
    lineHeight: 32,
  },
  descriptionText: textStyle.paragraph,
  colorSelector: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  radioItem: {
    marginRight: 16,
  },
  bottomSpace: {
    marginBottom: 24,
  },
  labelBottomSpace: {
    marginBottom: 8,
  },
  mainBackground: {
    flex: 1,
    resizeMode: 'stretch',
    width: null,
  },
  lineStyle: {
    left: '10%',
    right: '10%',
    bottom: 10,
    // resizeMode: 'cover',
    width: '80%',
    height:1,
  },
  sizeArea:{
    top:0,
    justifyContent: 'center'
  },
  descriptionArea:{
    top:50
  },
  textCenter:{
    textAlign:'center'
  }
}));
