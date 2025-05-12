"use client";
import Link from "next/link";
import { Shield, Lock, FileText } from "lucide-react";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function PoliciesPage() {
  const searchParams = useSearchParams();
  const targetSection = searchParams.get("section");

  const termSection = useRef(null);
  const privacySection = useRef(null);

  function handleTerm() {
    termSection.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  function handlePrivacy() {
    privacySection.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  useEffect(function () {
    if (targetSection && targetSection === "terms")
      termSection.current.scrollIntoView({
        behavior: "smooth",
      });
    if (targetSection && targetSection === "privacy")
      privacySection.current.scrollIntoView({
        behavior: "smooth",
      });
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto py-16 px-4 md:px-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="size-8 lg:size-10 text-primary" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              AstuteInfo Policies
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Our commitment to transparency, security, and ethical business
            practices
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              type="button"
              className="text-base md:text-lg bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-md flex
                items-center gap-2 transition-colors hover:cursor-pointer"
              onClick={handleTerm}
            >
              <FileText className="size-4 md:size-5" />
              <span>Terms of Service</span>
            </button>
            <button
              type="button"
              className="text-base md:text-lg bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-md flex
                items-center gap-2 transition-colors hover:cursor-pointer"
              onClick={handlePrivacy}
            >
              <Lock className="size-4 md:size-5" />
              <span>Privacy Policy</span>
            </button>
          </div>
        </div>
      </section>

      {/* Terms of Service Section */}
      <section className="py-16 px-4 md:px-6 scroll-mt-20" ref={termSection}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-2 rounded-full">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              ASTUTEINFO INC. - TERMS OF SERVICE
            </h2>
          </div>
          <div className="text-sm md:text-base text-gray-500 mb-6">
            Effective Date: May 8, 2025
          </div>

          <div
            className="prose prose-gray prose-base md:prose-lg prose-a:text-primary
              prose-a:no-underline prose-a:hover:underline prose-a:hover:underline-offset-2
              max-w-none"
          >
            <p className="text-gray-700">
              Welcome to AstuteInfo Inc. Please read these Terms of Service
              {` ("Terms")`} carefully before using our websites, AI platforms,
              and any associated services (collectively, the {`"Services"`}). By
              accessing or using our Services, you agree to be bound by these
              Terms.
            </p>

            <ol className="space-y-6 mt-8">
              <li>
                <h3>Acceptance of Terms</h3>
                <p>
                  By using our Services, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and our
                  Privacy Policy.
                </p>
              </li>

              <li>
                <h3>Eligibility</h3>
                <p>
                  You must be at least 18 years old to use our Services. By
                  using our Services, you represent and warrant that you have
                  the legal capacity to enter into these Terms.
                </p>
              </li>

              <li>
                <h3>Use of Services</h3>
                <p>
                  You agree to use our Services only for lawful purposes and in
                  accordance with these Terms. You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    Use the Services in any manner that violates any applicable
                    laws or regulations.
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any part of the
                    Services.
                  </li>
                  <li>
                    Interfere with or disrupt the integrity or performance of
                    the Services.
                  </li>
                </ul>
              </li>

              <li>
                <h3>Account Responsibilities</h3>
                <p>
                  You are responsible for maintaining the confidentiality of
                  your account credentials and for all activities that occur
                  under your account.
                </p>
              </li>

              <li>
                <h3>Intellectual Property</h3>
                <p>
                  All content, features, and functionality of the Services,
                  including software, text, graphics, logos, and AI models, are
                  owned by AstuteInfo Inc. and are protected by international
                  copyright and trademark laws.
                </p>
              </li>

              <li>
                <h3>Limitation of Liability</h3>
                <p>
                  To the fullest extent permitted by law, AstuteInfo Inc. shall
                  not be liable for any indirect, incidental, special, or
                  consequential damages arising out of or related to your use of
                  the Services.
                </p>
              </li>

              <li>
                <h3>Changes to Terms</h3>
                <p>
                  We reserve the right to modify these Terms at any time.
                  Continued use of the Services constitutes your acceptance of
                  any revised Terms.
                </p>
              </li>

              <li>
                <h3>Governing Law</h3>
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of the State of Delaware, United States.
                </p>
              </li>

              <li>
                <h3>Contact Us</h3>
                <p>
                  For questions or concerns regarding these Terms, please
                  contact:{" "}
                  <a href="mailto:legal@astuteinfo.com">legal@astuteinfo.com</a>
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section
        className="py-16 px-4 md:px-6 bg-gray-50 scroll-mt-20"
        ref={privacySection}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-secondary/10 p-2 rounded-full">
              <Lock className="h-6 w-6 text-secondary" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              ASTUTEINFO INC. - PRIVACY POLICY
            </h2>
          </div>
          <div className="text-sm md:text-base text-gray-500 mb-6">
            Effective Date: May 8, 2025
          </div>

          <div
            className="prose prose-gray prose-base md:prose-lg prose-a:text-secondary
              prose-a:no-underline prose-a:hover:underline prose-a:hover:underline-offset-2
              max-w-none"
          >
            <p className="text-gray-700">
              AstuteInfo Inc. respects your privacy and is committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information.
            </p>

            <ol className="space-y-6 mt-8">
              <li>
                <h3>Information We Collect</h3>
                <p>We collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    <strong>Personal Data:</strong> Name, email address,
                    company, job title, and contact details.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> IP address, browser type,
                    operating system, access times, and pages visited.
                  </li>
                  <li>
                    <strong>AI Usage Logs:</strong> Data inputs and queries
                    submitted to our AI platforms.
                  </li>
                </ul>
              </li>

              <li>
                <h3>How We Use Your Information</h3>
                <p>We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>To provide and maintain our Services</li>
                  <li>To improve our platforms and develop new features</li>
                  <li>To communicate with users and respond to inquiries</li>
                  <li>To enforce our Terms of Service</li>
                </ul>
              </li>

              <li>
                <h3>Sharing of Information</h3>
                <p>
                  We do not sell or rent your personal information. We may share
                  data with trusted third parties who help us operate our
                  Services, subject to confidentiality agreements.
                </p>
              </li>

              <li>
                <h3>Data Retention</h3>
                <p>
                  We retain personal data as long as necessary to fulfill the
                  purposes outlined in this policy unless a longer retention
                  period is required by law.
                </p>
              </li>

              <li>
                <h3>Your Rights</h3>
                <p>
                  You have the right to access, correct, or delete your personal
                  data. Please contact us at{" "}
                  <a href="mailto:privacy@astuteinfo.com">
                    privacy@astuteinfo.com
                  </a>{" "}
                  for requests.
                </p>
              </li>

              <li>
                <h3>Data Security</h3>
                <p>
                  We implement technical and organizational measures to protect
                  your data from unauthorized access, use, or disclosure.
                </p>
              </li>

              <li>
                <h3>International Data Transfers</h3>
                <p>
                  Your information may be processed and stored in countries
                  outside of your own. We comply with applicable data protection
                  laws regarding international transfers.
                </p>
              </li>

              <li>
                <h3>{`Children's`} Privacy</h3>
                <p>
                  Our Services are not intended for individuals under 18 years
                  of age.
                </p>
              </li>

              <li>
                <h3>Updates to this Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time. Changes
                  will be posted on this page with an updated effective date.
                </p>
              </li>

              <li>
                <h3>Contact Us</h3>
                <p>
                  For privacy-related inquiries, contact:{" "}
                  <a href="mailto:privacy@astuteinfo.com">
                    privacy@astuteinfo.com
                  </a>
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Common questions about our policies and compliance
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                How often are your policies updated?
              </h3>
              <p className="text-base md:text-lg text-gray-600">
                We review our policies quarterly and update them as needed to
                reflect changes in our services, legal requirements, or industry
                best practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                How will I be notified of policy changes?
              </h3>
              <p className="text-base md:text-lg text-gray-600">
                We will notify users of material changes to our policies via
                email and/or through notices on our website. All changes will be
                posted with an updated effective date.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                How do you handle data from different countries?
              </h3>
              <p className="text-base md:text-lg text-gray-600">
                We comply with applicable data protection laws in all
                jurisdictions where we operate. For international data
                transfers, we implement appropriate safeguards such as Standard
                Contractual Clauses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                Can I request a copy of my data?
              </h3>
              <p className="text-base md:text-lg text-gray-600">
                Yes, you can request access to your personal data by contacting
                our privacy team at{" "}
                <a
                  href="mailto:privacy@astuteinfo.com"
                  className="text-secondary hover:underline font-semibold"
                >
                  privacy@astuteinfo.com
                </a>
                . We will respond to your request within the timeframe required
                by applicable law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Have Questions About Our Policies?
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-8">
              Our team is here to help you understand our terms, privacy
              practices, and compliance standards
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="contactUs"
                className="text-base md:text-lg bg-white text-gray-900 hover:bg-gray-100 px-6 py-3
                  rounded-md font-medium transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="supportCentre"
                className="text-base md:text-lg bg-transparent border border-white hover:bg-white/10 px-6
                  py-3 rounded-md font-medium transition-colors"
              >
                Visit Support Center
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
