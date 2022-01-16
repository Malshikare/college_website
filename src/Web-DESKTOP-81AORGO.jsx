import "./Web.css";
function Web() {
    return (
        <div className="footer_div" >
            <footer className="main_footer" >
                <div className="footer">
                    <div >
                        <div className="footer_heading get-in-touch ">
                            <p >Get in Touch</p>
                        </div>
                        <div className="footer_body">
                            <p>Tel : 02133 - 230582</p>
                            <p>Fax : 02133-230583</p>
                            <p>Email: <a className="website_id" href="mailto:office.gcoeavasari@dtemaharashtra.gov.in">office.gcoeavasari@dtemaharashtra.gov.in</a> </p>
                            <p >Website:<a className="website_id" href="http://www.gcoeara.ac.in"> gcoeara.ac.in</a> </p>
                        </div>
                    </div>
                    <div >
                        <div className="footer_heading">
                            <p >Important Links</p>
                        </div>
                        <div className="footer_body">
                            <p>Home</p>
                            <p>About</p>
                            <p>Contact Us</p>
                            <p>Alumni</p>
                        </div>
                    </div>
                    <div>
                        <div className="footer_heading">
                            <p >Climate</p>
                        </div>
                        <div className="footer_body">
                            <p>Cloudy, 25 C</p>
                        </div>
                    </div>
                </div>
                <div className='subFooter'>
                    <p className="para">Copyright © 2021 Government Colllege of Engineering and Research, Avsari(GCOEARA)</p>
                    <p className="para">Designed & Developed by Computer and Entc Engineering Department, GCOEARA</p>
                </div>
            </footer>
        </div>
    )
};
export default Web;