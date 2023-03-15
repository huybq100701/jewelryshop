import "./Footer.scss";
import {
  Email,
  Facebook,
  Group,
  HistoryEdu,
  Instagram,
  LocationOn,
  Diamond,
  Phone,
  StoreMallDirectory,
  Twitter,
  YouTube,
} from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__tren">
        <div className="Footer__tren__item">
          <Group className="Footer__tren__item__icon" />
          <h1>100,701</h1>
          <p>Số lượng người dùng</p>
        </div>
        <div className="Footer__tren__item">
          <Diamond className="Footer__tren__item__icon" />
          <h1>20.000</h1>
          <p>Số lượng sản phẩm</p>
        </div>
        <div className="Footer__tren__item">
          <StoreMallDirectory className="Footer__tren__item__icon" />
          <h1>1,307</h1>
          <p>Số cửa hàng</p>
        </div>
        <div className="Footer__tren__item">
          <HistoryEdu className="Footer__tren__item__icon" />
          <h1>457</h1>
          <p>Số hãng thiết kế</p>
        </div>
      </div>
      <div className="Footer__giua">
        <img src={process.env.PUBLIC_URL + "typeemailbackground.png"} alt="" />
        <h1>
          Đăng ký email ở đây để có thể nhận được thông báo về nhiều sản phẩm
          hấp dẫn
        </h1>
        <div className="Footer__giua__email">
          <input type="text" placeholder="Nhập email của bạn" />
          <div className="Footer__giua__email__nut">Đăng ký</div>
        </div>
      </div>
      <div className="Footer__duoi">
        <div className="Footer__duoi__trai">
          <div className="ThanhMenu__trai--logo">
            <img src={process.env.PUBLIC_URL + "Logo.png"} alt="" />
            <div className="ThanhMenu__trai--ten">
              <h2>Jewelry</h2>
              <p>Jewelry Shop</p>
            </div>
          </div>
          <div className="Footer__duoi__trai__thongtin">
            <p>
              Jewelry Shop là trang web mua bán trang sức online của Công ty
              công nghệ và chất lượng cao Jewelry.
            </p>
          </div>
          <h1>Follow Us</h1>
          <div className="Footer__duoi__trai__mangxahoi">
            <Facebook className="facebook" />
            <YouTube className="youtube" />
            <Twitter className="twiter" />
            <Instagram className="instagram" />
          </div>
        </div>
        <div className="Footer__duoi__giua">
          <div className="Footer__duoi__theloai">
            <h1>Các loại trang sức</h1>
            <div className="Footer__duoi__theloai__item">
              <h1>Bracelet</h1>
              <h1>Chain</h1>
              <h1>Earrings</h1>
              <h1>Medallion</h1>
              <h1>Necklace</h1>
              <h1>Pendant</h1>
              <h1>Ring </h1>
              <h1>Strand of beads</h1>
              <h1>Watch </h1>
            </div>
          </div>
        </div>
        <div className="Footer__duoi__phai">
          <h2>Cửa hàng của chúng tôi</h2>
          <img src={process.env.PUBLIC_URL + "cuahang.jpg"} alt="" />
          <div className="Footer__duoi__diachi">
            <LocationOn />
            <h1>Học viện Công nghệ Bưu chính viễn thông</h1>
          </div>
          <div className="Footer__duoi__sdt">
            <Phone />
            <h1>+84 123456789</h1>
          </div>
          <div className="Footer__duoi__email">
            <Email />
            <h1>jewlryshop@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
