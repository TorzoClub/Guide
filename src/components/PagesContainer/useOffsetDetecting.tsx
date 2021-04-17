import React, { useCallback, useMemo, useState } from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import Page, { PageProp } from '../Page'
import { OffsetInfo } from './index'

export default function useOffsetDetecting({ pages }: { pages: PageProp[] }) {
  const [offsetInfoList, setOffsetInfoList] = useState<OffsetInfo[]>([])

  const pagesNodes = useOffsetList({
    pages,
    setOffsetInfoList,
  })

  return [pagesNodes, offsetInfoList] as const
}

const offsetDetectingCountState = atom({
  key: 'offsetDetectingCountState',
  default: 0,
})

export function useORL() {
  const [offsetDetectingSymbol, setOffsetDetectingSymbol] = useRecoilState(
    offsetDetectingCountState
  )

  const oRL = useCallback(
    () => setOffsetDetectingSymbol((count) => count + 1),
    [setOffsetDetectingSymbol]
  )

  return oRL
}

function useOffsetList({
  pages,
  setOffsetInfoList,
}: {
  pages: PageProp[]
  setOffsetInfoList: React.Dispatch<React.SetStateAction<OffsetInfo[]>>
}) {
  const [offsetDetectingCount] = useRecoilState(offsetDetectingCountState)

  const handleGetOffsetInfo = useCallback(
    (
      idx: number,
      { offsetLeft, offsetWidth }: { offsetLeft: number; offsetWidth: number }
    ) => {
      setOffsetInfoList((offsetInfoList) => {
        const newOffsetInfoList = [...offsetInfoList]
        newOffsetInfoList[idx] = {
          inited: true,
          offsetLeft,
          offsetWidth,
          detectingCount: offsetDetectingCount,
        }

        return newOffsetInfoList
      })
    },
    [offsetDetectingCount, setOffsetInfoList]
  )

  const pageNodes = useMemo(() => {
    return pages.map((page, idx) => {
      return (
        <Page
          key={idx}
          {...page}
          getOffsetInfo={(s) => handleGetOffsetInfo(idx, s)}
        />
      )
    })
  }, [handleGetOffsetInfo, pages])

  return pageNodes
}
