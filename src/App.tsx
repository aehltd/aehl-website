import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FullNavBar from "./components/FullNavBar";
import Footer from "./components/Footer";
import LoadingPage from "./pages/LoadingPage";

const HomePage = lazy(() => import("./pages"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const USOverview = lazy(() => import("./pages/us"));
const USProductsPage = lazy(() => import("./pages/us/ProductsPage"));
const USMetricsPage = lazy(() => import("./pages/us/MetricsPage"));

const KylinOverviewPage = lazy(() => import("./pages/kylin"));
const KylinModelPage = lazy(() => import("./pages/kylin/ModelPage"));

const IRFilingsPage = lazy(() => import("./pages/ir/FilingsPage"));
const IRStockPage = lazy(() => import("./pages/ir/StockPage"));
const IRNewsPage = lazy(() => import("./pages/ir/NewsPage"));
const IREventsPresentationsPage = lazy(
  () => import("./pages/ir/EventsPresentationsPage")
);
const IRDocumentsPage = lazy(() => import("./pages/ir/DocumentsPage"));
const IRFAQPage = lazy(() => import("./pages/ir/FAQPage"));
const NotFoundPage = lazy(() => import("./pages/404NotFoundPage"));
const IRBoardPage = lazy(() => import("./pages/ir/BoardPage"));
const IROverviewPage = lazy(() => import("./pages/ir/OverviewPage"));
const IRContactPage = lazy(() => import("./pages/ir/ContactPage"));
const IRCompositionPage = lazy(() => import("./pages/ir/CompositionPage"));
const IREmailAlertsPage = lazy(() => import("./pages/ir/EmailAlertsPage"));

const App = () => {
  return (
    <div className="min-h-screen max-h-screen flex flex-col overflow-hidden">
      <Router>
        <header className="flex-none">
          <FullNavBar />
        </header>
        <div className="flex flex-1 flex-col overflow-y-auto">
          <main className="flex-1">
            <Suspense fallback={<LoadingPage />}>
              <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/aehl-us/overview" element={<USOverview />} />
                <Route path="/aehl-us/products" element={<USProductsPage />} />
                <Route path="/aehl-us/metrics" element={<USMetricsPage />} />

                <Route
                  path="/aehl-kylin/overview"
                  element={<KylinOverviewPage />}
                />
                <Route path="/aehl-kylin/model" element={<KylinModelPage />} />

                <Route path="/ir" element={<IROverviewPage />} />
                <Route path="/ir/overview" element={<IROverviewPage />} />
                <Route path="/ir/press-releases" element={<IRNewsPage />} />
                <Route
                  path="/ir/events-presentations"
                  element={<IREventsPresentationsPage />}
                />
                <Route path="/ir/sec-filings" element={<IRFilingsPage />} />
                <Route path="/ir/stock-information" element={<IRStockPage />} />
                <Route path="/ir/documents" element={<IRDocumentsPage />} />
                <Route
                  path="/ir/committee-composition"
                  element={<IRCompositionPage />}
                />
                <Route path="/ir/board" element={<IRBoardPage />} />
                <Route path="/ir/contact-ir" element={<IRContactPage />} />
                <Route path="/ir/faqs" element={<IRFAQPage />} />
                <Route
                  path="/ir/email-alerts"
                  element={<IREmailAlertsPage />}
                />

                <Route path="/contact-us" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <footer className="flex-none">
            <Footer />
          </footer>
        </div>
      </Router>
    </div>
  );
};

export default App;
