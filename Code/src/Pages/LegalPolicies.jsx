import React, { useState, useEffect } from "react";
import { FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

const LegalPolicies = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  // Scroll to top when switching tabs for better UX
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    <div className="w-full font-sans bg-[#002845] min-h-screen">
      {/* ================= MAIN CONTENT SECTION ================= */}
      {/* Adjusted padding top to perfectly clear the fixed navbar, matching ContactUs */}
      <section className="relative w-full min-h-[100svh] flex flex-col items-center bg-gradient-to-b from-[#002845] via-[#004270] to-[#001f36] pt-32 md:pt-36 lg:pt-40 xl:pt-48 pb-12 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-0">
        {/* Subtle background glowing orbs for premium feel */}
        <div className="absolute top-0 left-0 w-[300px] lg:w-[400px] xl:w-[500px] h-[300px] lg:h-[400px] xl:h-[500px] bg-[#00a3e0] rounded-full opacity-10 blur-[100px] lg:blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[300px] lg:w-[400px] xl:w-[500px] h-[300px] lg:h-[400px] xl:h-[500px] bg-[#f47920] rounded-full opacity-10 blur-[100px] lg:blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full bg-white rounded-2xl lg:rounded-3xl xl:rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden h-fit border border-sky-100/20">
          {/* Tabs Header */}
          <div className="flex flex-col md:flex-row border-b border-gray-200">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`flex-1 py-4 lg:py-5 xl:py-6 px-6 text-base lg:text-lg xl:text-xl font-bold tracking-tight transition-all duration-300 ${
                activeTab === "privacy"
                  ? "bg-[#f47920] text-white shadow-inner"
                  : "bg-gray-50/50 text-gray-500 hover:bg-gray-50 hover:text-[#004270]"
              }`}>
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("terms")}
              className={`flex-1 py-4 lg:py-5 xl:py-6 px-6 text-base lg:text-lg xl:text-xl font-bold tracking-tight transition-all duration-300 ${
                activeTab === "terms"
                  ? "bg-[#f47920] text-white shadow-inner"
                  : "bg-gray-50/50 text-gray-500 hover:bg-gray-50 hover:text-[#004270]"
              }`}>
              Terms & Conditions
            </button>
          </div>

          {/* Tab Content Container */}
          <div className="p-6 md:p-10 lg:p-12 xl:p-16 text-gray-800 space-y-8 lg:space-y-12">
            {/* ----------------- PRIVACY POLICY ----------------- */}
            {activeTab === "privacy" && (
              <div className="animate-fadeIn">
                <div className="mb-8 lg:mb-12 border-b border-gray-200 pb-6 lg:pb-8">
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-[#004270] mb-2 xl:mb-4">
                    Privacy Policy
                  </h2>
                  <p className="text-xs lg:text-sm xl:text-base text-gray-500 font-semibold tracking-wide uppercase">
                    Effective Date: [08/03/2026] <br />
                    Website: https://cmplibe.com
                  </p>
                </div>

                <div className="space-y-10 lg:space-y-12 xl:space-y-16">
                  <section>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#f47920] mb-3 lg:mb-4 flex items-center gap-3">
                      <span className="bg-[#004270] text-white w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-sm lg:text-base shrink-0 shadow-md">
                        1
                      </span>
                      Our Commitment to Your Privacy
                    </h3>
                    <p className="leading-relaxed text-sm lg:text-base xl:text-lg text-gray-600 font-medium">
                      At cMPLiBe, we value your trust and are dedicated to
                      safeguarding your personal information. This Privacy
                      Policy outlines our practices regarding the collection,
                      use, protection, and management of your data when you
                      interact with our website and services. Your continued use
                      of cmplibe.com indicates your acceptance of the terms
                      outlined in this policy.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#f47920] mb-3 lg:mb-4 flex items-center gap-3">
                      <span className="bg-[#004270] text-white w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-sm lg:text-base shrink-0 shadow-md">
                        2
                      </span>
                      Data We Collect
                    </h3>
                    <div className="space-y-5 lg:space-y-6 xl:space-y-8 ml-4 lg:ml-5 border-l-2 border-gray-200 pl-4 lg:pl-6">
                      <div>
                        <h4 className="text-base lg:text-lg xl:text-xl font-bold tracking-tight text-[#004270]">
                          Personal Identifiers
                        </h4>
                        <ul className="list-disc pl-5 mt-2 text-sm lg:text-base xl:text-lg text-gray-600 font-medium space-y-1 lg:space-y-2">
                          <li>Full name and contact details</li>
                          <li>Email address and phone number</li>
                          <li>
                            Professional information (organization, job title)
                          </li>
                          <li>Geographic location (city/region)</li>
                          <li>
                            Information provided through contact forms and
                            registrations
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-base lg:text-lg xl:text-xl font-bold tracking-tight text-[#004270]">
                          Educational & Program Data
                        </h4>
                        <ul className="list-disc pl-5 mt-2 text-sm lg:text-base xl:text-lg text-gray-600 font-medium space-y-1 lg:space-y-2">
                          <li>Course enrollment and participation records</li>
                          <li>Learning progress and assessment results</li>
                          <li>Feedback and evaluation responses</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-base lg:text-lg xl:text-xl font-bold tracking-tight text-[#004270]">
                          Website Analytics & Technical Information
                        </h4>
                        <ul className="list-disc pl-5 mt-2 text-sm lg:text-base xl:text-lg text-gray-600 font-medium space-y-1 lg:space-y-2">
                          <li>Internet Protocol (IP) addresses</li>
                          <li>
                            Website navigation patterns and page interactions
                          </li>
                          <li>Cookies and similar tracking technologies</li>
                          <li>Session duration and user preferences</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#f47920] mb-3 lg:mb-4 flex items-center gap-3">
                      <span className="bg-[#004270] text-white w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-sm lg:text-base shrink-0 shadow-md">
                        3
                      </span>
                      How We Utilize Your Information
                    </h3>
                    <p className="mb-4 lg:mb-6 text-sm lg:text-base xl:text-lg text-gray-600 font-medium">
                      Your data enables us to:
                    </p>
                    <div className="space-y-5 lg:space-y-6 xl:space-y-8 ml-4 lg:ml-5 border-l-2 border-gray-200 pl-4 lg:pl-6">
                      <div>
                        <h4 className="text-base lg:text-lg xl:text-xl font-bold tracking-tight text-[#004270]">
                          Service Delivery
                        </h4>
                        <ul className="list-disc pl-5 mt-2 text-sm lg:text-base xl:text-lg text-gray-600 font-medium space-y-1 lg:space-y-2">
                          <li>
                            Process inquiries and provide customer support
                          </li>
                          <li>
                            Facilitate program enrollment and course delivery
                          </li>
                          <li>
                            Generate progress reports for educational partners
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-base lg:text-lg xl:text-xl font-bold tracking-tight text-[#004270]">
                          Platform Enhancement
                        </h4>
                        <ul className="list-disc pl-5 mt-2 text-sm lg:text-base xl:text-lg text-gray-600 font-medium space-y-1 lg:space-y-2">
                          <li>
                            Analyze website performance and user engagement
                          </li>
                          <li>
                            Improve functionality and user interface design
                          </li>
                          <li>Develop new features and educational content</li>
                          <li>Ensure platform security and prevent misuse</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-base lg:text-lg xl:text-xl font-bold tracking-tight text-[#004270]">
                          Communication & Engagement
                        </h4>
                        <ul className="list-disc pl-5 mt-2 text-sm lg:text-base xl:text-lg text-gray-600 font-medium space-y-1 lg:space-y-2">
                          <li>
                            Send program updates and important notifications
                          </li>
                          <li>
                            Share relevant educational resources and
                            opportunities
                          </li>
                          <li>Provide technical support and assistance</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 lg:mt-8 p-4 lg:p-5 xl:p-6 bg-sky-50 rounded-xl border border-sky-100">
                      <p className="text-[#004270] text-sm lg:text-base xl:text-lg font-medium leading-relaxed">
                        <strong className="font-bold">Important Note:</strong>{" "}
                        We never sell, rent, or trade your personal information
                        to third parties for commercial purposes.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#f47920] mb-3 lg:mb-4 flex items-center gap-3">
                      <span className="bg-[#004270] text-white w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-sm lg:text-base shrink-0 shadow-md">
                        4
                      </span>
                      Information Sharing Practices
                    </h3>
                    <p className="mb-4 lg:mb-6 text-sm lg:text-base xl:text-lg text-gray-600 font-medium">
                      We may share your information in the following
                      circumstances:
                    </p>
                    <div className="space-y-5 lg:space-y-6 xl:space-y-8 ml-4 lg:ml-5 border-l-2 border-gray-200 pl-4 lg:pl-6 text-gray-600 font-medium">
                      <div>
                        <h4 className="text-base lg:text-lg xl:text-xl font-bold tracking-tight text-[#004270]">
                          Educational Partners
                        </h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1 lg:space-y-2 text-sm lg:text-base xl:text-lg">
                          <li>Academic institutions offering our programs</li>
                          <li>
                            Corporate training partners (with explicit consent)
                          </li>
                          <li>
                            Certification bodies for credential verification
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-base lg:text-lg xl:text-xl font-bold tracking-tight text-[#004270]">
                          Service Providers
                        </h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1 lg:space-y-2 text-sm lg:text-base xl:text-lg">
                          <li>Cloud hosting and data storage services</li>
                          <li>Email communication platforms</li>
                          <li>
                            Website analytics and performance monitoring tools
                          </li>
                          <li>Payment processing services (when applicable)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-base lg:text-lg xl:text-xl font-bold tracking-tight text-[#004270]">
                          Legal Compliance
                        </h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1 lg:space-y-2 text-sm lg:text-base xl:text-lg">
                          <li>Government authorities when required by law</li>
                          <li>
                            Legal proceedings or regulatory investigations
                          </li>
                          <li>Protection of our rights, property, or safety</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-6 lg:mt-8 text-sm lg:text-base xl:text-lg text-gray-600 font-medium italic">
                      All third-party partners are contractually obligated to
                      maintain strict confidentiality and implement appropriate
                      data protection measures.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#f47920] mb-3 lg:mb-4 flex items-center gap-3">
                      <span className="bg-[#004270] text-white w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-sm lg:text-base shrink-0 shadow-md">
                        5
                      </span>
                      Cookies & Tracking Technologies
                    </h3>
                    <div className="space-y-4 lg:space-y-5 ml-4 lg:ml-5 border-l-2 border-gray-200 pl-4 lg:pl-6 text-sm lg:text-base xl:text-lg text-gray-600 font-medium">
                      <p>
                        <strong className="font-bold text-[#004270]">
                          Essential Cookies:
                        </strong>{" "}
                        Website functionality, user authentication, form data
                        retention, security, and fraud prevention.
                      </p>
                      <p>
                        <strong className="font-bold text-[#004270]">
                          Analytics Cookies:
                        </strong>{" "}
                        Website traffic analysis, user behavior insights,
                        performance optimization, and content personalization.
                      </p>
                      <p className="text-xs lg:text-sm xl:text-base bg-gray-50 p-4 lg:p-5 rounded-xl border border-gray-100">
                        <em className="font-semibold text-gray-700">
                          Managing Preferences:
                        </em>{" "}
                        You can control cookie settings through your browser
                        options. Note that disabling certain cookies may affect
                        website functionality.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#f47920] mb-3 lg:mb-4 flex items-center gap-3">
                      <span className="bg-[#004270] text-white w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-sm lg:text-base shrink-0 shadow-md">
                        6
                      </span>
                      Data Retention Policy
                    </h3>
                    <ul className="list-disc pl-6 ml-4 lg:ml-5 text-sm lg:text-base xl:text-lg text-gray-600 font-medium space-y-2 lg:space-y-3">
                      <li>
                        <strong className="font-bold text-[#004270]">
                          Active Users:
                        </strong>{" "}
                        Throughout your engagement with our services
                      </li>
                      <li>
                        <strong className="font-bold text-[#004270]">
                          Legal Requirements:
                        </strong>{" "}
                        As mandated by applicable regulations
                      </li>
                      <li>
                        <strong className="font-bold text-[#004270]">
                          Business Needs:
                        </strong>{" "}
                        For reporting and compliance purposes (typically 3-7
                        years)
                      </li>
                      <li>
                        <strong className="font-bold text-[#004270]">
                          Inactive Accounts:
                        </strong>{" "}
                        Up to 2 years before secure deletion or anonymization
                      </li>
                    </ul>
                    <p className="mt-4 lg:mt-6 text-sm lg:text-base xl:text-lg text-gray-600 font-medium">
                      Upon account closure or data deletion requests, we will
                      securely remove personal information while maintaining
                      anonymized data for analytical purposes where legally
                      permissible.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#f47920] mb-3 lg:mb-4 flex items-center gap-3">
                      <span className="bg-[#004270] text-white w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-sm lg:text-base shrink-0 shadow-md">
                        7
                      </span>
                      Your Privacy Rights
                    </h3>
                    <div className="space-y-4 lg:space-y-6 ml-4 lg:ml-5 border-l-2 border-gray-200 pl-4 lg:pl-6 text-sm lg:text-base xl:text-lg text-gray-600 font-medium">
                      <p>
                        Depending on your location, you may exercise rights for{" "}
                        <strong className="font-bold text-[#004270]">
                          Access & Transparency
                        </strong>{" "}
                        (requesting copies and info) and{" "}
                        <strong className="font-bold text-[#004270]">
                          Data Control
                        </strong>{" "}
                        (updating, deleting, withdrawing consent, or objecting
                        to processing).
                      </p>
                      <div className="bg-sky-50 p-5 lg:p-6 rounded-xl border border-sky-100 text-[#004270]">
                        <p>
                          <strong className="font-bold">
                            Exercising Your Rights:
                          </strong>{" "}
                          Contact our Privacy Team at{" "}
                          <strong className="font-bold">
                            cmplibe.compliance@gmail.com
                          </strong>{" "}
                          with your full name, specific request, and identity
                          verification. We aim to respond within 30 days.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#f47920] mb-3 lg:mb-4 flex items-center gap-3">
                      <span className="bg-[#004270] text-white w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-sm lg:text-base shrink-0 shadow-md">
                        8
                      </span>
                      Policy Updates & Contact
                    </h3>
                    <p className="text-sm lg:text-base xl:text-lg text-gray-600 font-medium mb-6 lg:mb-8">
                      We may periodically update this policy to reflect changes
                      in practices or legal requirements. Updated policies will
                      be posted here with a new effective date.
                    </p>

                    {/* Contact Block */}
                    <div className="bg-[#002845] text-white p-6 lg:p-8 xl:p-10 rounded-2xl shadow-lg border border-sky-800/50">
                      <h4 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#f47920] mb-5 lg:mb-6">
                        Contact Our Privacy Team
                      </h4>
                      <ul className="space-y-4 lg:space-y-5 text-sm lg:text-base xl:text-lg text-sky-100/90 font-medium">
                        <li className="flex items-center gap-3 lg:gap-4">
                          <div className="bg-white/10 p-2 rounded-full shrink-0">
                            <FaEnvelope className="text-[#f47920] text-base lg:text-xl" />
                          </div>
                          <span>
                            <strong className="text-white font-bold">
                              Email:
                            </strong>{" "}
                            cmplibe.compliance@gmail.com
                          </span>
                        </li>
                        <li className="flex items-center gap-3 lg:gap-4">
                          <div className="bg-white/10 p-2 rounded-full shrink-0">
                            <FaGlobe className="text-[#f47920] text-base lg:text-xl" />
                          </div>
                          <span>
                            <strong className="text-white font-bold">
                              Website:
                            </strong>{" "}
                            https://cmplibe.com
                          </span>
                        </li>
                        <li className="flex items-start gap-3 lg:gap-4">
                          <div className="bg-white/10 p-2 rounded-full shrink-0 mt-1">
                            <FaMapMarkerAlt className="text-[#f47920] text-base lg:text-xl" />
                          </div>
                          <span className="leading-relaxed">
                            <strong className="text-white font-bold">
                              Address:
                            </strong>{" "}
                            19, 2nd Cross, 2nd Main Rd, NS Palya, BTM Layout,
                            Bengaluru, Karnataka 560076
                          </span>
                        </li>
                      </ul>
                      <p className="mt-6 lg:mt-8 text-xs lg:text-sm xl:text-base text-sky-300/80 border-t border-white/10 pt-4 lg:pt-5 font-medium">
                        Response Time: We aim to respond to all privacy
                        inquiries within 48 hours during business days.
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            )}

            {/* ----------------- TERMS & CONDITIONS ----------------- */}
            {activeTab === "terms" && (
              <div className="animate-fadeIn">
                <div className="mb-8 lg:mb-12 border-b border-gray-200 pb-6 lg:pb-8">
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-[#004270] mb-2 xl:mb-4">
                    Terms & Conditions
                  </h2>
                  <p className="text-xs lg:text-sm xl:text-base text-gray-500 font-semibold tracking-wide uppercase">
                    Effective Date: [08/03/2026] <br />
                    Website: https://cmplibe.com
                  </p>
                </div>

                <div className="space-y-10 lg:space-y-12 xl:space-y-16">
                  <section>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#f47920] mb-3 lg:mb-4 flex items-center gap-3">
                      <span className="bg-[#004270] text-white w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-sm lg:text-base shrink-0 shadow-md">
                        1
                      </span>
                      Agreement to Terms
                    </h3>
                    <p className="leading-relaxed text-sm lg:text-base xl:text-lg text-gray-600 font-medium mb-4 lg:mb-5">
                      By accessing, browsing, or using cmplibe.com and its
                      associated services, you enter into a legally binding
                      agreement with cMPLiBe. These Terms govern your entire
                      interaction with our platform, including website access,
                      program enrollment, service utilization, and content
                      consumption.
                    </p>
                    <ul className="list-disc pl-6 ml-4 lg:ml-5 text-sm lg:text-base xl:text-lg text-gray-600 font-medium space-y-2">
                      <li>
                        <strong className="font-bold text-[#004270]">
                          Acceptance:
                        </strong>{" "}
                        Continued use of cmplibe.com constitutes your full
                        acceptance of these Terms.
                      </li>
                      <li>
                        <strong className="font-bold text-[#004270]">
                          Rejection:
                        </strong>{" "}
                        If you disagree with any provision, you must immediately
                        cease using the website and services.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#f47920] mb-3 lg:mb-4 flex items-center gap-3">
                      <span className="bg-[#004270] text-white w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-sm lg:text-base shrink-0 shadow-md">
                        2
                      </span>
                      Acceptable Use & User Responsibilities
                    </h3>
                    <div className="space-y-5 lg:space-y-6 xl:space-y-8 ml-4 lg:ml-5 border-l-2 border-gray-200 pl-4 lg:pl-6 text-gray-600 font-medium">
                      <div>
                        <h4 className="text-base lg:text-lg xl:text-xl font-bold tracking-tight text-[#004270]">
                          Your Obligations
                        </h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1 lg:space-y-2 text-sm lg:text-base xl:text-lg">
                          <li>
                            Provide truthful, accurate, and complete
                            information.
                          </li>
                          <li>
                            Use the platform exclusively for lawful
                            educational/professional purposes.
                          </li>
                          <li>
                            Maintain confidentiality of account credentials.
                          </li>
                          <li>
                            Comply with all applicable local, national, and
                            international laws.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-base lg:text-lg xl:text-xl font-bold tracking-tight text-[#004270]">
                          Prohibited Activities
                        </h4>
                        <p className="mt-2 text-sm lg:text-base xl:text-lg leading-relaxed">
                          You must not engage in content violations (copying,
                          reverse-engineering), platform misuse (unauthorized
                          access, uploading malware, scraping), or
                          fraudulent/illegal activities (misrepresentation,
                          money laundering, harassment).
                        </p>
                        <p className="mt-3 lg:mt-4 text-red-600/90 font-semibold text-sm lg:text-base xl:text-lg bg-red-50 p-3 lg:p-4 rounded-lg border border-red-100">
                          Violation of these guidelines may result in immediate
                          account suspension and legal liability.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#f47920] mb-3 lg:mb-4 flex items-center gap-3">
                      <span className="bg-[#004270] text-white w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-sm lg:text-base shrink-0 shadow-md">
                        3
                      </span>
                      Intellectual Property Rights
                    </h3>
                    <p className="text-sm lg:text-base xl:text-lg text-gray-600 font-medium leading-relaxed mb-3 lg:mb-4">
                      All intellectual property on cmplibe.com is the exclusive
                      property of cMPLiBe, including website design, course
                      materials, brand assets, methodologies, code, and Learning
                      Currency (LC) systems.
                    </p>
                    <p className="text-sm lg:text-base xl:text-lg text-gray-600 font-medium leading-relaxed">
                      <strong className="font-bold text-[#004270]">
                        Limited License:
                      </strong>{" "}
                      We grant a non-exclusive, non-transferable, revocable
                      license to access content for personal, educational
                      purposes. You may not republish, resell, modify, or use
                      our content for commercial purposes without authorization.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#f47920] mb-3 lg:mb-4 flex items-center gap-3">
                      <span className="bg-[#004270] text-white w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-sm lg:text-base shrink-0 shadow-md">
                        4
                      </span>
                      Program Participation & Payments
                    </h3>
                    <div className="space-y-4 lg:space-y-5 ml-4 lg:ml-5 border-l-2 border-gray-200 pl-4 lg:pl-6 text-sm lg:text-base xl:text-lg text-gray-600 font-medium">
                      <p>
                        <strong className="font-bold text-[#004270]">
                          Enrollment:
                        </strong>{" "}
                        You must meet eligibility criteria and provide accurate
                        information. Participation expectations and deadlines
                        must be adhered to.
                      </p>
                      <p>
                        <strong className="font-bold text-[#004270]">
                          Disclaimer:
                        </strong>{" "}
                        Completion of any cMPLiBe program presents continuous
                        opportunities to achieve individual career goals as an
                        early talent. Career opportunities depend on individual
                        effort, market conditions, and employer requirements.
                      </p>
                      <p>
                        <strong className="font-bold text-[#004270]">
                          Payments & Pricing:
                        </strong>{" "}
                        All fees must be paid in full. Pricing is subject to
                        change with advance notice. Fees are generally
                        non-refundable after enrollment confirmation, except in
                        cases of program cancellation or technical failures.
                        Refunds must be requested within 15 days.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#f47920] mb-3 lg:mb-4 flex items-center gap-3">
                      <span className="bg-[#004270] text-white w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-sm lg:text-base shrink-0 shadow-md">
                        5
                      </span>
                      Limitation of Liability & Disclaimers
                    </h3>
                    <p className="text-sm lg:text-base xl:text-lg text-gray-600 font-medium leading-relaxed mb-4 lg:mb-5">
                      cmplibe.com is provided "AS-IS" without warranties of any
                      kind regarding completeness, service availability, or
                      specific learning outcomes.
                    </p>
                    <div className="bg-gray-50 p-5 lg:p-6 xl:p-8 rounded-xl text-gray-600 font-medium text-sm lg:text-base xl:text-lg border border-gray-200">
                      <p className="mb-3 lg:mb-4">
                        To the maximum extent permitted by law, cMPLiBe shall
                        not be liable for:
                      </p>
                      <ul className="list-disc pl-5 space-y-1.5 lg:space-y-2">
                        <li>
                          Indirect & consequential damages (lost profits, data,
                          goodwill).
                        </li>
                        <li>
                          Platform-related issues (downtime, unauthorized access
                          caused by third parties).
                        </li>
                        <li>
                          User actions (career decisions, financial losses).
                        </li>
                      </ul>
                      <p className="mt-4 lg:mt-6 font-bold text-[#004270]">
                        You agree to indemnify and hold harmless cMPLiBe from
                        claims arising from your violation of these Terms or
                        misuse of the platform.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#f47920] mb-3 lg:mb-4 flex items-center gap-3">
                      <span className="bg-[#004270] text-white w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-sm lg:text-base shrink-0 shadow-md">
                        6
                      </span>
                      Termination & Governing Law
                    </h3>
                    <p className="text-sm lg:text-base xl:text-lg text-gray-600 font-medium leading-relaxed mb-3 lg:mb-4">
                      <strong className="font-bold text-[#004270]">
                        Termination:
                      </strong>{" "}
                      cMPLiBe reserves the right to suspend or terminate access
                      without advance notice for terms violations, behavioral
                      issues, or suspicious activity.
                    </p>
                    <p className="text-sm lg:text-base xl:text-lg text-gray-600 font-medium leading-relaxed">
                      <strong className="font-bold text-[#004270]">
                        Governing Law:
                      </strong>{" "}
                      These Terms are governed by the laws of India. Any
                      disputes shall be subject to the exclusive jurisdiction of
                      courts located in Bengaluru, Karnataka, India.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#f47920] mb-3 lg:mb-4 flex items-center gap-3">
                      <span className="bg-[#004270] text-white w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-sm lg:text-base shrink-0 shadow-md">
                        7
                      </span>
                      Contact & Additional Provisions
                    </h3>
                    <p className="text-sm lg:text-base xl:text-lg text-gray-600 font-medium leading-relaxed mb-6 lg:mb-8">
                      These Terms & Conditions, along with our Privacy Policy,
                      constitute the entire agreement between you and cMPLiBe.
                      We reserve the right to modify these Terms at any time.
                    </p>

                    {/* Contact Block */}
                    <div className="bg-[#002845] text-white p-6 lg:p-8 xl:p-10 rounded-2xl shadow-lg border border-sky-800/50">
                      <h4 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#f47920] mb-5 lg:mb-6">
                        cMPLiBe Support Team
                      </h4>
                      <ul className="space-y-4 lg:space-y-5 text-sm lg:text-base xl:text-lg text-sky-100/90 font-medium">
                        <li className="flex items-center gap-3 lg:gap-4">
                          <div className="bg-white/10 p-2 rounded-full shrink-0">
                            <FaEnvelope className="text-[#f47920] text-base lg:text-xl" />
                          </div>
                          <span>
                            <strong className="text-white font-bold">
                              General Support:
                            </strong>{" "}
                            cmplifutureadi@gmail.com
                          </span>
                        </li>
                        <li className="flex items-center gap-3 lg:gap-4">
                          <div className="bg-white/10 p-2 rounded-full shrink-0">
                            <FaEnvelope className="text-[#f47920] text-base lg:text-xl" />
                          </div>
                          <span>
                            <strong className="text-white font-bold">
                              Legal/Compliance:
                            </strong>{" "}
                            cmplibe.compliance@gmail.com
                          </span>
                        </li>
                        <li className="flex items-start gap-3 lg:gap-4">
                          <div className="bg-white/10 p-2 rounded-full shrink-0 mt-1">
                            <FaMapMarkerAlt className="text-[#f47920] text-base lg:text-xl" />
                          </div>
                          <span className="leading-relaxed">
                            <strong className="text-white font-bold">
                              Address:
                            </strong>{" "}
                            19, 2nd Cross, 2nd Main Rd, NS Palya, BTM Layout,
                            Bengaluru, Karnataka 560076
                          </span>
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPolicies;
