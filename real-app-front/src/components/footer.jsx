import { FooterNav } from "./footerNav";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#b2bFBE" }}
      className="border-top py-0 text-center"
    >
      <FooterNav />
      <span>
        <i className="bi bi-card-text me-2"></i>bizCard4U
      </span>
      <span className="mx-2">&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
