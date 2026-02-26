import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-display font-bold mb-4">Top Gun Aviation</h3>
            <p className="text-sm leading-relaxed max-w-xs text-slate-400">
              Premier aviation consultancy providing expert auditing, manual development and amendments, and CAA application services.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+27783954987" className="hover:text-primary transition-colors">+27 78 395 4987</a>
              </li>
              <li>
                <a href="mailto:info@topgunaviation.co.za" className="hover:text-primary transition-colors">info@topgunaviation.co.za</a>
              </li>
              <li className="text-slate-500 text-xs mt-4">Top Gun Aviation (Pty) Ltd</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => setShowPrivacy(true)}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="button-privacy-policy"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Top Gun Aviation (Pty) Ltd. All rights reserved.</p>
        </div>
      </div>

      <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
        <DialogContent className="sm:max-w-2xl max-h-[85vh] p-0">
          <DialogHeader className="px-6 pt-6 pb-0">
            <DialogTitle className="text-xl font-display font-bold">TOP GUN AVIATION &ndash; Privacy Policy</DialogTitle>
          </DialogHeader>
          <ScrollArea className="px-6 pb-6 max-h-[70vh]">
            <div className="prose prose-sm prose-slate max-w-none pt-4 space-y-6">
              <p className="text-sm text-muted-foreground">
                <strong>Effective Date:</strong> 09 February 2026<br />
                <strong>Last Updated:</strong> 09 February 2026
              </p>

              <p>
                TOP GUN AVIATION (PTY) LTD respects your privacy and is committed to protecting your personal information in accordance with the Protection of Personal Information Act, 4 of 2013 (&ldquo;POPIA&rdquo;).
              </p>
              <p>
                This Privacy Policy explains how we collect, use, store, and share your personal information when you use our website and services.
              </p>

              <h3 className="text-base font-bold text-slate-900">1. Who We Are</h3>
              <p>
                TOP GUN AVIATION is a training and compliance service provider to the aviation industry. Our principal place of business is in South Africa. For queries regarding this policy, contact us at:{" "}
                <a href="mailto:info@topgunaviation.co.za" className="text-primary hover:underline">info@topgunaviation.co.za</a>
              </p>

              <h3 className="text-base font-bold text-slate-900">2. Information We Collect</h3>
              <p>We collect and process the following personal information:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Identification &amp; Contact Details:</strong> Full name, contact number, email address.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, interaction with the site (collected via cookies or analytics tools).</li>
              </ul>

              <h3 className="text-base font-bold text-slate-900">3. How We Use Your Information</h3>
              <p>We use your personal information to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Register your enquiry and contact you.</li>
                <li>Improve our website, services, and customer experience.</li>
                <li>Comply with legal and regulatory obligations.</li>
              </ul>

              <h3 className="text-base font-bold text-slate-900">4. Legal Basis for Processing</h3>
              <p>We process your information on the following lawful bases:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your consent (where applicable, e.g., for marketing).</li>
                <li>Contractual necessity (to fulfil our services).</li>
                <li>Legal obligation (to comply with applicable laws).</li>
                <li>Legitimate interest, such as fraud prevention or improving our services.</li>
              </ul>

              <h3 className="text-base font-bold text-slate-900">5. Sharing Your Information</h3>
              <p>We may share your personal information with:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Third-party service providers who assist with payments, data hosting, verification, or analytics; bound by confidentiality and data protection obligations.</li>
                <li>Regulatory authorities, where required by law.</li>
              </ul>
              <p>We do not sell your personal information.</p>

              <h3 className="text-base font-bold text-slate-900">6. Data Security</h3>
              <p>
                We implement reasonable technical and organisational safeguards to protect your personal information from loss, misuse, or unauthorised access, in line with POPIA requirements.
              </p>

              <h3 className="text-base font-bold text-slate-900">7. Your Rights</h3>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access the personal information we hold about you.</li>
                <li>Request correction or deletion of inaccurate or outdated information.</li>
                <li>Object to or restrict certain forms of processing.</li>
                <li>Withdraw consent (where applicable).</li>
                <li>Lodge a complaint with the Information Regulator at{" "}
                  <a href="mailto:complaints.IR@justice.gov.za" className="text-primary hover:underline">complaints.IR@justice.gov.za</a>.
                </li>
              </ul>

              <h3 className="text-base font-bold text-slate-900">8. Retention of Information</h3>
              <p>
                We retain personal information only for as long as necessary to fulfil the purposes outlined in this policy or to comply with legal requirements (e.g. recordkeeping under financial regulations).
              </p>

              <h3 className="text-base font-bold text-slate-900">9. Cookies</h3>
              <p>
                We may use cookies and similar technologies to enhance site performance and user experience. You may disable cookies in your browser settings, but this may affect functionality.
              </p>

              <h3 className="text-base font-bold text-slate-900">10. Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. Any significant changes will be communicated on our website or directly via email, where appropriate.
              </p>

              <h3 className="text-base font-bold text-slate-900">11. Contact Us</h3>
              <p>
                For privacy-related queries or to exercise your rights under POPIA, contact us at:{" "}
                <a href="mailto:info@topgunaviation.co.za" className="text-primary hover:underline">info@topgunaviation.co.za</a>
              </p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
