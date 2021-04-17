import React, { useCallback, useMemo, useState } from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import Page, { PageProp } from '../Page'
import { OffsetInfo } from './index'

const offsetDetectingSymbolState = atom({
  key: 'offsetDetectingSymbolState',
  default: 0,
})
Object.assign(window, { offsetDetectingSymbolState, useRecoilValue })

export function useORL() {
  const [offsetDetectingSymbol, setOffsetDetectingSymbol] = useRecoilState(
    offsetDetectingSymbolState
  )

  const oRL = () => setOffsetDetectingSymbol((symbol) => symbol + 1)

  return oRL
}

function useOffsetList({
  pages,
  setOffsetInfoList,
}: {
  pages: PageProp[]
  setOffsetInfoList: React.Dispatch<React.SetStateAction<OffsetInfo[]>>
}) {
  const [offsetDetectingSymbol] = useRecoilState(offsetDetectingSymbolState)

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
          detectingCount: offsetDetectingSymbol,
        }

        return newOffsetInfoList
      })
    },
    [offsetDetectingSymbol, setOffsetInfoList]
  )

  const refreshOffsetInfoHandlers = useMemo(() => {
    return pages.map((page, idx) => {
      return ({
        offsetLeft,
        offsetWidth,
      }: {
        offsetLeft: number
        offsetWidth: number
      }) => {
        handleGetOffsetInfo(idx, { offsetLeft, offsetWidth })
      }
    })
  }, [handleGetOffsetInfo, pages])

  const pageNodes = useMemo(() => {
    return pages.map((page, idx) => {
      return (
        <Page
          key={idx}
          {...page}
          getOffsetInfo={refreshOffsetInfoHandlers[idx]}
        />
      )
    })
  }, [pages, refreshOffsetInfoHandlers])

  return pageNodes
}

export default function useOffsetDetecting({ pages }: { pages: PageProp[] }) {
  const [offsetInfoList, setOffsetInfoList] = useState<OffsetInfo[]>([])

  const pagesNodes = useOffsetList({
    pages,
    setOffsetInfoList,
  })

  return [pagesNodes, offsetInfoList] as const
}
