import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "./components/About";
import Footer from "./components/footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import SignOut from "./components/signout";
import MyCards from "./components/myCards";
import ProtectedRoute from "./components/common/protectedRoute";
import CardCreate from "./components/cardCreate";
import CardsDelete from "./components/cardDelete";
import CardEdit from "./components/cardEdit";
import FullCard from "./components/FullCard";
import FirstCardPresent from "./components/FirstCardsPresent";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <ToastContainer />
      <header>
        <Navbar />
      </header>
      <main id="inner-main" className="flex-fill d-flex flex-column">
        <div id="mainOverlay" className="p-2 flex-fill flex-column d-flex">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="sign-up" element={<SignUp redirect="/sign-in" />} />
            <Route path="sign-in" element={<SignIn redirect="/" />} />
            <Route path="sign-out" element={<SignOut redirect="/" />} />
            <Route
              path="my-cards"
              element={
                <ProtectedRoute onlyBiz>
                  <MyCards />
                </ProtectedRoute>
              }
            />
            <Route
              path="card-create"
              element={
                <ProtectedRoute onlyBiz>
                  <CardCreate />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-cards/delete/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <CardsDelete />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-cards/edit/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <CardEdit />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-cards/view/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <FullCard />
                </ProtectedRoute>
              }
            />
            <Route path="first-card-present" element={<FirstCardPresent />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
