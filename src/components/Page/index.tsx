import { useEffect, useRef } from 'react'
import PageBody from '../PageBody'
export interface PageProps {
  title: string
  body: ReturnType<typeof PageBody>
}

export default Page
function Page({
  title,
  body,
  getOffsetInfo,
}: PageProps & {
  getOffsetInfo: (s: { offsetLeft: number; offsetWidth: number }) => void
}) {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!pageRef.current) {
      return
    }

    const el = pageRef.current

    getOffsetInfo({
      offsetLeft: el.offsetLeft,
      offsetWidth: el.offsetWidth,
    })
  }, [getOffsetInfo])

  return (
    <div ref={pageRef} className="Page">
      <h1 className="PageTitle">{title}</h1>
      <div className="PageBody">{body}</div>
    </div>
  )
}
