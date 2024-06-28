import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import './Welcome.css'

function Welcome() {
    const [show, setShow] = useState(true);
    return (
        <div>

            <Alert key="primary" variant="primary" onClose={() => setShow(false)} dismissible>
                Benvenuto in FunnyBooks!
            </Alert>
            <h1>FunnyBooks! Where Fun meet books!</h1>
        </div>
    );
}

export default Welcome;