import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router-dom";

import i18n from "./lib/i18n";
import FullPage from "./components/FullPage";

const LanguageWrapper = ({ children }) => {
  const { lang } = useParams(); // Get the language parameter from the URL

  useEffect(() => {
    if (["en", "es"].includes(lang)) {
      i18n.changeLanguage(lang);
    } else {
      i18n.changeLanguage("en"); // Fallback to English
    }
  }, [lang]);

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect the root URL to a default language */}
        <Route path="/" element={<Navigate to="/en" />} />

        {/* Language-based routes */}
        <Route
          path="/:lang/*"
          element={
            <LanguageWrapper>
              <Routes>
                <Route path="/" element={<FullPage />} />
              </Routes>
            </LanguageWrapper>
          }
        />
        {/* Fallback URL */}
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
