import './Title.css';

function Title(props) {

  return (
    <div className="title-div">
      <h1 style={{color:props.textColor}}>{props.titleText}</h1>
    </div>
  );
}

export default Title;
