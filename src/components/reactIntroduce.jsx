import '../css/reactIntroduce.scss'

const ReactIntroduce = () => {
  const curlyBracesLeft = '{'
  const curlyBracesRight = '}'

  return (
    <div className="reactIntroduce">
      <div className="reactIntroduce-wrapper">
        <span>
          {' '}
          export const MyHobbies = (colorfulLife) =&gt; {curlyBracesLeft}{' '}
        </span>
        <br />
        &nbsp;&nbsp;&nbsp;<span>return ( </span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>&lt;div className="my-hobbies"&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&lt;ul&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>&lt;li&gt;&#128187;Coding</span>
        <span>&lt;/li&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>&lt;li&gt;&#127911;Music</span>
        <span>&lt;/li&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>&lt;li&gt;&#127918;Gaming</span>
        <span>&lt;/li&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>&lt;li&gt;&#128032;Fishing</span>
        <span>&lt;/li&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&lt;/ul&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&lt;/div&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span>)</span>
        <br />
        <span>{curlyBracesRight}</span>
      </div>
    </div>
  )
}

export default ReactIntroduce
