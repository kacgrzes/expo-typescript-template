import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'
import {
  Box as NBBox,
  Center as NBCenter,
  Row as NBRow,
  Column as NBColumn,
  Pressable,
  IPressableProps,
  IBoxProps,
  ICenterProps,
  StyledProps,
  Theme,
} from 'native-base'
import { ViewStyle } from 'react-native'

// TODO: We shouldn't just export the same nb components as we do here.
// Remove them when no additional logic is required.

export type GradientProps = StyledProps & LinearGradientProps

export const Box = (props: IBoxProps) => <NBBox {...props} />

// TODO: Should it has similar feedback as `TouchableOpacity`?
export const Touchable = (props: IPressableProps) => <Pressable {...props} />

export const Gradient = (props: GradientProps) => <LinearGradient {...props} style={props.style} />

export const Center = (props: ICenterProps) => <NBCenter {...props} />

export const Row = (props: IBoxProps) => <NBRow {...props} />

export const Column = (props: IBoxProps) => <NBColumn {...props} />

type AbsoluteProps = Omit<IBoxProps, 'position'>
export const Absolute = (props: AbsoluteProps) => <Box {...props} position="absolute" />
export const AbsoluteFullFill = (props: AbsoluteProps) => (
  <Box flex={1} top={0} right={0} left={0} bottom={0} {...props} position="absolute" />
)

type SpacingValue = keyof Theme['space']
type SpacerProps = {
  x?: SpacingValue
  y?: SpacingValue
  flex?: ViewStyle['flex']
}
export const Spacer = ({ x = '0', y = '0', flex }: SpacerProps) => <Box mt={y} mr={x} flex={flex} />
