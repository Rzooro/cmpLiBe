import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const ContactUs = () => {
  const location = useLocation();

  // Extract category from router state if navigating from a specific service page
  const initialCategory = location.state?.category || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: initialCategory,
    organization: "",
    city: "",
    message: "",
  });

  // UI States for premium submission experience
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // If the user navigates directly to /contact and then clicks a service link, update the state
  useEffect(() => {
    if (location.state?.category) {
      setFormData((prev) => ({ ...prev, category: location.state.category }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network latency for a premium "processing" feel
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);

    // Future backend call logic:
    /*
    try {
      const response = await fetch("https://api.yourdomain.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if(response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
    */
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: initialCategory,
      organization: "",
      city: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  // Dynamic placeholder logic based on selected category
  const getMessagePlaceholder = () => {
    switch (formData.category) {
      case "Student":
        return "Tell us about your learning goals or career aspirations...";
      case "College/Institute":
        return "Tell us about your institution's talent or training needs...";
      case "Corporate":
        return "Tell us about your hiring requirements or partnership goals...";
      case "Employee":
        return "How can we assist you with your professional development?";
      default:
        return "Tell us a little bit about your requirements...";
    }
  };

  const showOrganization =
    formData.category === "College/Institute" ||
    formData.category === "Corporate";

  return (
    <div className="w-full font-sans bg-[#002845]">
      {/* ================= UNIFIED FULL-SCREEN LAYOUT ================= */}
      <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center bg-gradient-to-b from-[#002845] via-[#004270] to-[#001f36] pt-32 md:pt-36 lg:pt-40 xl:pt-48 pb-12 lg:pb-16 xl:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-0">
        {/* Subtle background glowing orbs */}
        <div className="absolute top-0 left-0 w-[300px] lg:w-[400px] xl:w-[500px] h-[300px] lg:h-[400px] xl:h-[500px] bg-[#00a3e0] rounded-full opacity-10 blur-[100px] lg:blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[300px] lg:w-[400px] xl:w-[500px] h-[300px] lg:h-[400px] xl:h-[500px] bg-[#f47920] rounded-full opacity-10 blur-[100px] lg:blur-[150px] pointer-events-none"></div>

        {/* ===== HEADER ===== */}
        <div className="relative z-10 text-center text-white mb-6 lg:mb-8 xl:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight drop-shadow-xl">
            Contact Us
          </h1>
          <div className="w-16 md:w-20 lg:w-24 h-1 lg:h-1.5 bg-[#f47920] mt-3 lg:mt-5 mx-auto rounded-full shadow-[0_0_15px_rgba(244,121,32,0.5)]"></div>
          <p className="mt-3 lg:mt-4 xl:mt-6 text-sm md:text-base lg:text-lg xl:text-xl text-sky-200 font-medium max-w-2xl mx-auto px-4">
            Let’s build the future of learning and talent together.
          </p>
        </div>

        {/* ===== MAIN CARD ===== */}
        <div className="relative z-10 w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl bg-white rounded-2xl lg:rounded-3xl xl:rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col lg:flex-row border border-sky-100/20 min-h-[600px]">
          {/* ----- LEFT SIDE: Contact Form or Success State ----- */}
          <div className="w-full lg:w-[55%] xl:w-3/5 p-6 md:p-8 lg:p-10 xl:p-16 bg-white flex flex-col justify-center relative">
            {/* SUCCESS STATE */}
            <div
              className={`absolute inset-0 p-6 md:p-10 xl:p-16 flex flex-col items-center justify-center text-center bg-white transition-all duration-700 ease-in-out ${
                isSubmitted
                  ? "opacity-100 z-20 translate-y-0"
                  : "opacity-0 -z-10 translate-y-8 pointer-events-none"
              }`}>
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6 lg:mb-8 shadow-inner">
                <FaCheckCircle className="text-5xl lg:text-6xl text-emerald-500 drop-shadow-sm" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[#004270] mb-4">
                Message Sent!
              </h2>
              <p className="text-base lg:text-lg text-gray-500 mb-8 lg:mb-10 font-medium max-w-md">
                Thank you for reaching out. We have received your inquiry and
                our team will get back to you shortly.
              </p>
              <button
                onClick={handleReset}
                className="text-sm lg:text-base font-bold text-[#f47920] border-2 border-[#f47920] px-6 py-2.5 rounded-full hover:bg-[#f47920] hover:text-white transition-all duration-300">
                Send another message
              </button>
            </div>

            {/* FORM STATE */}
            <div
              className={`transition-all duration-700 ease-in-out ${
                isSubmitted
                  ? "opacity-0 -z-10 -translate-y-8 pointer-events-none"
                  : "opacity-100 z-10 translate-y-0"
              }`}>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-[#004270] mb-2">
                Send us a message
              </h2>
              <p className="text-xs lg:text-sm xl:text-base text-gray-500 mb-6 lg:mb-8 font-medium">
                Fill out the form below and our team will get back to you
                promptly.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 lg:space-y-4 xl:space-y-5">
                {/* Name Row */}
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-[10px] lg:text-xs xl:text-sm font-semibold tracking-widest uppercase text-[#004270]/80 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 lg:py-2.5 xl:py-3 rounded-lg xl:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f47920]/30 focus:border-[#f47920] transition-all bg-gray-50/50 hover:bg-gray-50 text-sm xl:text-base font-medium text-gray-800"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-4 xl:gap-5">
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="text-[10px] lg:text-xs xl:text-sm font-semibold tracking-widest uppercase text-[#004270]/80 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 lg:py-2.5 xl:py-3 rounded-lg xl:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f47920]/30 focus:border-[#f47920] transition-all bg-gray-50/50 hover:bg-gray-50 text-sm xl:text-base font-medium text-gray-800"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-[10px] lg:text-xs xl:text-sm font-semibold tracking-widest uppercase text-[#004270]/80 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 lg:py-2.5 xl:py-3 rounded-lg xl:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f47920]/30 focus:border-[#f47920] transition-all bg-gray-50/50 hover:bg-gray-50 text-sm xl:text-base font-medium text-gray-800"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Category & City Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-4 xl:gap-5">
                  <div className="flex flex-col">
                    <label
                      htmlFor="category"
                      className="text-[10px] lg:text-xs xl:text-sm font-semibold tracking-widest uppercase text-[#004270]/80 mb-1.5">
                      I am Enquiring as a:
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 lg:py-2.5 xl:py-3 rounded-lg xl:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f47920]/30 focus:border-[#f47920] transition-all bg-gray-50/50 hover:bg-gray-50 text-sm xl:text-base font-medium text-gray-700 cursor-pointer appearance-none">
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="Student">Student</option>
                      <option value="College/Institute">
                        College/Institute
                      </option>
                      <option value="Corporate">Corporate</option>
                      <option value="Employee">Employee</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="city"
                      className="text-[10px] lg:text-xs xl:text-sm font-semibold tracking-widest uppercase text-[#004270]/80 mb-1.5">
                      City / Location
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 lg:py-2.5 xl:py-3 rounded-lg xl:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f47920]/30 focus:border-[#f47920] transition-all bg-gray-50/50 hover:bg-gray-50 text-sm xl:text-base font-medium text-gray-800"
                      placeholder="Bengaluru"
                    />
                  </div>
                </div>

                {/* Conditional Organization Row */}
                {showOrganization && (
                  <div className="flex flex-col animate-fadeIn">
                    <label
                      htmlFor="organization"
                      className="text-[10px] lg:text-xs xl:text-sm font-semibold tracking-widest uppercase text-[#004270]/80 mb-1.5">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 lg:py-2.5 xl:py-3 rounded-lg xl:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f47920]/30 focus:border-[#f47920] transition-all bg-gray-50/50 hover:bg-gray-50 text-sm xl:text-base font-medium text-gray-800"
                      placeholder="Company or College Name"
                    />
                  </div>
                )}

                {/* Dynamic Message Field */}
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-[10px] lg:text-xs xl:text-sm font-semibold tracking-widest uppercase text-[#004270]/80 mb-1.5">
                    Message / Requirement
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    required
                    className="w-full px-4 py-2.5 xl:py-3 rounded-lg xl:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f47920]/30 focus:border-[#f47920] transition-all bg-gray-50/50 hover:bg-gray-50 text-sm xl:text-base font-medium text-gray-800 resize-none"
                    placeholder={getMessagePlaceholder()}></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full bg-[#f47920] text-white font-semibold text-sm lg:text-base xl:text-lg py-3 lg:py-3.5 xl:py-4 rounded-xl shadow-[0_10px_20px_rgba(244,121,32,0.2)] transition-all duration-300 flex items-center justify-center gap-3 mt-4 lg:mt-6 ${
                    isSubmitting
                      ? "opacity-90 cursor-not-allowed"
                      : "hover:bg-[#d96617] hover:shadow-[0_15px_30px_rgba(244,121,32,0.4)]"
                  }`}>
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <FaPaperPlane className="text-xs lg:text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* ----- RIGHT SIDE: Contact Information ----- */}
          <div className="w-full lg:w-[45%] xl:w-2/5 bg-gradient-to-br from-[#001f36] to-[#002845] p-8 md:p-8 lg:p-10 xl:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#f47920] rounded-full opacity-20 blur-[80px] pointer-events-none"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#00a3e0] rounded-full opacity-20 blur-[80px] pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-8 lg:mb-10 text-white tracking-tight">
                Contact <span className="text-[#f47920]">Information</span>
              </h3>

              <div className="space-y-6 xl:space-y-8">
                {/* Email Info */}
                <div className="flex items-center lg:items-start gap-4 xl:gap-5 group">
                  <div className="bg-white/10 p-3 xl:p-4 rounded-full group-hover:bg-[#f47920] transition-all duration-300 shrink-0">
                    <FaEnvelope className="text-base lg:text-lg xl:text-xl text-white" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[10px] lg:text-xs xl:text-sm text-sky-300/90 font-semibold mb-0.5 uppercase tracking-wider">
                      Email Us
                    </p>
                    <a
                      href="mailto:cmplifutureadi@gmail.com"
                      className="text-sm lg:text-base xl:text-lg font-medium text-white hover:text-[#f47920] transition-colors break-all">
                      cmplifutureadi@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Info */}
                <div className="flex items-center lg:items-start gap-4 xl:gap-5 group">
                  <div className="bg-white/10 p-3 xl:p-4 rounded-full group-hover:bg-[#f47920] transition-all duration-300 shrink-0">
                    <FaPhoneAlt className="text-base lg:text-lg xl:text-xl text-white" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[10px] lg:text-xs xl:text-sm text-sky-300/90 font-semibold mb-0.5 uppercase tracking-wider">
                      Call Us
                    </p>
                    <a
                      href="tel:+918217707976"
                      className="text-sm lg:text-base xl:text-lg font-medium text-white hover:text-[#f47920] transition-colors">
                      +91 8217707976
                    </a>
                  </div>
                </div>

                {/* Address Info */}
                <div className="flex items-start gap-4 xl:gap-5 group">
                  <div className="bg-white/10 p-3 xl:p-4 rounded-full group-hover:bg-[#f47920] transition-all duration-300 shrink-0 mt-1">
                    <FaMapMarkerAlt className="text-base lg:text-lg xl:text-xl text-white" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[10px] lg:text-xs xl:text-sm text-sky-300/90 font-semibold mb-1 uppercase tracking-wider mt-1.5">
                      Office Address
                    </p>
                    <p className="text-xs md:text-sm xl:text-base font-medium leading-relaxed text-sky-50 opacity-90">
                      19, 2nd Cross, 2nd Main, NS Palya, <br />
                      2nd Stage, BTM Layout, <br />
                      Bengaluru, Karnataka - 560076
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Graphic / Branding */}
            <div className="mt-10 lg:mt-12 xl:mt-16 relative z-10 border-t border-white/10 pt-6 lg:pt-8">
              <p className="text-base lg:text-lg xl:text-xl font-bold text-sky-100 italic tracking-wide opacity-90">
                "Where learning is continuous, opportunities thrive."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
