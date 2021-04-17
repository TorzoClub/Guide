import { useEffect, useState } from 'react'

import s from './CurrentTitle.module.css'
const FADEIN_ANIMATE_TIMING = 618

type LayoutInfo = {
  title: string
  direction: -1 | 1
}

let GLOBAL_KEY = 0
const INIT_TIMEOUT_VALUE = setTimeout(() => undefined, 0)

export default function CurrentTitle({ title, direction }: LayoutInfo) {
  const setTimeoutValue = useState<NodeJS.Timeout>(INIT_TIMEOUT_VALUE)[1]

  const [layoutNodes, setLayoutNodes] = useState<JSX.Element[]>([])

  useEffect(() => {
    setLayoutNodes((nodes) => {
      setTimeoutValue((currentTimer) => {
        clearTimeout(currentTimer)
        return setTimeout(() => {
          setLayoutNodes((ns) => [ns[ns.length - 1]])
        }, FADEIN_ANIMATE_TIMING)
      })

      return [
        ...nodes,
        <Layout key={GLOBAL_KEY++} title={title} direction={direction} />,
      ]
    })
    // direction 不需要加入到 deps 中，只需要判断 title 的变动即可
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title])

  return <div className={s.CurrentTitle}>{layoutNodes}</div>
}

const Layout = ({ title, direction }: LayoutInfo) => (
  <div className={`${s.Layout} ${direction > 0 ? s.Next : s.Previus}`}>
    {title}
  </div>
)
