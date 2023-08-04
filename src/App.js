import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard title="Alexa" handle="@alexa99"/>
      <ProfileCard title="Cortana" handle="@acortana42"/>
      <ProfileCard title="Siri" handle="@siri01"/>
    </div>
  );
}

export default App;
