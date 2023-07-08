import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function TypesExample(props) {
  return (
    <>
                {/* BUTTONS  */}
      <Button variant={props.property} >{props.name}</Button>{' '}

    </>
  );
}

export default TypesExample;