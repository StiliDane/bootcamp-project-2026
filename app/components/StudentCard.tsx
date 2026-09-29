import { Student } from '../data/students';

export default function StudentCard({ name, major, imageUrl }: Student) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
      <img src={imageUrl} alt={name} width={200} height={200} />
      <h3>{name}</h3>
      <p>{major}</p>
    </div>
  );
}