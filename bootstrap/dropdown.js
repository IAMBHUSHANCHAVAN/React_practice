import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {props.title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={props.link1}>first link</Dropdown.Item>
        <Dropdown.Item href={props.link2}>second link</Dropdown.Item>
        <Dropdown.Item href={props.link3}>third link</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;