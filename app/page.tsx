// @ts-nocheck
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import StudentCard from "./components/StudentCard";
import { studentsData } from "./data/students";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <Navbar />
      <h1>Bootcamp Dashboard</h1>
      <Counter />

      <h2>Students</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {studentsData.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </div>
    </main>
  );
}
