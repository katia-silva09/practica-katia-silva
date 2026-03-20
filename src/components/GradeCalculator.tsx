export const calculateAverage = (grades: number[]): number => {
  const total = grades.reduce((acc, grade) => acc + grade, 0);
  return total / grades.length;
};

export const GradeCalculator = () => {
  const grades: number[] = [78, 68, 96, 80];

  return (
    <div className="p-4">
      <h2 className="font-bold">Calificaciones:</h2>
      <ul>
        {grades.map((grade, index) => (
          <li key={index}>{grade}</li>
        ))}
      </ul>

      <p className="mt-2 font-semibold">
        Promedio: {calculateAverage(grades)}
      </p>
    </div>
  );
};

