import { useState } from "react";
import "./App.css";

import { steps } from "./constants";
import Welcome from "./pages/Welcome/Welcome";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo";
import TechnicalSkills from "./pages/TechnicalSkills/TechnicalSkills";
import Covid from "./pages/Covid/Covid";
import AboutYou from "./pages/AboutYou/AboutYou";
import SubmitPage from "./pages/SubmitPage/SubmitPage";
import Thanks from "./pages/Thanks/Thanks";
import SubmittedApplications from "./pages/SubmittedApplications/SubmittedApplications";

function App() {
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [data, setData] = useState({});

  const handleStepChange = (newData, step) => {
    setData({ ...data, ...newData });
    setCurrentStep(step);
  };

  switch (currentStep) {
    case steps[1]:
      return (
        <PersonalInfo
          data={data}
          handleStepChange={handleStepChange}
          setCurrentStep={setCurrentStep}
        />
      );
    case steps[2]:
      return (
        <TechnicalSkills
          data={data}
          handleStepChange={handleStepChange}
          setCurrentStep={setCurrentStep}
        />
      );
    case steps[3]:
      return (
        <Covid
          data={data}
          handleStepChange={handleStepChange}
          setCurrentStep={setCurrentStep}
        />
      );
    case steps[4]:
      return (
        <AboutYou
          data={data}
          handleStepChange={handleStepChange}
          setCurrentStep={setCurrentStep}
        />
      );
    case steps[5]:
      return (
        <SubmitPage
          data={data}
          setCurrentStep={setCurrentStep}
          setData={setData}
        />
      );
    case steps[6]:
      return <Thanks setCurrentStep={setCurrentStep} />;
    case steps[7]:
      return <SubmittedApplications setCurrentStep={setCurrentStep} />;
    default:
      return <Welcome setCurrentStep={setCurrentStep} />;
  }
}

export default App;
