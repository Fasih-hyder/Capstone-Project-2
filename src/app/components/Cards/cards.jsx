import React from 'react'
import './card.css';
import proprty1 from "../../assests/first.svg";
import proprty2 from "../../assests/seacond.svg";
import proprty3 from "../../assests/Third.svg";
import proprty4 from "../../assests/Fourth.svg";
import proprty5 from "../../assests/Fifth.svg";
import proprty6 from "../../assests/Sixth.svg";
import Car1 from "../../assests/CARS1.svg";
import bath from "../../assests/Bathtub.svg";
import arow from "../../assests/ArrowsOut.svg";
import jane from "../../assests/motu.svg";
import bane from "../../assests/boy.svg";
import gane from "../../assests/girl.svg";
import heart from "../../assests/Share.svg";
import Image from 'next/image'
function cards() {
    return (
        <div>
            <br /><br />
            <div className='container'>
                <div className='row'>

                    <div className='col-md-4 dip'>
                        <div className='position-relative '>
                            <Image src={proprty1} className='img-fluid' />

                            <button class="btn  btn-color btn-primary position-absolute top-0 start-0 mx-2 mt-2"
                                type="submit">Hot offer</button>
                            <button class="btn  btn-color btn-primary position-absolute top-0 start-50 translate-middle-x mt-2 "
                                type="submit">Sale</button>

                        </div>

                        <h5 className='mt-3'>
                            92 ALLIUM PLACE, ORLANDO FL <br /> 32827
                        </h5>
                        <b>
                            <p className='color'>
                                $ 590,693
                            </p>
                        </b>
                        <div className='d-flex gap-3'>
                            <Image src={Car1} className='img-fluid' /><p className='mt-3'>4</p>
                            <Image src={bath} className='img-fluid' /><p className='mt-3'>4</p>
                            <Image src={arow} className='img-fluid' /><p className='mt-3 '>2,096.00 ft</p>
                        </div>
                        <hr />
                        <div className='d-flex'>
                            <Image src={jane} className='img-fluid' /><p className='mt-3'>Jenny Wilson</p>
                            <Image src={heart} className='img-fluid mx-5' />
                        </div>
                    </div>
                    <div className='col-md-4 dip'>
                        <Image src={proprty2} className='img-fluid' />
                        <h5 className='mt-3'>
                            92 ALLIUM PLACE, ORLANDO FL <br /> 32827
                        </h5>
                        <b>
                            <p className='color'>
                                $ 590,693
                            </p>
                        </b>
                        <div className='d-flex gap-3'>
                            <Image src={Car1} className='img-fluid' /><p className='mt-3'>4</p>
                            <Image src={bath} className='img-fluid' /><p className='mt-3'>4</p>
                            <Image src={arow} className='img-fluid' /><p className='mt-3 '>2,096.00 ft</p>
                        </div>
                        <hr />
                        <div className='d-flex'>
                            <Image src={bane} className='img-fluid' /><p className='mt-3'>Jenny Wilson</p>
                            <Image src={heart} className='img-fluid mx-3' />
                        </div>
                    </div>
                    <div className='col-md-4 dip'>
                        <Image src={proprty3} className='img-fluid' />
                        <h5 className='mt-3'>
                            92 ALLIUM PLACE, ORLANDO FL <br /> 32827
                        </h5>
                        <b>
                            <p className='color'>
                                $ 590,693
                            </p>
                        </b>
                        <div className='d-flex gap-3'>
                            <Image src={Car1} className='img-fluid' /><p className='mt-3'>4</p>
                            <Image src={bath} className='img-fluid' /><p className='mt-3'>4</p>
                            <Image src={arow} className='img-fluid' /><p className='mt-3 '>2,096.00 ft</p>
                        </div>
                        <hr />
                        <div className='d-flex'>
                            <Image src={gane} className='img-fluid' /><p className='mt-3'>Jenny Wilson</p>
                            <Image src={heart} className='img-fluid mx-5' />
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className='container'>
                <div className='row'>

                    <div className='col-md-4'>
                        <Image src={proprty4} className='img-fluid' />
                        <h5 className='mt-3'>
                            92 ALLIUM PLACE, ORLANDO FL <br /> 32827
                        </h5>
                        <b>
                            <p className='color'>
                                $ 590,693
                            </p>
                        </b>
                        <div className='d-flex gap-3'>
                            <Image src={Car1} className='img-fluid' /><p className='mt-3'>4</p>
                            <Image src={bath} className='img-fluid' /><p className='mt-3'>4</p>
                            <Image src={arow} className='img-fluid' /><p className='mt-3 '>2,096.00 ft</p>
                        </div>
                        <hr />
                        <div className='d-flex'>
                            <Image src={jane} className='img-fluid' /><p className='mt-3'>Jenny Wilson</p>
                            <Image src={heart} className='img-fluid mx-5' />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <Image src={proprty5} className='img-fluid' />
                        <h5 className='mt-3'>
                            92 ALLIUM PLACE, ORLANDO FL <br /> 32827
                        </h5>
                        <b>
                            <p className='color'>
                                $ 590,693
                            </p>
                        </b>
                        <div className='d-flex gap-3'>
                            <Image src={Car1} className='img-fluid' /><p className='mt-3'>4</p>
                            <Image src={bath} className='img-fluid' /><p className='mt-3'>4</p>
                            <Image src={arow} className='img-fluid' /><p className='mt-3 '>2,096.00 ft</p>
                        </div>
                        <hr />
                        <div className='d-flex'>
                            <Image src={bane} className='img-fluid' /><p className='mt-3'>Jenny Wilson</p>
                            <Image src={heart} className='img-fluid mx-3' />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <Image src={proprty6} className='img-fluid' />
                        <h5 className='mt-3'>
                            92 ALLIUM PLACE, ORLANDO FL <br /> 32827
                        </h5>
                        <b>
                            <p className='color'>
                                $ 590,693
                            </p>
                        </b>
                        <div className='d-flex gap-3'>
                            <Image src={Car1} className='img-fluid' /><p className='mt-3'>4</p>
                            <Image src={bath} className='img-fluid' /><p className='mt-3'>4</p>
                            <Image src={arow} className='img-fluid' /><p className='mt-3 '>2,096.00 ft</p>
                        </div>
                        <hr />
                        <div className='d-flex'>
                            <Image src={gane} className='img-fluid' /><p className='mt-3'>Jenny Wilson</p>
                            <Image src={heart} className='img-fluid mx-5' />
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className='text-center'>
                <button class="btn border-secondary-subtle btn-color btn-primary mb-5 mt-5 " type="submit">Load more listing</button>
            </div>

        </div>
    )
}

export default cards
