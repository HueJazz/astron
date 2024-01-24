import React from "react";

const Partners = () => {

    return(
        <div className="custom-px pt-5 custom-max-w mx-auto" id="reviews">
            <div className="flex flex-col">
                <ul className="flex flex-row justify-around items-center bg-white rounded-3xl py-2.5 my-2.5">
                    <li className="p-2.5"><img src={require(".././images/content_heaven.png")}></img></li>
                    <li className="p-2.5"><img src={require(".././images/swisscom.png")}></img></li>
                    <li className="p-2.5"><img src={require(".././images/h-x.png")}></img></li>
                    <li className="p-2.5"><img src={require(".././images/sbt.png")}></img></li>
                </ul>
            </div>
        </div>
    )
}

export default Partners