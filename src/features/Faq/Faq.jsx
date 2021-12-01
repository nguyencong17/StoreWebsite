import React from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import './Faq.scss'

function Faq(props) {
    const namePage = "Câu Hỏi";
    return (
        <div style={{marginTop: '96px'}}>
        <Banner namePage={namePage}/>
        <div className="container" style={{marginTop: '60px'}}>
        <div className="row">
            <div className="col-md-12 col-sm-12 ">
                <p>
                    <a className="btn btn-question" data-toggle="collapse" href="#contentId1" aria-expanded="false"
                        aria-controls="contentId">
                        How will my order be delivered to me?
                    </a>
                </p>
                <div className="collapse answer" id="contentId1">
                    <strong>Answer : </strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui official.</p>

                </div>
            </div>

            <div className="col-md-12 col-sm-12 col-12">

                <p>
                    <a className="btn btn-question" data-toggle="collapse" href="#contentId2" aria-expanded="false"
                        aria-controls="contentId">
                        what do I need to know?
                    </a>
                </p>
                <div className="collapse answer" id="contentId2">
                    <strong>Answer : </strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui official.</p>

                </div>
            </div>

            <div className="col-md-12 col-sm-12 col-12">

                <p>
                    <a className="btn btn-question" data-toggle="collapse" href="#contentId3" aria-expanded="false"
                        aria-controls="contentId">
                        How will I know if order is placed successfully?
                    </a>
                </p>
                <div className="collapse answer" id="contentId3">
                    <strong>Answer : </strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui official.</p>

                </div>
            </div>

            <div className="col-md-12 col-sm-12 col-12">

                <p>
                    <a className="btn btn-question" data-toggle="collapse" href="#contentId4" aria-expanded="false"
                        aria-controls="contentId">
                        How do I check the status of my order?
                    </a>
                </p>
                <div className="collapse answer" id="contentId4">
                    <strong>Answer : </strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui official.</p>

                </div>
            </div>

            <div className="col-md-12 col-sm-12 col-12">

                <p>
                    <a className="btn btn-question" data-toggle="collapse" href="#contentId5" aria-expanded="false"
                        aria-controls="contentId">
                        Can I cancel my order?
                    </a>
                </p>
                <div className="collapse answer" id="contentId5">
                    <strong>Answer : </strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui official.</p>

                </div>
            </div>

            <div className="col-md-12 col-sm-12 col-12">

                <p>
                    <a className="btn btn-question" data-toggle="collapse" href="#contentId6" aria-expanded="false"
                        aria-controls="contentId">
                        Do you allow exchanges?
                    </a>
                </p>
                <div className="collapse answer" id="contentId6">
                    <strong>Answer : </strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui official.</p>

                </div>
            </div>

            <div className="col-md-12 col-sm-12 col-12">

                <p>
                    <a className="btn btn-question" data-toggle="collapse" href="#contentId7" aria-expanded="false"
                        aria-controls="contentId">
                        What are the shipping charges?
                    </a>
                </p>
                <div className="collapse answer" id="contentId7">
                    <strong>Answer : </strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui official.</p>

                </div>
            </div>


        </div>
    </div>
    </div>
    );
}

export default Faq;