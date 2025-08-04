import React from "react"

function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col p-5">
                    <img src="/media/images/largestBroker.svg" alt="Largest Broker" />
                </div>
                <div className="col p-5 mt-5">
                    <h1>largest stoke broker in India</h1>
                    <p className="mb-5">2+ million clients contribute to over 15% of all retail order volumes in India daily in traiding and investing in:</p>
                    <div className="row">
                        <div className="col">
                            <ul>
                                <li><p>Futires and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col">
                        <ul>
                                <li><p>Stocks and IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" style={{width:"90%"}} />
                </div>
            </div>
        </div>
    );
}

export default Awards;