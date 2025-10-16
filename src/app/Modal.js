"use client";

export default function Modal({ show, onClose, language = "DE" }) {
  if (!show) return null;

  const texts = {
    DE: {
      title: "Impressum & Datenschutz",
      imprintTitle: "IMPRESSUM",
      imprintSubTitle: "Angaben gemäß § 5 TMG",
      privacyTitle: "DATENSCHUTZERKLÄRUNG",
      privacyDate: "(Stand: 15. Oktober 2025)",
      privacy: [
        { label: "Verantwortliche Stelle", text: "Siehe Impressum" },
        { label: "Geltungsbereich", text: "Diese Datenschutzerklärung gilt für die App „Numbery“ sowie für die Website des Entwicklers (fabeysn.github.io), auf der die App vorgestellt wird. Sie informiert über Art, Umfang und Zweck der Erhebung, Verarbeitung und Nutzung personenbezogener Daten." },
        { label: "Kontaktaufnahme", text: "Bei einer Kontaktaufnahme per E-Mail, über die App oder die Website werden übermittelte Angaben, wie Name, E-Mail-Adresse und Nachricht, ausschließlich zur Bearbeitung der Anfrage verwendet und nicht an Dritte weitergegeben." },
        { label: "Download und Installation", text: "Beim Herunterladen oder Aktualisieren der App über den Google Play Store erhebt und verarbeitet Google Ireland Limited oder verbundene Google-Unternehmen möglicherweise personenbezogene Daten (z. B. Geräteinformationen, Nutzerkennungen, Zeitpunkt des Downloads). Darauf besteht kein Einfluss seitens des Entwicklers. Weitere Informationen: https://policies.google.com/privacy" },
        { label: "App-Nutzung", text: "Die Nutzung von Numbery ist ohne Angabe personenbezogener Daten möglich. Spielstände, Fortschritte und Einstellungen (z. B. Level, XP, Soundeinstellungen, Challenges) werden ausschließlich lokal auf dem Gerät gespeichert und nicht an den Entwickler übertragen." },
        { label: "Google Play / Google Play Games", text: "Wenn Nutzer ihre Google Play Games-Konten freiwillig verknüpfen, können die Google Play Games Services (z. B. Achievements, Leaderboards) personenbezogene Daten verarbeiten. Die Verarbeitung erfolgt durch Google; der Entwickler erhält keine direkten personenbezogenen Daten. Weitere Informationen: https://policies.google.com/privacy" },
        { label: "Website-Nutzung", text: "Die Nutzung der Website fabeysn.github.io ist ohne Angabe personenbezogener Daten möglich. Die Website wird über GitHub Pages gehostet. GitHub kann dabei bestimmte personenbezogene Daten verarbeiten. Weitere Informationen: https://help.github.com/en/articles/github-privacy-statement" },
        { label: "Berechtigungen", text: "Numbery fordert nur die für den Spielbetrieb erforderlichen Berechtigungen an. Sensible Berechtigungen (Kamera, Mikrofon, Standort, Kontakte) werden nicht benötigt." },
        { label: "Werbung / Tracking", text: "Numbery enthält keine Werbung, kein Tracking und keine Analyse-Tools (z. B. Google Analytics). Sollten zukünftig Analyse- oder Werbe-SDKs integriert werden, wird dies hier kenntlich gemacht." },
        { label: "Rechte der Nutzer", text: "Nutzer haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch sowie Datenübertragbarkeit. Sofern personenbezogene Daten (z. B. per E-Mail) übermittelt wurden, können diese Rechte per E-Mail an contact.fabeysn@gmail.com geltend gemacht werden. Anfragen werden in der Regel binnen 30 Tagen beantwortet." },
        { label: "Beschwerde bei der Aufsichtsbehörde", text: "Beschwerden können bei der zuständigen Datenschutzaufsichtsbehörde eingereicht werden." },
        { label: "Löschung von Daten", text: "Alle lokal gespeicherten Daten (z. B. Spielstände) können jederzeit gelöscht werden, indem die App deinstalliert oder die App-Daten in den Systemeinstellungen zurückgesetzt werden. E-Mail-Korrespondenz wird gelöscht, sobald sie nicht mehr zur Bearbeitung erforderlich ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen." },
        { label: "Keine personenbezogene Daten", text: "Stand: 15. Oktober 2025: Die App, die Website und verwendeten Bibliotheken erheben, speichern oder übertragen keine personenbezogenen Daten." },
        { label: "Änderungen dieser Datenschutzerklärung", text: "Diese Datenschutzerklärung kann bei technischen oder rechtlichen Änderungen angepasst werden. Die jeweils aktuelle Version ist in der App sowie auf der Website und ggf. unter der in der Play Console angegebenen URL einsehbar." },
      ]
    },
    EN: {
      title: "About & Privacy Policy",
      translationNotice: "This is an English translation of the original German privacy policy. In case of any discrepancies, the German version shall prevail.",
      imprintTitle: "ABOUT",
      imprintSubTitle: "",
      privacyTitle: "PRIVACY POLICY",
      privacyDate: "(As of 15 October 2025)",
      privacy: [
        { label: "Responsible Authority", text: "See 'About' section" },
        { label: "About", text: "This privacy policy applies to the “Numbery” app as well as the developer's website (fabeysn.github.io), where the app is presented. It informs users about the type, scope, and purpose of the collection, processing, and use of personal data." },
        { label: "Contact", text: "When contacting via e-mail, through the app or the website, any submitted information such as name, e-mail address, and message will be used exclusively to process the inquiry and will not be shared with third parties." },
        { label: "Download and Installation", text: "When downloading or updating the app via the Google Play Store, Google Ireland Limited or affiliated Google companies may collect personal data (e.g., device information, user identifiers, time of download). The developer has no influence on this. More information: https://policies.google.com/privacy" },
        { label: "App Usage", text: "Numbery can be used without providing personal data. Game progress, achievements, and settings (e.g., level, XP, sound settings, challenges) are stored locally on the device and are not transmitted to the developer." },
        { label: "Google Play / Google Play Games", text: "If users voluntarily link their Google Play Games accounts, the Google Play Games Services (e.g., achievements, leaderboards) may process personal data. This processing is done by Google; the developer does not receive direct personal data from this service. Please refer to Google's privacy policy: https://policies.google.com/privacy" },
        { label: "Website Usage", text: "Using the website fabeysn.github.io is possible without providing personal data. The website is hosted on GitHub Pages. GitHub may process certain personal data in accordance with their privacy policy. Further information: https://help.github.com/en/articles/github-privacy-statement" },
        { label: "Permissions", text: "Numbery only requests permissions required for game functionality. Sensitive permissions (camera, microphone, location, contacts) are not needed." },
        { label: "Advertising / Tracking", text: "Numbery contains no advertising, no tracking, and no analytics tools (e.g., Google Analytics). If any analytics or advertising SDKs are integrated in the future, this will be clearly indicated here." },
        { label: "User Rights", text: "Users have the right to access, correct, delete, restrict processing, object, and data portability. If personal data (e.g., via e-mail) was submitted, users can exercise these rights via e-mail to contact.fabeysn@gmail.com. Requests are usually answered within 30 days." },
        { label: "Complaint to the Supervisory Authority", text: "Complaints can be submitted to the competent data protection supervisory authority." },
        { label: "Data Deletion", text: "All locally stored data (e.g., game progress) can be deleted at any time by uninstalling the app or resetting the app data in system settings. E-mail correspondence is deleted as soon as it is no longer needed and no legal retention obligations apply." },
        { label: "No Personal Data", text: "As of 15 October 2025: The app, the website, and the libraries used do not collect, store, or transmit any personal data." },
        { label: "Changes to this Privacy Policy", text: "This privacy policy may be updated due to technical or legal changes. The current version can be viewed in the app, on the website and, if applicable, under the URL specified in the Play Console." },
      ]
    }
  };

  const t = texts[language];

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-black dark:bg-gray-800 dark:text-white rounded-lg shadow-lg p-6 overflow-y-auto max-h-[80vh] relative"
        style={{ width: '90%', maxWidth: '900px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl mb-2">{t.title}</h2>
        <hr className="mb-4 border-gray-300 dark:border-gray-600" />

        {language === "EN" && t.translationNotice && (
          <p className="mb-4">{t.translationNotice}</p>
        )}

        <p className="text-xl font-bold mb-3">{t.imprintTitle}</p>
        {t.imprintSubTitle && <p className="font-bold mb-2">{t.imprintSubTitle}</p>}
        <p className="whitespace-pre-line mb-6">Fabian Pessel{"\n"}Habsburgerstraße 132, B5.28{"\n"}79104 Freiburg{"\n"}E-Mail: contact.fabeysn@gmail.com</p>
        
        <p className="text-xl sm:text-xl xs:text-lg font-bold mb-3 break-words">{t.privacyTitle}</p>
        <p className="mb-5">{t.privacyDate}</p>
        {t.privacy.map((section, idx) => (
          <div key={idx} className="mb-6">
            <p className="font-bold mb-1">{section.label}</p>
            <p className="whitespace-pre-line">{section.text}</p>
          </div>
        ))}

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
