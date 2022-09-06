import React from 'react';
import Navbar from '../../components/Navbar';
import "../membership/membership.css";
import cardimg from "../membership/asset.png";
import paymentImg from "../membership/payment.png";
import StripeCheckout from 'react-stripe-checkout';





const membership = (props) => {
    
    
    const onToken = (token)=>{
      console.log(token); 
      props.history.push("/menu");
    }
   

    return (
        <>
            <Navbar />
            <div className="container mt-4 mb-5">
                <h5 className="membership">Start Membership here</h5>
                <div className="row align-items-start ms-4">
                    <div className="card">
                        <img src={cardimg} className="card-img-top" alt="asset" />
                        <img src={paymentImg} className="card-img-top" alt="asset" />
                        <div className="card-body">
                            <h5 className="card-title">Basic</h5>
                            <h6>150 $</h6>
                            <p className="card-text">You can access limitted categories </p>
                            <StripeCheckout
                                token={onToken}
                                name="Multiverse Basic"
                                currency='INR'
                                amount={15000}
                                stripeKey="pk_test_51LGQ4pSBgnkYPqr565vhWIVW4Qpk1z0gzPInii0nWu2v708GjMPT3iAZx05X7tCfIYAEzSGk6ybRCZbUaCwbQep900Djgcnoxj"
                            />
                        </div>
                    </div>
                    {/* <!-- card2 --> */}
                    <div className="card ">
                        <img src={cardimg} className="card-img-top" alt="asset" />
                        <img src={paymentImg} className="card-img-top" alt="asset" />
                        <div className="card-body">
                            <h5 className="card-title">Standard</h5>
                            <h6>200 $</h6>
                            <p className="card-text">You can access more categories</p>
                            {/* <Link to="/payment" className="btn ">Next</Link> */}
                            <StripeCheckout
                                token={onToken}
                                name="Multiverse Standard"
                                currency='INR'
                                amount={20000}
                                stripeKey="pk_test_51LGQ4pSBgnkYPqr565vhWIVW4Qpk1z0gzPInii0nWu2v708GjMPT3iAZx05X7tCfIYAEzSGk6ybRCZbUaCwbQep900Djgcnoxj"
                            />
                        </div>
                    </div>

                    {/* <!-- card-3 --> */}
                    <div className="card ">
                        <img src={cardimg} className="card-img-top" alt="asset" />
                        <img src={paymentImg} className="card-img-top" alt="asset" />
                        <div className="card-body">
                            <h5 className="card-title">Premium</h5>
                            <h6>300 $</h6>
                            <p className="card-text">You can enjoy whatever you want</p>
                            {/* <Link to="/payment" className="btn ">Next</Link> */}
                            <StripeCheckout
                                token={onToken}
                                name="Multiverse Premium"
                                currency='INR'
                                amount={30000}
                                stripeKey="pk_test_51LGQ4pSBgnkYPqr565vhWIVW4Qpk1z0gzPInii0nWu2v708GjMPT3iAZx05X7tCfIYAEzSGk6ybRCZbUaCwbQep900Djgcnoxj"
                            />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default membership;