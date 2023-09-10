import React from 'react';
import './Help.css';

const Help: React.FC = () => {
    return (
        <div className="help">
            <p className="help-head1">Need help? Don't hesitate!</p>
            <p className="help-head2">You can reach us at: <a href="">info@techbairn.com</a>  or call us at: <a href="tel:+91 123456789"> +91 123456789 </a>.</p>
        </div>
    );
}
export default Help