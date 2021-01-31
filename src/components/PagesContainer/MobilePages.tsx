import { useRef, useEffect } from 'react'

import './MobilePages.css'

import Page from '../Page'
import { ContainerInfo } from './'

export default Pages
function Pages({
  pageNodes,
  containerInfo,
}: {
  pageNodes: ReturnType<typeof Page>[]
  containerInfo: ContainerInfo
}) {
  const componentRef = useRef<HTMLDivElement>(null)

  const handlerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = handlerRef.current
    if (!el) {
      return
    }

    const touchStart = () => {
      console.log('touchStart')
    }
    const touchMove = () => {
      console.log('touchMove')
    }
    const touchEnd = () => {
      console.log('touchEnd')
    }

    el.addEventListener('touchstart', touchStart)
    el.addEventListener('touchmove', touchMove)
    el.addEventListener('touchend', touchEnd)

    return () => {
      el.removeEventListener('touchstart', touchStart)
      el.removeEventListener('touchmove', touchMove)
      el.removeEventListener('touchend', touchEnd)
    }
  }, [])

  const title = containerInfo.pages[containerInfo.pageIndex]?.title

  return (
    <div ref={componentRef} className="MobilePages">
      {pageNodes}
      <div className="SideBarRight">
        <div className="above">SideBarRight: {title}</div>
        <div ref={handlerRef} className="bottom-handler">
          handler
        </div>
      </div>
    </div>
  )
}
