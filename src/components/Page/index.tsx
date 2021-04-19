import { useEffect, useRef } from 'react'
import PageBody from '../PageBody'

import s from './index.module.css'

export interface PageProp {
  title: string
  body: ReturnType<typeof PageBody>
}

export default Page
function Page({
  title,
  body,
  getOffsetInfo,
}: PageProp & {
  getOffsetInfo: (s: { offsetLeft: number; offsetWidth: number }) => void
}) {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!pageRef.current) {
      return
    } else {
      const el = pageRef.current

      getOffsetInfo({
        offsetLeft: el.offsetLeft,
        offsetWidth: el.offsetWidth,
      })
    }
  }, [getOffsetInfo])

  return (
    <div ref={pageRef} className={s.Page}>
      <h1 className="PageTitle">{title}</h1>
      <div className="PageBody">{body}</div>
    </div>
  )
}
