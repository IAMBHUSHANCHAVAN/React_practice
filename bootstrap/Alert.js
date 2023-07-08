import Alert from 'react-bootstrap/Alert';

function AdditionalContentExample(props) {
  return (
    <Alert variant={props.property}>
      <Alert.Heading>{props.head}</Alert.Heading>
      <p>
       {props.desc}
      </p>
      <hr />
      <p className="mb-0">
      {props.head}
      </p>
    </Alert>
  );
}

export default AdditionalContentExample;