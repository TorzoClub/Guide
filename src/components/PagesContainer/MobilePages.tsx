import { Fragment, useState, useRef, useEffect } from 'react'

import './MobilePages.css'

import { PageProps } from '../Page'

export default Pages
function Pages({ pages }: { pages: PageProps[] }) {
  const [pageCode] = useState(0)

  const curretPageRef = useRef<HTMLDivElement>(null)

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

  return (
    <div className="MobilePages">
      {pages.map((page, idx) => {
        return (
          <Fragment key={idx}>
            <h1 className="PageTitle">{page.title}</h1>
            {page.body}
          </Fragment>
        )
      })}
      <div className="SideBarRight">
        <div className="above">SideBarRight</div>
        <div ref={handlerRef} className="bottom-handler">
          handler
        </div>
      </div>
    </div>
  )
}
