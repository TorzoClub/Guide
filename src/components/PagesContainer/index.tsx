import { useMemo, useState, useRef, useEffect } from 'react'

import './index.css'

import useScreen from '../../utils/useScreen'
import MobilePages from './MobilePages'
import NormalPages from './NormalPages'

import { PageProp } from '../Page'
import usePositionDetecting, { ContainerInfo } from './usePositionDetecting'
import useOffsetDetecting from './useOffsetDetecting'

export type { ContainerInfo } from './usePositionDetecting'

// O_Info
export type OffsetInfo = {
  inited: boolean
  offsetLeft: number
  offsetWidth: number

  detectingCount: number
}

export default function PagesContainer({ pages }: { pages: PageProp[] }) {
  const ContainerRef = useRef<HTMLDivElement>(null)

  const [pageNodes, offsetInfoList, oRL] = useOffsetDetecting({ pages })

  const [containerInfo, setContainerInfo] = useState<ContainerInfo>({
    pageIndex: 0,
    pages,
    progress: 0,
    direction: 1,
  })

  usePositionDetecting({
    offsetInfoList,
    setContainerInfo,
  })

  const screen = useScreen(oRL)

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
      <div ref={ContainerRef} className={`PageContainer ${screen}`}>
        {screenNode}
      </div>
    )
  }, [screen, screenNode])
}
