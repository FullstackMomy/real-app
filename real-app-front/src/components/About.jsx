import PageHeader from "./common/pageHeader";

const About = () => {
  return (
    <PageHeader
      title={
        <>
          <i className="bi bi-card-text me-2"></i>bizCard4U
        </>
      }
      description="bizCard4U is an easy-to-use application with which you can create the ultimate business card. You can create new business cards, as well as delete and edit them as you wish. You can also add a picture and design easily and quickly. Register now. It's free!"
    />
  );
};

export default About;
