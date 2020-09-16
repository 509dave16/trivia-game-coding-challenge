import * as React from 'react'
import { Heading } from 'material-bread'

import sharedStyles from '~config/sharedStyles'

interface HeadingProps {
  type: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  style: React.CSSProperties
}
 
export default ({ style, text, type = 5  }: HeadingProps) => <Heading style={[sharedStyles.textCenter, style]} type={type} text={text} />
