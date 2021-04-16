import React, { useEffect, useState } from 'react'
import { PageProps } from '../Page'
import { ContainerInfo, OffsetInfo } from './index'

export default function usePositionDetect({
  offsetInfoList,
  setContainerInfo,
}: {
  offsetInfoList: OffsetInfo[]
  setContainerInfo: React.Dispatch<React.SetStateAction<ContainerInfo>>
}) {
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
      console.log('scroll', pageIndex)
    }

    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [offsetInfoList, setContainerInfo])
}
