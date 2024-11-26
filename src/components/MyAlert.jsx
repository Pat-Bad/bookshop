import Alert from 'react-bootstrap/Alert';

function MyAlert(props) {
  return (
   
        <Alert className="bg-info">
         Welcome, {props.name}!
        </Alert>
      )}

export default MyAlert;