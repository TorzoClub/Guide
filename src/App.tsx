import React from 'react'
import './App.css'

import HorizontalSpan from './components/HorizontalSpan'

const TestPicture = 'https://pache.blog/test-picture.jpg'

function App() {
  return (
    <div className="App">
      <h1>移群别装</h1>
      <p>
        指的是与其来同装装逼，还不如去别的群装逼。在别的群说的话比在同装装得逼更多、更妙、更广泛。
      </p>

      <h1>Torzo</h1>
      <p>
        当时，我们一致认为同装会应该有一个高大上国际范的英文名。无论是网站域名还是之后的发展，我们都一致地认为这比较重要。因此，
        <HorizontalSpan style={{ fontSize: '0.75em' }}>Vec</HorizontalSpan>{' '}
        提出了「Torzo」的概念。
        ……写了这么多废话，实际上就是个「同装」的译音而已。
      </p>

      <h1>竖排文字调研罢了</h1>
      <p>我靠，这就是传说中的竖排排版？</p>

      <p>
        好像很容易的样子。改个{' '}
        <HorizontalSpan style={{ fontSize: '0.75em' }}>CSS</HorizontalSpan>{' '}
        属性的事情，不知道有什么坑。首先是 <HorizontalSpan>P</HorizontalSpan>{' '}
        标签变了，原本默认的 margin
        只会是垂直方向的，但现在变成了水平方向了。然后是英文字母吧，hehe
      </p>

      <p>「试一下这个」，竖排排版里，用「」比用引号好看。……</p>

      <p>
        <figure>
          <img alt="test picture" src={TestPicture} />
          <figcaption>测试图片</figcaption>
        </figure>
      </p>

      <p>
        草，第一个坑来了，进来的时候不会显示到最右边，而是在最左边，傻逼吗。。
      </p>
      <p>哦哦，要把 writing-mode 写到 HTML 上……</p>

      <div className="last">
        <div>TORZO Guide Book</div>
        <div>
          2021<HorizontalSpan>＠</HorizontalSpan>同装导册
        </div>
      </div>
    </div>
  )
}

export default App
