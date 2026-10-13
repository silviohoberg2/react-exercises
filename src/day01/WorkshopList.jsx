import WorkshopCard from "./WorkshopCard.jsx";

export default function WorkshopList() {
  return (
    <section>
      <h2>Workshops</h2>

      <WorkshopCard
        title="JavaScript Basics"
        trainer="Anna Weber"
        duration={8}
        level="Beginner"
        online={true}
      />

      <WorkshopCard
        title="React Grundlagen"
        trainer="Max Berger"
        duration={16}
        level="Fortgeschritten"
        online={false}
      />

      <WorkshopCard
        title="Git und GitHub"
        trainer="Laura König"
        duration={8}
        level="Beginner"
        online={true}
      />
    </section>
  );
}