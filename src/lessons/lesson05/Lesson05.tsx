import { fellowship } from './fellowship';
import './lesson05.css';

function Lesson05() {

  // fellowship.map((character, num) => {
  //   console.log(character.name + " - с индексом " + (num + 1) + " и id " + character.id)
  // })

  // console.log(fellowship[1].weapons[0])



  return (
    <div>
      <h2>React map() components 🧝‍♀️</h2>
      {fellowship.map((hero) => (
        // key - это уникальное значение которое просит передать react в итерируемую верстку для того чтобы не ошибиться в отрисовки при сложных операциях (сортировка / удаление)
        <div className="heroCard" key={hero.id}>
          <p>Hero: {hero.name}</p>
          <img height={150} src={hero.image} alt="" />
          <p>{hero.isDark ? 'Villain 🔥' : 'Hero ✨'}</p>
          <p>{hero.age} years old</p>
          {/* тернарным оператором проверяем наличие элементов в массиве */}
          {hero.weapons[0] ? (
            // если есть то выводим через map() оружие и строку разделитель
            <p>⚔️ {hero.weapons.map(el => " | " + el)} </p>
            // если нет выводим "No weapons"
          ) : <p>No weapons 🫣</p>}
        </div>
      ))}

    </div>
  );
}

export default Lesson05;
