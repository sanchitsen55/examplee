const Footer = () => {
  const sections = [
    { title: "About Aussizz", items: ["About us", "Web Stories", "Blog", "Events", "E-book"] },
    { title: "Education", items: ["Study in Australia", "Study in Canada", "Study in New Zealand", "Study in USA", "Study in UK"] },
    { title: "Migration", items: ["Employer Sponsored Visa", "Business Visa", "General Skilled Migration", "Skill Work Regional (Provisional)", "Partner Visa", "Parent Visa"] },
    { title: "Coaching & Offerings", items: ["PTE Online Coaching", "IELTS Coaching", "Get My Policy", "PTE Voucher - India", "Nursing Program"] },
    { title: "Other Links", items: ["Privacy Policy", "Terms & Conditions", "Code of Condut"] },
    { title: "", items: ["/"] },
  ];

  return (
    <footer className="bg-light text-dark py-5 px-4 w-100">
      <div className="container">
        <div className="row">
          {sections.map((section, index) => (
            <div key={index} className="col-12 col-md-4 col-lg-2 text-md-left mb-4">
              {section.title && <h5 className="fw-bold mb-3">{section.title}</h5>}
              {section.items.map((item, idx) => (
                item !== "/" ? (
                  <p key={idx} className="footer-link">{item}</p>
                ) : (
                  <img key={idx} src="/assets/img/footer/ICFF Acccredited.png" alt="Footer Image" className="w-30 mx-auto" />
                )
              ))}
            </div>
          ))}
        </div>
      </div>

      <hr />
      <p className="text-center mt-4">© 2025 Aussizz. All rights reserved.</p>

      {/* Bootstrap Classes for Hover & Transition */}
      <style>
        {`
          .footer-link {
            color: black;
            cursor: pointer;
            transition: color 0.3s ease-in-out, transform 0.1s ease-in-out;
          }
          .footer-link:hover {
            color: red !important;
            transform: translateX(5px);
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
