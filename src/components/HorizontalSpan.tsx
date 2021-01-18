import React, { PropsWithChildren } from 'react'

const HorizontalSpan = ({
  children = null,
  style = undefined,
  ...reset
}: PropsWithChildren<{
  style?: React.HTMLAttributes<HTMLSpanElement>['style']
}>) => (
  <span
    style={{ writingMode: 'horizontal-tb', lineHeight: '1em', ...style }}
    {...reset}
  >
    {children}
  </span>
)
export default HorizontalSpan
