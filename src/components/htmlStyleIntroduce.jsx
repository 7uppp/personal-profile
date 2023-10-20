import '../css/htmlStyleIntroduce.scss'

const HtmlStyleIntroduce = () => {
  return (
    <div className="HtmlStyleIntroduce">
      <div className="HtmlStyleIntroduce-wrapper">
        <span className="purple">&lt;! doctype html &gt;</span>
        <br />
        <span className="purple">&lt;html&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;<span className="orange">&lt;head&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="blue">
          &lt;title&gt; Welcome my profile! &lt;/title&gt;
        </span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <span className="orange">&lt;/head&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;<span className="orange">&lt;body&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="blue">&lt;div class="what I believe"&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="red">
          &lt;span&gt; Learning. Coding. Sharing. &lt;/span&gt;
        </span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="blue">&lt;/div&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="blue">
          &lt;script <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type="learning"
          src="/vsCode/keepCoding.js" <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
        </span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="blue">&lt;/script&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;<span className="orange">&lt;/body&gt;</span>
        <br />
        <span className="purple">&lt;/html&gt;</span>
      </div>
    </div>
  )
}

export default HtmlStyleIntroduce
