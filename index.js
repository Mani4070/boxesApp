const Box = props => {
  //  Write your code here.
  const {className,text} =props 
  <div className={`${className}`}>
      <p>{text}</p>
  </div>
}

const element = (
  //  Write your code here. 
  <div>
      <h1>Boxes</h1>
      <div>
          <Box className="box box1" text="Small"/>
          <Box className="box box2" text="Medium"/>
          <Box className="box box3" text="Large"/>
      </div>
  </div>
)

ReactDOM.render(element, document.getElementById("root"));
