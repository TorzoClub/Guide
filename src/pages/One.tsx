import HorizontalSpan from '../components/HorizontalSpan'
import InnerPage from '../components/InnerPage'
const TestPicture = 'https://pache.blog/test-picture.jpg'

export default () => {
  return (
    <InnerPage>
      <h1>
        <span className="bg">移</span>群别装
      </h1>
      <p>
        指的是与其来同装装逼，还不如去别的群装逼。在别的群说的话比在同装装得逼更多、更妙、更广泛。
      </p>

      <h1>
        <span className="bg">离</span>装叛同
      </h1>
      <p>
        比上一条要更加过分。不仅离开同装，还背叛了同装，加入到别的装逼群当中去。并且，他们很可能在别的群装的逼都是在同装里现学现卖的，叛同无疑了一刚。
      </p>

      <h1>
        <span className="bg">弃</span>同投独
      </h1>
      <p>
        比上一条要更加过分。不仅加入到别的装逼群当中去，而且加入的是与同装对立的独装群，甚至自己当上了独装会长。
      </p>

      <h1>
        <span className="bg">但</span>装无妨
      </h1>
      <p>
        当成员鼓励谁来提问、咨询、讲述自身情况或者提起话题的话。大家都会说一句：但装无妨
      </p>

      <h1>
        <span className="bg">明</span>逼故问
      </h1>
      <p>
        指的是你明明知道这个逼到底是什么，该怎么装，但你却故意装不懂，来询问别人、引诱对方装逼。这是绽装的常用套路之一：等对方先出牌，之后再立马破解对方的招数。但有一定的风险：要是他装得你都不懂呢？
      </p>

      <h1>
        <span className="bg">Ｔ</span>ｏｒｚｏ
      </h1>
      <p>
        当时，我们一致认为同装会应该有一个高大上国际范的英文名。无论是网站域名还是之后的发展，我们都一致地认为这比较重要。因此，
        <HorizontalSpan style={{ fontSize: '0.75em' }}>Vec</HorizontalSpan>{' '}
        提出了「Ｔｏｒｚｏ」的概念。
        ……写了这么多废话，实际上就是个「同装」的译音而已。
      </p>

      <figure>
        <img alt="test picture" src={TestPicture} />
        <figcaption>测试图片イオナサル</figcaption>
      </figure>

      <div className="last">
        <div>TORZO Guide Book</div>
        <div>2021＠同装导册</div>
      </div>
    </InnerPage>
  )
}
