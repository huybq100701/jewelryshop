import { ArrowBackIosNew, ArrowCircleLeft, ArrowCircleRight, ArrowForwardIos, FlashOn, GppGood, Star, ThumbUpAlt } from '@mui/icons-material'
import './GioiThieu.scss'
import { banChay } from '../../data/banChay'
import { DeCu } from '../../data/DeCu'
import { PhoBien } from '../../data/PhoBien'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const GioiThieu = () => {
    const [banChaySlide, setBanChaySlide] = useState(0)
    const [deCuSlide, setDeCuSlide] = useState(0)
    const bamNextSlide = () => {
        if (banChaySlide < banChay.length - 1) {
            setBanChaySlide(banChaySlide + 1)
        }
        else if (banChaySlide === banChay.length - 1) {
            setBanChaySlide(0)
        }
    }
    const bamPrevSlide = () => {
        if (banChaySlide > 0) {
            setBanChaySlide(banChaySlide - 1)
        }
        else if (banChaySlide === 0) {
            setBanChaySlide(banChay.length - 1)
        }
    }


    return (
        <>
            <div className="GioiThieu">
                <div className="GioiThieu__trai">
                    <img src={process.env.PUBLIC_URL + "GioiThieu.jpg"} alt="" />
                    <div className="GioiThieu__trai--thongtin">
                        <h1>Back Friday</h1>
                        <p>Giảm giá upto 50%</p>
                        
                        <div className="GioiThieu__trai--thongtin--button">
                            <Link to="/theloai">

                                <button className='GioiThieu__trai--buttonXemdanhsach'>Xem danh sách</button>
                            </Link>
                            <Link to="/theloai">

                                <button className='GioiThieu__trai--buttonXemthem'>Xem thêm</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="GioiThieu__phai">
                    {
                        banChay.map((item, index) => {
                            return (
                                <div className={index === banChaySlide ? "GioiThieu__phai--sildeitem active" : "GioiThieu__phai--sildeitem"} key={index}>
                                    <img src={item.imgUrl || process.env.PUBLIC_URL + item.imgUrl} alt="" className='GioiThieu__phai--sildeitem--hinhnen' />
                                    <div className="Gioithieu__phai--sildeitem--thongtin">
                                        <h1>Bán chạy</h1>
                                        <p>Giảm giá tuần này</p>
                                        <img src={item.imgUrl} alt="" />
                                        <h2>{item.name}</h2>
                                        <h3>{item.tags.toString()}</h3>
                                        <Link to="/theloai">

                                            <button className='GioiThieu__phai--sildeitem--giatien' >{item.gia} VNĐ</button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <ArrowCircleLeft className='GioiThieu__phai--icon trai' onClick={bamPrevSlide} />
                    <ArrowCircleRight className='GioiThieu__phai--icon phai' onClick={bamNextSlide} />
                </div>
            </div>
            <div className="GioiThieu__duoi">
                <div className="GioiThieu__duoi__tren">
                    <div className="GioiThieu__duoi--item">
                        <div className="GioiThieu__duoi__item__trai">
                            <FlashOn className='GioiThieu__duoi__item__trai--icon' />
                        </div>
                        <div className="GioiThieu__duoi__item__phai">
                            <h1>Giao Hàng Nhanh</h1>
                            <p>Giao hàng tận nơi trong vòng 3h</p>
                        </div>
                    </div>
                    <div className="GioiThieu__duoi--item">
                        <div className="GioiThieu__duoi__item__trai">
                            <GppGood className='GioiThieu__duoi__item__trai--icon' />
                        </div>
                        <div className="GioiThieu__duoi__item__phai">
                            <h1>Bảo Mật Cao</h1>
                            <p>Đảm bảo an toàn trong các giao dịch của khách hàng</p>
                        </div>
                    </div>
                    <div className="GioiThieu__duoi--item">
                        <div className="GioiThieu__duoi__item__trai">
                            <ThumbUpAlt className='GioiThieu__duoi__item__trai--icon' />
                        </div>
                        <div className="GioiThieu__duoi__item__phai">
                            <h1>Chất Lượng Tốt Nhất</h1>
                            <p>Đảm bảo hàng chính hãng, giá tốt, chất lượng tốt</p>
                        </div>
                    </div>
                    <div className="GioiThieu__duoi--item">
                        <div className="GioiThieu__duoi__item__trai">
                            <Star className='GioiThieu__duoi__item__trai--icon' />
                        </div>
                        <div className="GioiThieu__duoi__item__phai">
                            <h1>Đánh Giá Cao</h1>
                            <p>Được đánh giá cao bởi nhiều khách hàng và người tiêu dùng.</p>
                        </div>
                    </div>
                </div>
                <div className="GioiThieu__duoi__duoi">
                    <div className="GioiThieu__duoi__duoi--decu"
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL + '/DeCu.png'})`
                        }}
                    >
                        <h1>Trang sức Đề Cử Cho Bạn</h1>
                        <p>Những món đồ được thiết kế tinh sảo.</p>
                        <div className="GioiThieu__duoi__duoi--decu--slide">
                            {DeCu.map((item, index) => {
                                return (
                                    <div className="GioiThieu__duoi__duoi--decu--silde--item"
                                        key={index}
                                    >
                                        <img src={process.env.PUBLIC_URL + item.imgUrl || item.imgUrl} alt="" />
                                    </div>
                                )
                            })}

                        </div>
                        <Link to="/theloai" className='GioiThieu__duoi__duoi--decu--button' >Xem Thêm </Link>
                    </div>
                    <div className="GioiThieu__duoi__duoi--phobien"
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL + '/PhoBien.png'})`
                        }}
                    >
                        <h1>Trang sức Đề Cử Cho Bạn</h1>
                        <p>Những món đồ được thiết kế tinh sảo.</p>
                        <div className="GioiThieu__duoi__duoi--phobien--slide">
                            {PhoBien.map((item, index) => {
                                return (
                                    <div className="GioiThieu__duoi__duoi--phobien--silde--item" key={index}>
                                        <img src={process.env.PUBLIC_URL + item.imgUrl || item.imgUrl} alt="" />
                                    </div>
                                )
                            })}

                        </div>
                        <Link to="/theloai" className='GioiThieu__duoi__duoi--phobien--button' >Xem Thêm</Link>                    </div>
                </div>
            </div>
        </>
    )
}

export default GioiThieu