import '../css/reactIntroduce.scss'

const ReactIntroduce = () => {
  const curlyBracesLeft = '{'
  const curlyBracesRight = '}'

  return (
    <div className="reactIntroduce">
      <div className="reactIntroduce-wrapper">
        <span className="blue">
          export const MyHobbies = (colorfulLife) =&gt; {curlyBracesLeft}
        </span>
        <br />
        &nbsp;&nbsp;&nbsp;<span className="blue">return ( </span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="blue">&lt;div className="my-hobbies"&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="red">&lt;ul&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="red">&lt;li&gt;&#128187;Coding</span>
        <span className="red">&lt;/li&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="red">&lt;li&gt;&#127911;Music</span>
        <span className="red">&lt;/li&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="red">&lt;li&gt;&#127918;Gaming</span>
        <span className="red">&lt;/li&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="red">&lt;li&gt;&#128032;Fishing</span>
        <span className="red">&lt;/li&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="red">&lt;/ul&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="blue">&lt;/div&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="blue">)</span>
        <br />
        <span className="blue">{curlyBracesRight}</span>
      </div>
    </div>
  )
}

export default ReactIntroduce
