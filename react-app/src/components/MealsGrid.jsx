import MealCard from './MealCard';
import meals from '../data/meals';

function MealsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {meals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </div>
  );
}

export default MealsGrid;
