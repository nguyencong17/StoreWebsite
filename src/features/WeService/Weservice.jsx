import React from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import './weservice.scss';

function Weservice(props) {
    const namePage = "Dịch Vụ";

    return (
        <section id="service" className="content" style={{marginTop: '96px'}}>
        <Banner namePage={namePage}/>
        <div className="content__main">
            <div className="content__main--ar1">
                <div className="ar1">
                    <div className="ar1__left">
                        <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/service/1.jpg" alt=""/>
                    </div>
                    <div className="ar1__right">
                        <h2 className="ar1__right--title">
                            Disconnect from the outer world
                        </h2>
                        <p className="ar1__right--des">
                            Vestibulum et velit nec augue pretium suscipit id ut ligula.
                            Vestibulum ornare ex ultricies nisl feugiat ultricies.
                            Duis ac congue lacus. Nunc risus ante, dignissim at vehicula ac,
                            sagittis id risus. ClassNclassName aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos. Suspendisse ipsum nisl,
                            vestibulum vitae libero id, euismod sodales enim.
                        </p>
                        <ul className="ar1__right--extension">
                            <li><i className="fas fa-caret-right"></i>Quality Engineering</li>
                            <li><i className="fas fa-caret-right"></i>Grand Experience</li>
                        </ul>
                        <ul>
                            <li><i className="fas fa-caret-right"></i>Bass Perfectionist</li>
                            <li><i className="fas fa-caret-right"></i>Perfect Companion</li>
                        </ul>
                    </div>


                </div>


            </div>

            <div className="content__main--ar2">
                <div className="ar2">
                    <h2 className="ar2--title6">
                        Your Ears Deserve The Best
                    </h2>
                    <div className="ar2__wrap">
                        <i className="fas fa-glasses"></i>
                        <div className="ar2__wrap--left">

                            <h3>Get the right gadget for your music</h3>
                            <p>Donec ipsum neque, tincidunt non auctor at,
                                finibus vitae nunc. Fusce sagittis, tortor sed viverra elementum,
                                odio odio tempus quam, ac imperdiet dui lacus eu magna. Suspendisse a
                                sapien nulla. Nullam lacinia ullamcorper quam, id suscipit elit fringilla
                                vitae consectetur adipiscing elit.</p>
                        </div>
                        <i className="fas fa-headphones"></i>
                        <div className="ar2__wrap--right">
                            <h3>Keep your ears safe and music loud</h3>
                            <p>Donec ipsum neque, tincidunt non auctor at,
                                finibus vitae nunc. Fusce sagittis, tortor sed viverra elementum,
                                odio odio tempus quam, ac imperdiet dui lacus eu magna. Suspendisse a
                                sapien nulla. Nullam lacinia ullamcorper quam, id suscipit elit fringilla
                                vitae consectetur adipiscing elit.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="content__main--ar3">
                <div className="ar3">
                    <div className="ar3__left">
                        <h2>Customized Headphones</h2>
                        <p>Maecenas a ipsum volutpat, pharetra massa non, facilisis dolor. Fusce sodales nibh maximus
                            lacinia iaculis. Donec quis malesuada lectus. Donec et tincidunt elit, vel euismod urna.
                            Maecenas eget ligula a velit bibendum faucibus sit amet ac lorem. Phasellus vel turpis
                            placerat, ornare mi sed, facilisis lorem. Etiam viverra maximus turpis id varius. Fusce
                            hendrerit felis ac neque varius.

                        </p>
                        <div className="ar3__select">
                            <div className="ar3__select-one select">
                                <h3>01. Select Color</h3>
                                <p>Cras pretium risus ac tempor ultrices. Phasellus pretium ex odio, sit amet ultricies
                                    nulla accumsan quis.</p>
                            </div>
                            <div className="ar3__select-two select">
                                <h3>02. Add Text</h3>
                                <p>Aenean in sapien eu nisi porta ullamcorper a nec quam. Pellentesque enim dolor,
                                    varius vitae tincidunt.</p>
                            </div>
                            <div className="ar3__select-three select">
                                <h3>03. Add Art</h3>
                                <p>Suspendisse eget risus mollis, molestie lectus vel, pellentesque nulla. Aliquam
                                    feugiat lacus in sem fermentum</p>
                            </div>
                            <div className="ar3__select-four select">
                                <h3>04. Upload</h3>
                                <p>Morbi quis venenatis nisl, eget iaculis felis. Nam pretium vehicula velit. Sed non
                                    enim elit suspendisse aliquet.</p>
                            </div>
                        </div>
                    </div>

                    <div className="ar3__right">
                        <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/service/2.jpg" alt=""/>
                    </div>

                </div>

            </div>
        </div>
    </section>
    );
}

export default Weservice;