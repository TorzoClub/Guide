import React, { PropsWithChildren } from 'react'

const HorizontalSpan = ({
  children = null,
  style = undefined,
  ...reset
}: PropsWithChildren<{
  style?: React.HTMLAttributes<HTMLSpanElement>['style']
}>) => (
  <span
    style={{
      ...style,
      height: '1em',
      lineHeight: '1em',
      writingMode: 'horizontal-tb',
    }}
    {...reset}
  >
    {children}
  </span>
)
export default HorizontalSpan
