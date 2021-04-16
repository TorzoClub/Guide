import { useMemo, useState, useRef, useEffect } from 'react'

import './index.css'

import useScreen from '../../utils/useScreen'
import MobilePages from './MobilePages'
import NormalPages from './NormalPages'

import Page, { PageProps } from '../Page'

export type OffsetInfo = {
  inited: boolean
  offsetLeft: number
  offsetWidth: number
}
export type ContainerInfo = {
  pageIndex: number
  pages: PageProps[]
  progress: number
}

function useOffsetList(pages: PageProps[]): [JSX.Element[], OffsetInfo[]] {
  const [offsetInfoList, setOffsetInfoList] = useState<OffsetInfo[]>([])

  const pageNodes = useMemo(() => {
    return pages.map((page, idx) => {
      return (
        <Page
          key={idx}
          {...page}
          getOffsetInfo={({ offsetLeft, offsetWidth }) => {
            setOffsetInfoList((offsetInfoList) => {
              const newOffsetInfoList = [...offsetInfoList]
              newOffsetInfoList[idx] = {
                inited: true,
                offsetLeft,
                offsetWidth,
              }

              return newOffsetInfoList
            })
          }}
        />
      )
    })
  }, [pages])

  return [pageNodes, offsetInfoList]
}

export default function PagesContainer({ pages }: { pages: PageProps[] }) {
  const screen = useScreen()

  const ContainerRef = useRef<HTMLDivElement>(null)

  const [pageNodes, offsetInfoList] = useOffsetList(pages)

  const [containerInfo, setContainerInfo] = useState<ContainerInfo>({
    pageIndex: 0,
    pages,
    progress: 0,
  })

  useEffect(() => {
    const scrollHandler = (e: HTMLElementEventMap['scroll']) => {
      if (!document.scrollingElement) {
        return
      }

      const { scrollLeft, scrollWidth } = document.scrollingElement

      const scrollHorizontal = Math.abs(scrollLeft)

      const offsetInfo = [...offsetInfoList]
        .reverse()
        .find(({ offsetLeft, offsetWidth }) => {
          const a = scrollWidth - (offsetLeft + offsetWidth)
          return scrollHorizontal > a
        })

      const pageIndex = offsetInfoList.indexOf(offsetInfo as OffsetInfo)
      setContainerInfo((info) => ({ ...info, pageIndex }))
      console.log('scroll')
    }

    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [offsetInfoList])

  const screenNode = useMemo(() => {
    switch (screen) {
      case 'mobile':
        // 移动端的话
        return (
          <MobilePages pageNodes={pageNodes} containerInfo={containerInfo} />
        )

      default:
        // 非移动端(大屏)
        return <NormalPages pageNodes={pageNodes} />
    }
  }, [containerInfo, pageNodes, screen])

  return useMemo(() => {
    return (
      <div ref={ContainerRef} className="PageContainer">
        {screenNode}
      </div>
    )
  }, [screenNode])
}
