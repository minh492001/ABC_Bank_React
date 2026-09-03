const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>ABC Bank</h3>
                        <p>Secure banking for the modern world.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>Email: support@abcbank.com.vn</p>
                        <p>Hotline: (84-24)1234 5678</p>
                    </div>
                </div>
                <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ABC App. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer