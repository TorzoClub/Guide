import React, { useEffect, useState } from 'react'
import { PageProp } from '../Page'
import { OffsetInfo } from './index'

// C_Info
export type ContainerInfo = {
  pageIndex: number
  pages: PageProp[]
  progress: number

  // 方向， 正数为往后面滚页， 负数为往前面滚页
  direction: 1 | -1
}

export default function usePositionDetect({
  offsetInfoList,
  setContainerInfo,
}: {
  offsetInfoList: OffsetInfo[]
  setContainerInfo: React.Dispatch<React.SetStateAction<ContainerInfo>>
}) {
  const [latestScroll, setLatestScroll] = useState(0)

  useEffect(() => {
    const scrollHandler = (e: HTMLElementEventMap['scroll']) => {
      if (!document.scrollingElement) {
        return
      }

      const { scrollLeft, scrollWidth } = document.scrollingElement

      setLatestScroll((latestScrollLeft) => {
        if (latestScrollLeft < scrollLeft) {
          setContainerInfo((info) => ({ ...info, direction: 1 }))
        } else {
          setContainerInfo((info) => ({ ...info, direction: -1 }))
        }

        return scrollLeft
      })

      const scrollHorizontal = Math.abs(scrollLeft)

      const offsetInfo = [...offsetInfoList]
        .reverse()
        .find(({ offsetLeft, offsetWidth }) => {
          const a = scrollWidth - (offsetLeft + offsetWidth)
          return scrollHorizontal > a
        })

      const pageIndex = offsetInfoList.indexOf(offsetInfo as OffsetInfo)
      setContainerInfo((info) => ({ ...info, pageIndex }))
      console.log('scroll', pageIndex)
    }

    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [offsetInfoList, setContainerInfo])
}
